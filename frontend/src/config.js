import { config } from 'dotenv';
config();

export const API_ROUTE = process.env.API_ROUTE || 'http://localhost'

console.log(API_ROUTE)