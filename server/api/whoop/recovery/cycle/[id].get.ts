import { callWhoop } from '../../../../utils/callWhoop'

export default defineEventHandler(async (event) => {
	const cycleId = getRouterParam(event, 'id')

	if (!cycleId) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Cycle ID is required'
		})
	}

	try {
		const recovery = await callWhoop<WhoopRecovery>(event, {
			url: `https://api.prod.whoop.com/developer/v2/activity/recovery/cycle/${cycleId}/recovery`
		})

		return {
			recovery
		}
	} catch (error: any) {
		console.error('Error fetching recovery:', error)

		// Handle specific error cases based on WHOOP API responses
		if (error.status === 404) {
			throw createError({
				statusCode: 404,
				statusMessage: 'Recovery not found'
			})
		}

		if (error.statusCode === 401) {
			throw createError({
				statusCode: 401,
				statusMessage: 'Invalid or expired access token. Please re-authenticate.'
			})
		}

		if (error.statusCode === 429) {
			throw createError({
				statusCode: 429,
				statusMessage: 'Rate limit exceeded. Please try again later.'
			})
		}

		throw createError({
			statusCode: 500,
			statusMessage: 'Failed to fetch recovery from WHOOP'
		})
	}
}) 