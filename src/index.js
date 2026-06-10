const express = require('express');
const swaggerSchema = require('./docs/swagger');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(express.json());

//FUNCION LOGGER
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

app.use('/teacher', require('./routes/teacher_route'));
app.use('/auth', require('./routes/auth.routes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSchema));



app.use((req, res) => res.status(404).json({ error: 'Ruta no encontrada' }));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message || 'Error interno' });
});

module.exports = app;
