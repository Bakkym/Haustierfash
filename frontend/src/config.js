import { config } from 'dotenv';
config();

export const API_ROUTE = process.env.API_ROUTE || 'http://52.0.152.189'

console.log(API_ROUTE)