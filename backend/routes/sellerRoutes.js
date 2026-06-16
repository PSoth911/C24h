import express from 'express';
import { getAllRestaurants } from '../controller/sellerController.js';


const route = express.Router();

route.get('/allrestaurants',getAllRestaurants);


export default route;

