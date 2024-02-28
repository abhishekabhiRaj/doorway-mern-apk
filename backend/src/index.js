import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { loginRouter } from './routes/login.js';

mongoose.connect('mongodb://localhost:27017/doorway');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', loginRouter);

app.listen(8081, ()=>{
    console.log('Server is running on port 8081');
});