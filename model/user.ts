declare module 'wdd' {
	interface UserProfile {
		id: string
		email: string
		fullName: string
		firstName: string
		lastName: string
	}

	interface UserSession {
		user: UserProfile
		whoopAccessToken: string
		whoopRefreshToken: string
	}
}