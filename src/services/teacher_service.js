const Teacher = require('../models/Teacher');

const obtenerTeachers = () => Teacher.find();
const obtenerTeacherPorEmail = (email) => Teacher.findOne({ email });
const crearTeacher = (teacherData) => Teacher.create(teacherData);

const actualizarTeacher = (id, teacherData) => Teacher.findByIdAndUpdate(id, teacherData);

const delTeacher = (id) => Teacher.findByIdAndDelete(id);

module.exports = { obtenerTeachers, crearTeacher, obtenerTeacherPorEmail, actualizarTeacher, delTeacher };