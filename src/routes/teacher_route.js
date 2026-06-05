const router = require('express').Router();
const { getTeacher, createTeacher } = require('../controllers/teacher_controller');

const validate = require('../validate/validator');
const { body } = require('express-validator');

const teacherValidation = [
    body('name').isString().withMessage('El nombre es obligatorio y debe ser una cadena'),
    body('age').isNumeric().withMessage('La edad debe ser un número'),
    body('email').isEmail().withMessage('El correo electrónico es obligatorio y debe ser válido')
];

router.get('/', getTeacher); // dentro va '/', no '/admin'
router.post('/', teacherValidation, validate, createTeacher);

module.exports = router;