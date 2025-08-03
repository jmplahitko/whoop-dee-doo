declare global {
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
}

export { }