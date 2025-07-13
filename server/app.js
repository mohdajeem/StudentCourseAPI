import express from "express";
import cors from 'cors';
import studentRoutes from './routes/userRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import enrollRoutes from './routes/enrollRoutes.js';

const app = express();
app.use(cors());
app.use((express.json()));

app.use('/api/users',studentRoutes);
app.use('/api/courses',courseRoutes);
app.use('/api/admissions', enrollRoutes);

export default app;