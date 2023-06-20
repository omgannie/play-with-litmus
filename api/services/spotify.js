import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export const SPOTIFY_TOKEN_URI = 'https://accounts.spotify.com/api/token';
export const SPOTIFY_API_BASE_URL = 'httpss://api.spotify.com'
export const SPOTIFY_RECOMMENDATIONS_ENDPOINT = '/v1/recommendations';
export const SPOTIFY_SEARCH_ENDPOINT = '/v1/search';

export const fetchToken = () => {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    const payload = {
        grant_type: "client_credentials",
        client_id: process.env.spotify_client_id,
        client_secret: process.env.spotify_client_secret
    }
    
    return axios.post(
        SPOTIFY_TOKEN_URI,
        payload,
        { headers });
};

// GET /v1/recommendations
// required params: seed_artists, seed_genres, seed_tracks
export const getSongRecommendations = async (artistIds, genres, trackIds, emotionalScore) => {
    const accessToken = await fetchToken()
        .then(res => res.data.access_token)
        .catch(e => e.message);
    
    const headers = {
        'Authorization': `Bearer ${accessToken}`
    }
    
    const params = _buildParams(artistIds, genres, trackIds, emotionalScore)
    
    return axios.get(
        SPOTIFY_API_BASE_URL + SPOTIFY_RECOMMENDATIONS_ENDPOINT + params,
        { headers }
        )
    .then(res => res.data.tracks)
    .catch(e => e.message)
}

const _buildParams = (artistIds, genres, trackIds, emotionalScore = null) => {
    let queryParamString = `?seed_artists=${artistIds.join()}&seed_genres=${genres.join()}&seed_tracks=${trackIds.join()}`
    
    if (emotionalScore) {
        emotionalScore.map((k, v) => queryParamString += `&${k}=${v}`)
    }
    
    return queryParamString
}

// GET /v1/search
export const searchByKeywords = async (keywords) => {
    const filters = keywords.map(() => {})
}

export const recs = await getSongRecommendations(['4NHQUGzhtTLFvgF5SZesLK'], ['classical', 'country'], ['0c6xIDDpzE81m2q797ordA']).then(r => r)