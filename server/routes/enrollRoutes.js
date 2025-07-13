import express from 'express';
import { enrollCourse, getEnrolledCourse } from '../controllers/enrollmentController.js';

import { auth } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.post('/enroll', auth, authorizeRoles("student"), enrollCourse);
router.get('/my-courses', auth,authorizeRoles("student"), getEnrolledCourse);

export default router;
