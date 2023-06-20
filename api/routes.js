import express from 'express';
import { Passage } from './models/Passage.js';

const router = express.Router();
//
//if (process.env.NODE_ENV == "local") {
//    // initialize fake backend
//} else {
//
//}

// POST /passages
// parse request for passage to use for watson and spotify
// return song recommendation and emotional score of the song
router.post('/passages', (req, res) => {
    const passage = new Passage(req.body);
    const body = passage.populateAnalysis();

    res.json({ body });
});

// GET /passages/:id
// fetch passage
router.get('/passages/:id', (req, res) => {
    const body = Passage.findById()
});

export default router;
