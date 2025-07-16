import { defineEventHandler, sendRedirect } from 'h3'

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()

	const whoopAuthUrl = 'https://api.prod.whoop.com/oauth/oauth2/auth'
	const params = new URLSearchParams({
		client_id: config.whoop.clientId,
		redirect_uri: config.whoop.redirectUri,
		response_type: 'code',
		scope: 'read:recovery read:cycles read:sleep read:workout read:profile read:body_measurement',
		state: generateRandomString(32)
	})

	return sendRedirect(event, `${whoopAuthUrl}?${params.toString()}`)
})

function generateRandomString(length: number): string {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	let result = ''
	for (let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length))
	}
	return result
} 