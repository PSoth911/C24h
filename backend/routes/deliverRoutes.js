import express from 'express';
import { getProfile } from '../controller/deliverController.js';
import { verifyToken } from '../middleware/auth_middleware.js';


const route = express.Router();

route.post('/profile',getProfile);


export default route;

