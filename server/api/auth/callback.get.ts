import { defineEventHandler, getQuery, createError, sendRedirect } from 'h3'

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const query = getQuery(event)

	// Verify we have the authorization code
	if (!query.code) {
		throw createError({
			statusCode: 400,
			message: 'Missing authorization code'
		})
	}

	try {
		// Exchange authorization code for access token
		const tokenResponse = await $fetch('https://api.prod.whoop.com/oauth/oauth2/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				client_id: config.whoop.clientId,
				client_secret: config.whoop.clientSecret,
				code: query.code as string,
				grant_type: 'authorization_code',
				redirect_uri: config.whoop.redirectUri
			})
		})

		// Get user profile from Whoop
		const userProfile = await $fetch('https://api.prod.whoop.com/developer/v2/user/profile/basic', {
			headers: {
				'Authorization': `Bearer ${tokenResponse.access_token}`
			}
		})

		// Set user session with Whoop data
		await setUserSession(event, {
			user: {
				id: userProfile.user_id,
				email: userProfile.email,
				fullName: `${userProfile.first_name} ${userProfile.last_name}`,
				firstName: userProfile.first_name,
				lastName: userProfile.last_name,
				whoopAccessToken: tokenResponse.access_token,
				whoopRefreshToken: tokenResponse.refresh_token
			}
		})

		// Redirect to dashboard or home page
		return sendRedirect(event, '/dashboard')

	} catch (error) {
		console.error('OAuth callback error:', error)
		throw createError({
			statusCode: 500,
			message: 'Failed to complete authentication'
		})
	}
}) 