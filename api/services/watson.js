import NaturalLanguageUnderstandingV1 from 'ibm-watson/natural-language-understanding/v1.js';
import { IamAuthenticator } from 'ibm-watson/auth/index.js';
import * as dotenv from 'dotenv';

dotenv.config();

const NLUInstance = new NaturalLanguageUnderstandingV1({
    version: process.env.default_watson_auth_version,
    authenticator: new IamAuthenticator({ apikey: process.env.watson_api_key }),
    serviceUrl: process.env.watson_service_url,
    headers: {
        'X-Watson-Learning-Opt-Out': 'true'
    }
});

export async function analyzePassage(textBody) {
    return NLUInstance.analyze({
        'features': {
            'classifications': {
                'model': 'tone-classifications-en-v1'
            },
            'emotion': {
                'document': false,
                'targets': textBody
            },
            'categories': {
                'explanation': true
            },
            'concepts': {
                'limit': 1
            },
            'entities': {
                'emotion': true,
                'sentiment': true,
                'limit': 5
            },
            'keywords': {
                'sentiment': true,
                'emotion': true,
                'limit': 3
            },
        },
        'text': textBody
    })
    .then(res => res.result)
    .catch(e => e.message);
}