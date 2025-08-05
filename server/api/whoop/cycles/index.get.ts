import { WhoopCollectionResponse } from '~~/shared/types/whoop'
import { callWhoop } from '../../../utils/callWhoop'

export default defineEventHandler(async (event) => {
	const query = getQuery(event)

	try {
		const response = await callWhoop<WhoopCollectionResponse<WhoopCycle>>(event, {
			url: 'https://api.prod.whoop.com/developer/v2/cycle',
			params: {
				limit: query.limit,
				start: query.startDate,
				end: query.endDate,
				nextToken: query.nextToken
			}
		})

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