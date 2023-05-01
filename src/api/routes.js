import express from 'express';
import models from './models';

const router = express.Router();

// POST /passages
// parse request for passage to use for watson and spotify
// return song recommendation and emotional score of the song
router.post('/passages', (req, res) => {
    const body = Passage.create(req.body);
});

// GET /saved
// fetch all saved song recommendations with passage and emotional score
// based on logged in user info (previous passage input)
router.get('/saved', (req, res) => {
    
});

export default router;
