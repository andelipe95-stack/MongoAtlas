const { obtenerTeachers, crearTeacher } = require('../services/teacher_service');

const getTeacher = async (req, res, next) => {
    try {
        const teacher = await obtenerTeachers();
        res.json(teacher);
    } catch (err) {
        next(err);
    }
};

const createTeacher = async (req, res, next) => {
    try {
        const newTeacher = await crearTeacher(req.body);
        res.status(201).json(newTeacher);
    } catch (err) {
        next(err);
    }
};

module.exports = { getTeacher, createTeacher };