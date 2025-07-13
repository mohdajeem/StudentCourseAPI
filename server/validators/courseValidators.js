import {body} from 'express-validator';

export const courseValidationRules = [
    body('title').notEmpty().withMessage('Title is required. '),
    body('description').notEmpty().withMessage('Description is required'),
    body('code').notEmpty().withMessage('Course Code is required'),
    body('credits').isInt({min:1}).withMessage('credit must be greater than 0'),
];
