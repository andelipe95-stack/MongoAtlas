const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../index');

process.env.JWT_SECRET = 'secreto_de_test';
let mongod;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  await mongoose.connect(mongod.getUri());
});

afterEach(async () => {
  const colecciones = await mongoose.connection.db.collections();
  for (const c of colecciones) await c.deleteMany({});
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongod.stop();
});



describe ("POST/ auth/register", () => {
    it ("creamos un usuario y devolvemos 201 si no hay contraseña", async () => {
        const res = await request (app)
            .post ("auth/register")
            .send ({email: "x@x.es", password: "prueba", nombre: "Manu"});
        expect(res.status).toBe(201);
        expect(res.body.email).toBe("x@x.es")
        expect(res.body.password).toBeUnderfined();

    });
    it("Devuelve error 400 datos inválidos", async () => {
        const res = await request(app).post("auth/register").send({email: "a@a.es"});
        expect(res.status).toBe(400);
    })
});