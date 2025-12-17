// equivalent file to starWarsControllers.ts
import type { RequestHandler } from 'express' 
import db from '../model/database.ts'


interface adventureController {
getAdventures: RequestHandler;
getAdventureDetails: RequestHandler;
getExpenses: RequestHandler;
getBalances: RequestHandler;
createAdventure: RequestHandler;
}


const adventureController = {} as adventureController;

//getAdventures: gets all adventures (Main page - ‘/’)
adventureController.getAdventures = async (req, res, next) => {
    try {
        const getAdventures = `SELECT * FROM adventures`;
        const result = await db.query(getAdventures);
        res.locals.getAllAdventures = result.rows;
        console.log(res.locals.getAllAdventures);
        return next();
    }
    catch(err) {
    return next(`${err} Error loading adventures`)
    }
}

//getAdventureDetails: gets one adventure by id (‘/adventure-details')
adventureController.getAdventureDetails = async (req, res, next) => {
    try {
        const getAdventureDetails = `SELECT `
        const result = await db.query(getAdventureDetails);
        res.locals.getAllAdventureDetails = result.rows;
        return next();
    }
    catch(err) {
    return next(`${err} Error loading adventure details`)
    }
}

//getExpenses: gets expenses for one adventure by id (‘/adventure-details/expenses/:id’)
adventureController.getExpenses = async (req, res, next) => {
    try {
        const getExpenses = `SELECT `
        const result = await db.query(getExpenses);
        res.locals.getAllExpenses = result.rows;
        return next();
    }
    catch(err) {
    return next(`${err} Error loading expenses`)
    }
}

//getBalances: gets balances for one adventure by id (‘adventure-details/balances:id’)
adventureController.getBalances = async (req, res, next) => {
    try {
        const getBalances = `SELECT `
        const result = await db.query(getBalances);
        res.locals.getAllBalances = result.rows;
        return next();
    }
    catch(err) {
    return next(`${err} Error loading balances`)
    }
}

// createAdventure: adds new adventure (‘/create-adventure’)
adventureController.createAdventure = async (req, res, next) => {
    try {
        const createAdventure = `SELECT `
        const result = await db.query(createAdventure);
        res.locals.createNewAdventure = result.rows;
        return next();
    }
    catch(err) {
    return next(`${err} Error creating new adventure`)
    }
}



export default adventureController