
export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const query = getQuery<WhoopCycleQuery>(event)

	// Build query parameters
	const params = new URLSearchParams()

	if (query.limit) {
		params.append('limit', query.limit.toString())
	}

	if (query.startDate) {
		params.append('start', query.startDate)
	}

	if (query.endDate) {
		params.append('end', query.endDate)
	}

	if (query.nextToken) {
		params.append('nextToken', query.nextToken)
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
		const response = await $fetch<WhoopCollectionResponse<WhoopCycle>>(`https://api.prod.whoop.com/developer/v2/cycle?${params.toString()}`, {
			headers: {
				'Authorization': `Bearer ${session.whoopAccessToken}`
			}
		})
		console.log(response)
		return {
			cycles: response.records,
			nextToken: response.next_token
		}
	} catch (error) {
		console.error('Error fetching cycles:', error)
		throw createError({
			statusCode: 500,
			statusMessage: 'Failed to fetch cycles from WHOOP'
		})
	}
}) 