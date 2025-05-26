export interface Workout {
	id: number;
	userId: number;
	type: string;
	createdDate: Date;
	updatedDate: Date;
	startDate: Date;
	endDate: Date;
	timezoneOffset: string;
	scoreState: ScoreState;
	score: WorkoutScore;
}

export type ScoreState = "SCORED" | "PENDING_SCORE" | "UNSCORABLE";

export interface WorkoutScore {
	strain: number;
	averageHeartRate: number;
	maxHeartRate: number;
	kilojoule: number;
	distance: number;
	altitudeGain: number;
	altitudeChange: number;
	hrZoneDuration: WorkoutZoneDuration;
}

export interface WorkoutZoneDuration {
	zero: number;
	one: number;
	two: number;
	three: number;
	four: number;
	five: number;
}