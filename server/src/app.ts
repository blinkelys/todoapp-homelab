import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
const app = express();
const PORT = process.env.PORT || 3000;
import { connectDB } from "./db"

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// dotenv config
dotenv.config();

// CORS Config
import cors from 'cors';
app.use(cors());

// DB connection
connectDB();

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));