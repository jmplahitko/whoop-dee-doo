declare module '#auth-utils' {
	interface User {
		id: string
		email: string
		fullName: string
		firstName: string
		lastName: string
	}

	interface UserSession {
		user: User
		whoopAccessToken: string
		whoopRefreshToken: string
		whoopAccessTokenExpiresAt: Date
	}
}

export { }