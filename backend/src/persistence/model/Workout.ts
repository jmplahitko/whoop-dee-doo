import mongoose, { Schema, Document } from 'mongoose';
import { Workout as WorkoutScore } from '../../domain/Workout';

interface WorkoutDocument extends Document {
	workoutId: number;
	type: string;
	createdDate: Date;
	updatedDate: Date;
	startDate: Date;
	endDate: Date;
	timezoneOffset: string;
	scoreState: "SCORED" | "PENDING_SCORE" | "UNSCORABLE";
	score: WorkoutScore;
}

const WorkoutSchema = new Schema<WorkoutDocument>({
	workoutId: { type: Number, required: true },
	type: { type: String, required: true },
	createdDate: { type: Date, required: true },
	updatedDate: { type: Date, required: true },
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	timezoneOffset: { type: String, required: true },
	scoreState: { type: String, required: true },
	score: {
		strain: { type: Number, required: true },
		averageHeartRate: { type: Number, required: true },
		maxHeartRate: { type: Number, required: true },
		kilojoule: { type: Number, required: true },
		distance: { type: Number, required: true },
		altitudeGain: { type: Number, required: true },
		altitudeChange: { type: Number, required: true },
		hrZoneDuration: {
			zero: { type: Number, required: true },
			one: { type: Number, required: true },
			two: { type: Number, required: true },
			three: { type: Number, required: true },
			four: { type: Number, required: true },
			five: { type: Number, required: true }
		}
	}
}, {
	timestamps: true
});

export const Workout = mongoose.model<WorkoutDocument>('Workout', WorkoutSchema); 