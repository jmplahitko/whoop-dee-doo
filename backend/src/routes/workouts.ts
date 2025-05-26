import express, { Request, Response } from 'express';
import { Workout } from '../service-model/whoop';

const router = express.Router();

// Get all workouts
router.get('/', async (_req: Request, res: Response) => {
	try {
		const workouts = await Workout.find().sort({ date: -1 });
		res.json(workouts);
	} catch (error) {
		res.status(500).json({ message: 'Error fetching workouts', error });
	}
});

// Get workout by ID
router.get('/:id', async (req: Request, res: Response) => {
	try {
		const workout = await Workout.findById(req.params.id);
		if (!workout) {
			return res.status(404).json({ message: 'Workout not found' });
		}
		res.json(workout);
	} catch (error) {
		res.status(500).json({ message: 'Error fetching workout', error });
	}
});

// Create new workout
router.post('/', async (req: Request, res: Response) => {
	try {
		const workout = new Workout(req.body);
		await workout.save();
		res.status(201).json(workout);
	} catch (error) {
		res.status(400).json({ message: 'Error creating workout', error });
	}
});

export default router; 