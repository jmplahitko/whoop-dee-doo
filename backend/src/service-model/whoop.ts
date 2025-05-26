export interface Workout {
	id: string;
	date: Date;
	type: string;
	duration: number;
	strain: number;
	calories: number;
	averageHeartRate: number;
	maxHeartRate: number;
	recovery: number;
	hrv: number;
}
