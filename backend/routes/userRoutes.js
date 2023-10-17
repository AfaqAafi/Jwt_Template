import express from 'express'
import { authUser, getProfileUsers, logoutUsers, registerUser, updateUserProfile } from '../controllers/userController.js';
import protect from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUsers)
router.route('/profile').get(protect, getProfileUsers).put(protect, updateUserProfile)

export default router;