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



/**
 * @swagger
 * /teacher:
 *   get:
 *     summary: Lista todos los teachers
 *     tags: [Teachers]
 *     responses:
 *       200:
 *         description: Lista de teachers
 */


router.get("/{:email}",  getTeacher); // dentro va '/', no '/admin'
router.use(authRequired);
router.post('/', teacherValidation, validate, createTeacher);
router.put('/:id', teacherValidation, validate, updateTeacher);
router.delete("/:id", deleteadoTeacher);
module.exports = router;