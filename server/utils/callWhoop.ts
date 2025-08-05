import type { H3Event } from 'h3';
import { getAccessToken } from './getAccessToken';

interface WhoopApiOptions {
	url: string
	method?: 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'get' | 'post' | 'delete' | 'head' | 'patch' | 'put' | 'connect' | 'options' | 'trace'
	params?: Record<string, any>
	headers?: Record<string, string>
}

export async function callWhoop<T>(event: H3Event, options: WhoopApiOptions): Promise<T> {
	const config = useRuntimeConfig();
	let session = await getUserSession(event)

	if (!session?.whoopAccessToken) {
		throw createError({
			statusCode: 401,
			statusMessage: 'No access token available'
		})
	}

	const expiresAt = session.whoopAccessTokenExpiresAt;

	if (new Date(expiresAt) < new Date()) {
		const tokenResponse: WhoopTokenResponse = await getAccessToken({
			client_id: config.whoop.clientId,
			client_secret: config.whoop.clientSecret,
			refresh_token: session.whoopRefreshToken,
			redirect_uri: config.whoop.redirectUri
		});

		session = await replaceUserSession(event, {
			...session,
			whoopAccessToken: tokenResponse.access_token,
			whoopRefreshToken: tokenResponse.refresh_token,
			whoopAccessTokenExpiresAt: new Date(Date.now() + tokenResponse.expires_in * 1000)
		})
	}

	let url = options.url;

	try {
		// Build query parameters
		const params = new URLSearchParams()
		if (options.params) {
			Object.entries(options.params).forEach(([key, value]) => {
				if (value !== undefined && value !== null) {
					params.append(key, value.toString())
				}
			})
		}

		url = options.params ? `${options.url}?${params.toString()}` : options.url;

		const response = await $fetch(url, {
			method: options.method || 'GET',
			headers: {
				'Authorization': `Bearer ${session.whoopAccessToken}`,
				...options.headers
			}
		})

		return response as T;
	} catch (error: any) {
		// Check if it's an authentication error (401)
		if (error.status === 401) {
			console.error('Token refresh failed during API call:', error)
			// If refresh fails, redirect to login
			return sendRedirect(event, '/login') as T;
		}

		// Re-throw the original error if it's not a 401 or refresh failed
		throw error
	}
} 
