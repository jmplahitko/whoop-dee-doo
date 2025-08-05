import { callWhoop } from '../../../utils/callWhoop'

export default defineEventHandler(async (event) => {
	const cycleId = getRouterParam(event, 'id')

	if (!cycleId) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Cycle ID is required'
		})
	}

	try {
		const cycle = await callWhoop<WhoopCycle>(event, {
			url: `https://api.prod.whoop.com/developer/v2/cycle/${cycleId}`
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
