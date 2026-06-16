import express from 'express';
import { getAllUsers } from '../controller/userController.js';


const route = express.Router();

route.get('/allusers',getAllUsers);

export default route;

