export async function getAccessToken(params: {
	client_id: string
	client_secret: string
	redirect_uri?: string
	refresh_token?: string
	code?: string
}) {
	const body = new URLSearchParams({
		...params,
		grant_type: params.refresh_token ? 'refresh_token' : 'authorization_code',
		scope: 'read:recovery read:cycles read:sleep read:workout read:profile read:body_measurement offline',
	});

	try {
		const refreshTokenResponse: WhoopTokenResponse = await $fetch(`https://api.prod.whoop.com/oauth/oauth2/token`, {
			body,
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			}
		});

		return refreshTokenResponse;
	} catch (error) {
		console.error(error);
		throw error;
	}
}