const express = require('express');
const { connectDB } = require('./config/db');
require('dotenv').config();

const app = express();
app.use(express.json());
connectDB();
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

app.use('/teacher', require('./routes/teacher_route'));
app.use('/auth', require('./routes/auth.routes'));
app.use((req, res) => res.status(404).json({ error: 'Ruta no encontrada' }));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message || 'Error interno' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor levantado en ' + PORT));