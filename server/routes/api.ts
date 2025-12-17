// equivalent file to star wars api.ts
import express from 'express'
import adventureController from '../controllers/adventureController.ts'

const router = express.Router();

//router.get for getAdventures ('/')
router.get('/',
    adventureController.getAdventures,
    (req, res) => res.status(200).json(res.locals.getAllAdventures)
  );
  
//router.get for getAdventureDetails (‘/adventure-details/')
router.get('/adventure-details/',
    adventureController.getAdventureDetails,
    (req, res) => res.status(200).json(res.locals.getAllAdventureDetails)
  );

//router.get for getExpenses (‘/adventure-details/expenses/:id’)
router.get('/adventure-details/expenses/:id',
    adventureController.getExpenses,
    (req, res) => res.status(200).json(res.locals.getAllExpenses)
  );

//router.get for getBalances (‘adventure-details/balances:id’)
router.get('/adventure-details/balances/:id',
    adventureController.getBalances,
    (req, res) => res.status(200).json(res.locals.getAllBalances)
  );

//router.post for createAdventure (‘/create-adventure’)
router.post('/create-adventure',
    adventureController.createAdventure,
    (req, res) => res.status(200).json(res.locals.createNewAdventure)
    // (req, res) => res.status(200).send(`${req.locals.createAdventure} successfully added as new itinerary!`)
  );




export default router;