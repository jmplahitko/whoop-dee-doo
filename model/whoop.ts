export interface WhoopUserProfile {
	user_id: string
	email: string
	first_name: string
	last_name: string
}

export interface WhoopTokenResponse {
	access_token: string
	refresh_token: string
}