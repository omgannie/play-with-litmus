import { v4 as uuid } from 'uuid';

class SongInfo {
    constructor(params) {
        this.songName = params.songName;
        this.artist = params.artist.name;
        this.primaryEmotion = params.primaryEmotion;
    }
    
    getEmotionalScore() {
        
    }
}