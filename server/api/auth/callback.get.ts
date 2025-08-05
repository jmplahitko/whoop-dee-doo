import { defineEventHandler, getQuery, createError, sendRedirect } from 'h3'
import { getAccessToken } from '../../utils/getAccessToken'

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
		const tokenResponse: WhoopTokenResponse = await getAccessToken({
			client_id: config.whoop.clientId,
			client_secret: config.whoop.clientSecret,
			redirect_uri: config.whoop.redirectUri,
			code: query.code as string,
		});

		console.log(tokenResponse);

		// Get user profile from Whoop
		const userProfile: WhoopUserProfile = await $fetch('https://api.prod.whoop.com/developer/v2/user/profile/basic', {
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
				lastName: userProfile.last_name
			},
			whoopAccessToken: tokenResponse.access_token,
			whoopRefreshToken: tokenResponse.refresh_token,
			whoopAccessTokenExpiresAt: new Date(Date.now() + tokenResponse.expires_in * 1000)
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