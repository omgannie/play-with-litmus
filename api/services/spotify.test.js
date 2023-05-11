import axios from 'axios';
import { describe, expect, test } from "@jest/globals";
import {
    SPOTIFY_TOKEN_URI,
    SPOTIFY_RECOMMENDATIONS_URI,
    fetchToken,
    getSongRecommendations
} from "../../services/spotify.js";

let mocks = {}

describe("services/spotify.js - a spotify service wrapper", () => {
    let response;
    
    describe("fetchToken", () => {
        beforeAll(async () => {
            response = await fetchToken();
        })
        it("builds correct request", () => {
            const { method, url, data } = response.config;
            expect(method).toEqual('post');
            expect(url).toEqual(SPOTIFY_TOKEN_URI)
            expect(data).toMatch(/grant_type=client_credentials/);
            expect(data).toMatch(/client_id=/);
            expect(data).toMatch(/client_secret=/);
        });
        
        it("responds with 200 OK and returns access token", () => {
           expect(response.status).toEqual(200);
           expect(response.data.access_token).toBeTruthy();
        });
    })
    
    describe.skip("getSongRecommendations", () => {
        jest.mock('axios');
        let response;
        
        beforeEach(async () => {
            response = await getSongRecommendations();
        });
        
        it("builds correct request", () => {
            const { method, url, data } = response.config;
            expect(method).toEqual('post');
            expect(url).toMatch(/SPOTIFY_RECOMMENDATIONS_URI/);
            expect(url).toMatch(/seed_artists/);
            expect(url).toMatch(/seed_genres/);
            expect(url).toMatch(/seed_tracks/);
        });
        
        it("responds with 200 OK", () => {
           response = getSongRecommendations();
           expect(response.status).toEqual(200);
        });
    });
});
