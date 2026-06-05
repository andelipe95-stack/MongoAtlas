const router = require('express').Router();
const { getTeacher, createTeacher, updateTeacher, deleteTeacher } = require('../controllers/teacher_controller');

const validate = require('../validate/validator');
const { body } = require('express-validator');

const teacherValidation = [
    body('name').isString().withMessage('El nombre es obligatorio y debe ser una cadena'),
    body('age').isNumeric().withMessage('La edad debe ser un número'),
    body('email').isEmail().withMessage('El correo electrónico es obligatorio y debe ser válido')
];

router.get("/{:email}", getTeacher);
router.post('/', teacherValidation, validate, createTeacher);
router.put('/:id', teacherValidation, validate, updateTeacher);
router.delete("/:id", deleteTeacher);

module.exports = router;