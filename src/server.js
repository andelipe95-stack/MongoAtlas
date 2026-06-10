require('dotenv').config();
const { connectDB } = require('./config/db');
const app = require('./index')

connectDB();


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor levantado en ' + PORT));