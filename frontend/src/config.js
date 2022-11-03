import { config } from 'dotenv';
config();

export const API_ROUTE = process.env.API_ROUTE || 'http://44.210.164.233:3001'

console.log(API_ROUTE)