import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
//import pool from './models/database'; // import { Pool, QueryResult } from 'pg';
import cors from 'cors';


// import apiRouter from'./routes/api';

const app = express();
const PORT = 3000; // 5432 this is the port in .env

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api", apiRouter); //!We don't need it since we are not modularazing routes

//! For testing purpuses we created a mock database

const mock: any[] = [
  {
    groupName: 'Trip to Paris',
    members: ['Katy', 'Hyeyoon', 'Damian', 'Rose'],
    amount: 1200,
  },
  {
    groupName: 'Trip to Tokyo',
    members: ['Katy', 'Hyeyoon', 'Damian', 'Rose'],
    amount: 1360,
  },
  {
    groupName: 'Trip to Cartagena',
    members: ['Katy', 'Hyeyoon', 'Damian', 'Rose'],
    amount: 100,
  },
  {
    groupName: 'Trip to islamabad',
    members: ['Katy', 'Hyeyoon', 'Rose'],
    amount: 1400,
  },
];

const users_table = [
  {
    id: 1,
    created_at: new Date(),
    name: 'Rose',
  },
  {
    id: 2,
    created_at: new Date(),
    name: 'Katy',
  },
  {
    id: 3,
    created_at: new Date(),
    name: 'Hyeyoon',
  },
  {
    id: 4,
    created_at: new Date(),
    name: 'Annie',
  },
];
const adventures_table = [
  {
    id: 1,
    create_at: new Date(),
    groupName: 'Trip to Paris',
    description: 'Vacation Summer 2026',
    start_date: new Date('2025-06-06'),
    end_date: new Date('2025-06-21'),
    created_by: 1, //! We can use filter later to do this
  },
  {
    id: 2,
    create_at: new Date(),
    groupName: 'Trip to Tokyo',
    description: 'Vacation Summer 2026',
    start_date: new Date('2025-08-10'),
    end_date: new Date('2025-08-15'),
    created_by: 2, //! We can use filter later to do this
  },
  {
    id: 3,
    create_at: new Date(),
    groupName: 'Trip to Cartagena',
    description: 'Vacation Summer 2026',
    start_date: new Date('2025-09-25'),
    end_date: new Date('2025-09-30'),
    created_by: 2, //! We can use filter later to do this
  },
  {
    id: 4,
    create_at: new Date(),
    groupName: 'Trip to islamabad',
    description: 'Vacation Summer 2026',
    start_date: new Date('2025-12-19'),
    end_date: new Date('2025-12-27'),
    created_by: 3, //! Links to User_table => We can use filter later to do this
  },
];
const adventures_members_table = [
  {
    id: 1,
    created_at: new Date(),
    joined_at: new Date(),
    adventure_id: 1,
    user_id: 1,
  },
  {
    id: 2,
    created_at: new Date(),
    joined_at: new Date(),
    adventure_id: 3,
    user_id: 1,
  },
  {
    id: 3,
    created_at: new Date(),
    joined_at: new Date(),
    adventure_id: 4,
    user_id: 1,
  },
  {
    id: 4,
    created_at: new Date(),
    joined_at: new Date(),
    adventure_id: 1,
    user_id: 4,
  },

];
const expenses_table = [
  {
    id:1,
    create_at: new Date(),
    adventure_id: 1, //We will link it later
    payer_id: 1, //We'll link it later
    amount: 300,
    description:"Musa Restaurant",
    category:"Food"
  },
   {
    id:2,
    create_at: new Date(),
    adventure_id: 1, //We will link it later
    payer_id: 4, //We'll link it later
    amount: 30,
    description:"Ice creams",
    category:"Food"
  },
    {
    id:3,
    create_at: new Date(),
    adventure_id: 1, //We will link it later
    payer_id: 4, //We'll link it later
    amount: 70,
    description:"Museum's entry fee",
    category:"Food"
  }


];

//TODO: Routes
app.get('/', async (req: Request, res: Response) => {
  // try {
  //   const result = await pool.query('SELECT * FROM "Adventures"');
  //   // destructure / stringify / etc BEFORE sending it to the frontend -> data you want is on result.rows[0]
  //   res.send(`Yay! Database is connected ${JSON.stringify(result.rows[0])}`);
  //   console.log('Result from DB: ', result);
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).send(`Womp, womp! Database is not connected ${err}`);
  // }
  
  res.status(200).json(mock);
});

//TODO: This route gets the group name from the form in create-group
app.post('/trip-name', async (req: Request, res: Response) => {
  // try {
  //   const { name } = req.body;
  //   const result = await pool.query(
  //     'INSERT INTO "Adventures" (name) VALUES ($1) RETURNING *',
  //     [name]
  //   );
  //   res.status(201).json(result.rows[0]);
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).send(`Error creating adventure: ${err}`);
  // }
});

//TODO: This route is to continue adding the information about trip [members, date_created, vvfibbfibnf ....]
//!We also need to add a way to verify that we are not using the same group name, even though we will have different _id
app.post('/trip-name:trip_id', async (req: Request, res: Response) => {
  const { trip_id } = req.params;


});

//Create gets: for adventure page, adventure detail (expenses and balances sections)

//TODO: 400 error handler
app.use((req, res) => res.sendStatus(404));

//TODO: Global error handler 500
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

export default app;



//adventure_members
//id -> int
//created_at -> timestamp
//joined_at -> timestamp
//adventure_id -> int //! FK to adventure table
//user_id -> int //!FK to users table

//adventures
//id -> int
//created_at
//name
//description
//start_date
//end_date
//created_by //!FK Users table

//users
//id -> int
//created_at ->timestamp
//username -> varchar

//expenses
//id -> int
//created_at -> timestamp
//adventure_id -> int //!FK to adventures table
//payer_id -> int //! FK to users table
//amount -> numeric
//description -> varchar
//category
