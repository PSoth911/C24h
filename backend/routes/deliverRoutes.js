import express from 'express';
import { getAllDeliveries } from '../controller/deliverController.js';


const route = express.Router();

route.get('/alldeliveries',getAllDeliveries);


export default route;

