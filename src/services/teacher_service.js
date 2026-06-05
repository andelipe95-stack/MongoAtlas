const Teacher = require('../models/Teacher');

const obtenerTeachers = () => Teacher.find();
const crearTeacher = (teacherData) => Teacher.create(teacherData);

module.exports = { obtenerTeachers, crearTeacher };