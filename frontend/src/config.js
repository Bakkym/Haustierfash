import { config } from 'dotenv';
config();

export const API_ROUTE = process.env.API_ROUTE || 'http://localhost:3001'

console.log(API_ROUTE)