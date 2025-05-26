import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import workoutRoutes from './routes/workouts';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || '')
	.then(() => console.log('Connected to MongoDB Atlas'))
	.catch((error: Error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/workouts', workoutRoutes);

// Health check route
app.get('/api/health', (_req: Request, res: Response) => {
	res.json({ status: 'ok' });
});

// Start server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
}); 