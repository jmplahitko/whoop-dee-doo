import { ref, computed, readonly } from 'vue'

export type TimeframeType =
	| 'this-week'
	| 'last-week'
	| 'this-month'
	| 'last-month'
	| 'this-quarter'
	| 'last-quarter'
	| 'this-half'
	| 'last-half'
	| 'this-year'
	| 'last-year'
	| 'custom'

export interface Timeframe {
	type: TimeframeType
	startDate: string
	endDate: string
	label: string
}

const today = ref(new Date());
const selectedTimeframe = ref<TimeframeType>('this-week');
const customStartDate = ref<string>('');
const customEndDate = ref<string>('');

// Update today's date (useful for testing or when date changes)
const updateToday = (date: Date = new Date()) => {
	today.value = date
}

// Get the start of the week (Monday)
const getStartOfWeek = (date: Date): Date => {
	const d = new Date(date)
	const day = d.getDay()
	const diff = d.getDate() - day + (day === 0 ? -6 : 1) // Adjust when day is Sunday
	return new Date(d.setDate(diff))
}

// Get the end of the week (Sunday)
const getEndOfWeek = (date: Date): Date => {
	const start = getStartOfWeek(date)
	const end = new Date(start)
	end.setDate(start.getDate() + 6)
	end.setHours(23, 59, 59, 999)
	return end
}

// Get the start of the month
const getStartOfMonth = (date: Date): Date => {
	return new Date(date.getFullYear(), date.getMonth(), 1)
}

// Get the end of the month
const getEndOfMonth = (date: Date): Date => {
	return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999)
}

// Get the start of the quarter
const getStartOfQuarter = (date: Date): Date => {
	const quarter = Math.floor(date.getMonth() / 3)
	return new Date(date.getFullYear(), quarter * 3, 1)
}

// Get the end of the quarter
const getEndOfQuarter = (date: Date): Date => {
	const quarter = Math.floor(date.getMonth() / 3)
	const month = (quarter + 1) * 3 - 1
	return new Date(date.getFullYear(), month + 1, 0, 23, 59, 59, 999)
}

// Get the start of the half year
const getStartOfHalf = (date: Date): Date => {
	const half = Math.floor(date.getMonth() / 6)
	return new Date(date.getFullYear(), half * 6, 1)
}

// Get the end of the half year
const getEndOfHalf = (date: Date): Date => {
	const half = Math.floor(date.getMonth() / 6)
	const month = (half + 1) * 6 - 1
	return new Date(date.getFullYear(), month + 1, 0, 23, 59, 59, 999)
}

// Get the start of the year
const getStartOfYear = (date: Date): Date => {
	return new Date(date.getFullYear(), 0, 1)
}

// Get the end of the year
const getEndOfYear = (date: Date): Date => {
	return new Date(date.getFullYear(), 11, 31, 23, 59, 59, 999)
}

// Format date to ISO string for API calls
const formatDateForAPI = (date: Date): string => {
	return date.toISOString()
}

// Calculate timeframe based on type
const calculateTimeframe = (type: TimeframeType): Timeframe => {
	const now = today.value

	switch (type) {
		case 'this-week': {
			const start = getStartOfWeek(now)
			const end = getEndOfWeek(now)
			return {
				type,
				startDate: formatDateForAPI(start),
				endDate: formatDateForAPI(end),
				label: 'This Week'
			}
		}

		case 'last-week': {
			const lastWeek = new Date(now)
			lastWeek.setDate(now.getDate() - 7)
			const start = getStartOfWeek(lastWeek)
			const end = getEndOfWeek(lastWeek)
			return {
				type,
				startDate: formatDateForAPI(start),
				endDate: formatDateForAPI(end),
				label: 'Last Week'
			}
		}

		case 'this-month': {
			const start = getStartOfMonth(now)
			const end = getEndOfMonth(now)
			return {
				type,
				startDate: formatDateForAPI(start),
				endDate: formatDateForAPI(end),
				label: 'This Month'
			}
		}

		case 'last-month': {
			const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)
			const start = getStartOfMonth(lastMonth)
			const end = getEndOfMonth(lastMonth)
			return {
				type,
				startDate: formatDateForAPI(start),
				endDate: formatDateForAPI(end),
				label: 'Last Month'
			}
		}

		case 'this-quarter': {
			const start = getStartOfQuarter(now)
			const end = getEndOfQuarter(now)
			return {
				type,
				startDate: formatDateForAPI(start),
				endDate: formatDateForAPI(end),
				label: 'This Quarter'
			}
		}

		case 'last-quarter': {
			const lastQuarter = new Date(now)
			lastQuarter.setMonth(now.getMonth() - 3)
			const start = getStartOfQuarter(lastQuarter)
			const end = getEndOfQuarter(lastQuarter)
			return {
				type,
				startDate: formatDateForAPI(start),
				endDate: formatDateForAPI(end),
				label: 'Last Quarter'
			}
		}

		case 'this-half': {
			const start = getStartOfHalf(now)
			const end = getEndOfHalf(now)
			return {
				type,
				startDate: formatDateForAPI(start),
				endDate: formatDateForAPI(end),
				label: 'This Half'
			}
		}

		case 'last-half': {
			const lastHalf = new Date(now)
			lastHalf.setMonth(now.getMonth() - 6)
			const start = getStartOfHalf(lastHalf)
			const end = getEndOfHalf(lastHalf)
			return {
				type,
				startDate: formatDateForAPI(start),
				endDate: formatDateForAPI(end),
				label: 'Last Half'
			}
		}

		case 'this-year': {
			const start = getStartOfYear(now)
			const end = getEndOfYear(now)
			return {
				type,
				startDate: formatDateForAPI(start),
				endDate: formatDateForAPI(end),
				label: 'This Year'
			}
		}

		case 'last-year': {
			const lastYear = new Date(now.getFullYear() - 1, 0, 1)
			const start = getStartOfYear(lastYear)
			const end = getEndOfYear(lastYear)
			return {
				type,
				startDate: formatDateForAPI(start),
				endDate: formatDateForAPI(end),
				label: 'Last Year'
			}
		}

		case 'custom': {
			return {
				type,
				startDate: customStartDate.value,
				endDate: customEndDate.value,
				label: 'Custom'
			}
		}

		default:
			return calculateTimeframe('this-week')
	}
}

// Computed current timeframe
const currentTimeframe = computed(() => {
	return calculateTimeframe(selectedTimeframe.value)
})

// Set timeframe
const setTimeframe = (type: TimeframeType) => {
	selectedTimeframe.value = type
}

// Set custom dates
const setCustomDates = (startDate: string, endDate: string) => {
	customStartDate.value = startDate
	customEndDate.value = endDate
	selectedTimeframe.value = 'custom'
}

// Get all available timeframe options
const getTimeframeOptions = (): Array<{ value: TimeframeType; label: string }> => [
	{ value: 'this-week', label: 'This Week' },
	{ value: 'last-week', label: 'Last Week' },
	{ value: 'this-month', label: 'This Month' },
	{ value: 'last-month', label: 'Last Month' },
	{ value: 'this-quarter', label: 'This Quarter' },
	{ value: 'last-quarter', label: 'Last Quarter' },
	{ value: 'this-half', label: 'This Half' },
	{ value: 'last-half', label: 'Last Half' },
	{ value: 'this-year', label: 'This Year' },
	{ value: 'last-year', label: 'Last Year' },
	{ value: 'custom', label: 'Custom' }
]

export const useTimeframe = () => {
	return {
		// State
		today: readonly(today),
		selectedTimeframe: readonly(selectedTimeframe),
		customStartDate: readonly(customStartDate),
		customEndDate: readonly(customEndDate),
		currentTimeframe,

		// Actions
		updateToday,
		setTimeframe,
		setCustomDates,
		getTimeframeOptions
	}
}