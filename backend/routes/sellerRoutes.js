import express from 'express';
import { getAllRestaurants,getRestaurantById } from '../controller/sellerController.js';


const route = express.Router();

route.get('/restaurants',getAllRestaurants);
route.get('/restaurants/:id',getRestaurantById);


export default route;

