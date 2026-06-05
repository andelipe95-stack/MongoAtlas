const { obtenerTeachers, crearTeacher, obtenerTeacherPorEmail, actualizarTeacher, delTeacher } = require('../services/teacher_service');

const getTeacher = async (req, res, next) => {
    try {

        if (req.params.email) {
            const teacher = await obtenerTeacherPorEmail(req.params.email);
            if (!teacher) return res.status(404).json({ error: 'Teacher no encontrado' });
            return res.json(teacher);
        }

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

const updateTeacher = async (req, res, next) => {
    try {
        const updatedTeacher = await actualizarTeacher(req.params.id, req.body);
        if (!updatedTeacher) return res.status(404).json({ error: 'Teacher no encontrado' });
        res.json(updatedTeacher);
    } catch (err) {
        next(err);
    }
};

const deleteTeacher = async (req, res, next) => {
    try {
        const teacher = await delTeacher(req.params.id);
        if (!teacher) {
            return res.status(404).json({ "Error": "Teacher no encontrado" })
        }
        res.json({ "msj": "Teacher Borrado", teacher });
    } catch (error) {

    }
}

module.exports = { getTeacher, createTeacher, updateTeacher, deleteTeacher };