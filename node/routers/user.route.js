import express from 'express';
import { createUser, deleteUser, getUser, getUsers } from '../controllers/user.controller.js';
import upload from '../middleware/multerconfig.js';

const router=express.Router()

router.post('/user',upload.single('profile'),createUser)
router.get('/user',getUsers)
router.get('/user/:id',getUser) 
router.delete('/user/:id',deleteUser) 

export default router;