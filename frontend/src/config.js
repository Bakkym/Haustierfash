import { config } from 'dotenv';
config();

export const API_ROUTE = process.env.API_ROUTE || 'http://54.225.106.35'

console.log(API_ROUTE)