export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const cycleId = getRouterParam(event, 'id')

	if (!cycleId) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Cycle ID is required'
		})
	}

	// Get access token from session
	const session = await getUserSession(event)
	if (!session?.whoopAccessToken) {
		throw createError({
			statusCode: 401,
			statusMessage: 'Unauthorized'
		})
	}

	try {
		const cycle = await $fetch<WhoopCycle>(`https://api.prod.whoop.com/developer/v2/cycle/${cycleId}`, {
			headers: {
				'Authorization': `Bearer ${session.whoopAccessToken}`
			}
		})

		return {
			cycle
		}
	} catch (error: any) {
		console.error('Error fetching cycle:', error)

		// Handle specific error cases based on WHOOP API responses
		if (error.status === 404) {
			throw createError({
				statusCode: 404,
				statusMessage: 'Cycle not found'
			})
		}

		throw createError({
			statusCode: 500,
			statusMessage: 'Failed to fetch cycle from WHOOP'
		})
	}
})
