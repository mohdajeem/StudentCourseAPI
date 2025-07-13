import express from 'express';
import { createCourse, getCourses, getCourseEnrollmentCount , deleteCourseById, updateCourse, getInstructorByCourse, getCoursesByInstructor} from '../controllers/courseController.js';
import {auth} from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';
import { courseValidate } from '../middleware/courseValidate.js';
import { courseValidationRules } from '../validators/courseValidators.js';

const router = express.Router();

router.get('/',getCourses);
router.post('/',auth, authorizeRoles('admin','instructor'), courseValidationRules, courseValidate, createCourse);
router.get('/:courseId/enrollments',auth, getCourseEnrollmentCount);
router.get('/:courseId/instructor', auth, getInstructorByCourse);
router.get('/instructor/:instructorId', auth, getCoursesByInstructor);
router.delete('/:courseId', auth, authorizeRoles('admin','instructor'), deleteCourseById);
router.put('/:courseId', auth, authorizeRoles('admin', 'instructor'), updateCourse);


export default router;