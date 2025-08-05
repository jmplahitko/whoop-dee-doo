export default defineNuxtRouteMiddleware(async (to) => {
	const { loggedIn, user, fetch } = useUserSession();
	await fetch();

	// If user is not authenticated and trying to access a protected route
	if (!user.value && to.path !== '/login') {
		return navigateTo('/login')
	}

	// If user is authenticated and trying to access login page, redirect to dashboard
	if (user.value && to.path === '/login') {
		return navigateTo('/dashboard')
	}
}) 