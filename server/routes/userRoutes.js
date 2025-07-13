import express from 'express';
import {signup, login, getProfile, getAllProfile,deleteUser} from '../controllers/userController.js';
import {auth} from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login',login);
router.get('/profile',auth, getProfile);
router.get('/getAll',auth, authorizeRoles('admin'), getAllProfile);
router.delete('/:userId', auth, authorizeRoles('admin'),deleteUser);


export default router;