jest.mock('../../models/Teacher');
const Teacher = require('../../models/Teacher');
const service = require('../../services/teacher_service');

describe('teacher.service obtenerTeachers',() => {
    it(' obtener teacher al llamar Teacher.find', async () => {
    Teacher.find.mockResolvedValue([{ nombre: 'Peppa Pig'}]);
    const result = await service.obtenerTeachers();
    expect(Teacher.find).toHaveBeenCalled();
    expect(result).toEqual([{ nombre: 'Peppa Pig'}]);
    });




});
