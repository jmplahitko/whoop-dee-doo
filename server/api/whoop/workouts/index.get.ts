import { WhoopCollectionResponse } from '~~/shared/types/whoop';
import { callWhoop } from '../../../utils/callWhoop';

export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	let { startDate, endDate, limit = 25, nextToken } = query

	// Validate date formats if provided
	if (startDate && !isValidDate(startDate as string)) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Invalid startDate format. Use ISO861 format (YYYY-MM-DDTHH:mm:ss.sssZ)'
		})
	}

	if (endDate && !isValidDate(endDate as string)) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Invalid endDate format. Use ISO861 format (YYYY-MM-DDTHH:mm:ss.sssZ)'
		})
	}


	try {
		// Fetch workouts from WHOOP API
		let response = await callWhoop<WhoopCollectionResponse<WhoopWorkout>>(event, {
			url: 'https://api.prod.whoop.com/developer/v2/activity/workout',
			params: {
				start: startDate,
				end: endDate,
				limit,
				nextToken
			}
		});

		const workouts = response.records || [];
		const _nextToken = response.next_token;

		return {
			workouts,
			nextToken: _nextToken
		}

	} catch (error: any) {
		console.error('Error fetching workouts from WHOOP:', error)

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
			statusMessage: 'Failed to fetch workouts from WHOOP'
		})
	}
})


// Helper function to validate date format
function isValidDate(dateString: string): boolean {
	const date = new Date(dateString)
	return date instanceof Date && !isNaN(date.getTime())
} 