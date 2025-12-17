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
  
  // the export is an object which contains the query property allowing us to query the database and an isConnected property which contains an async function checking the health of the db connection
  
  export default {
    query: (text: string, params?: any[]): Promise<QueryResult<any>> => {
      console.log("executed query", text);
      return pool.query(text, params);
    },
    isConnected: async function (): Promise<void> {
      try {
        const client = await pool.connect();
        console.log('🥳 connected to database');
        client.release(); // Always release the connection back to the pool
        return true;
      }
      catch(error) {
        console.error('🚨 could not connect to database:', error);
        return false;
      }
    }
  // figure out the typscript and "any" issue
};

