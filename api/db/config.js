import dotenv from 'dotenv';

dotenv.config();

export const config = {
    host: process.env.db["host"],
    user: process.env.db["user"],
    password: process.env.db["password"]
}