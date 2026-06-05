const mongoose = require('mongoose');
require("dotenv").config()

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB conectada');
    } catch (err) {
        console.error('❌ Fallo en la conexión a MongoDB:', err.message);
        process.exit(1);
    }
}

module.exports = { connectDB };