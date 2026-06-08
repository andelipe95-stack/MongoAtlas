const router = require('express').Router();
const { getTeacher, createTeacher, updateTeacher,deleteadoTeacher } = require('../controllers/teacher_controller');
const { deleteTeacher } = require('../services/teacher_service');
const authRequired = require('../middleware/auth_required')
const requireRole = require('../middleware/require_role');


const validate = require('../middleware/validator');
const { body } = require('express-validator');


const teacherValidation = [
    body('name').isString().withMessage('El nombre es obligatorio y debe ser una cadena'),
    body('age').isNumeric().withMessage('La edad debe ser un número'),
    body('email').isEmail().withMessage('El correo electrónico es obligatorio y debe ser válido')
];

router.use(authRequired);

router.get("/{:email}",requireRole('teacher'), getTeacher); // dentro va '/', no '/admin'
router.post('/', teacherValidation, validate, createTeacher);
router.put('/:id', teacherValidation, validate, updateTeacher);
router.delete("/:id", deleteadoTeacher);
module.exports = router;