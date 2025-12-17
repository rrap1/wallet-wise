// equivalent file to star wars server.ts

import express from 'express';
import apiRouter from './routes/api.ts'
import cors from 'cors'
import dotenv from 'dotenv'
import db from '../server/model/database.ts'


const app = express();
const PORT = 3000; 

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({
  origin: 'http//localhost:5173',
  credentials: true
}));

app.use('/', apiRouter);

//catch-all route handler for requests to an unknown route
app.use((req, res) => res.status(404).send('Cannot find that page'));

//TODO: Global error handler 500
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

db.isConnected()

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

export default app;
