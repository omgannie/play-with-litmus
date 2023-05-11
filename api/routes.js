import express from 'express';
import { Passage } from './models';

const router = express.Router();

// POST /passages
// parse request for passage to use for watson and spotify
// return song recommendation and emotional score of the song
router.post('/passages', (req, res) => {
    const body = new Passage(req.body);

    res.json({ body });
});

// GET /passages/:id
// fetch passage
router.get('/passages/:id', (req, res) => {
    const body = Passage.findById()
});

export default router;
