//equivalent file to start wars starWarsModels.ts

import type { QueryResult } from "pg"; 
import dotenv from 'dotenv'
import { Pool } from 'pg';

dotenv.config();



const pool = new Pool({
  connectionString: process.env.PG_URI,
  ssl: {
    rejectUnauthorized: false },
  });

// async function testConnection(): Promise<void> {
//   try {
//     const client = await pool.connect();
//     console.log('🥳 connected to database');
//     client.release(); // Always release the connection back to the pool
//   }
//   catch(err) {
//     console.log('🚨 could not connect to database:', err);
//   }
// }

// // Test the connection when the module loads
// testConnection();

export default {
  query: (text: string, params?: any[]): Promise<QueryResult<any>> => {
    console.log("executed query", text);
    return pool.query(text, params);
  },
};
