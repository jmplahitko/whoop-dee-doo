import { callWhoop } from '../../../utils/callWhoop';

export default defineEventHandler(async (event) => {
	const workoutId = getRouterParam(event, 'id')

	if (!workoutId) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Workout ID is required'
		})
	}

	try {

		// Fetch specific workout from WHOOP API
		const workout = await callWhoop(event, {
			url: `https://api.prod.whoop.com/developer/v2/activity/workout/${workoutId}`
		})

		return {
			workout
		}

	} catch (error: any) {
		console.error('Error fetching workout from WHOOP:', error)

		if (error.statusCode === 401) {
			throw createError({
				statusCode: 401,
				statusMessage: 'Invalid or expired access token. Please re-authenticate.'
			})
		}

		if (error.statusCode === 404) {
			throw createError({
				statusCode: 404,
				statusMessage: 'Workout not found'
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
			statusMessage: 'Failed to fetch workout from WHOOP'
		})
	}
}) 