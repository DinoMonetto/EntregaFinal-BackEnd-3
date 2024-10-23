import express from 'express';
import mocksRouter from './routes/mocks.router.js';
import adoptionRouter from './routes/adoption.router.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Rutas
app.use('/api/mocks', mocksRouter);
app.use('/adoption', adoptionRouter);

// Conexión a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('Error conectando a MongoDB:', err);
    process.exit(1);
  }
};

// Solo iniciar el servidor si no estamos corriendo los tests
if (process.env.NODE_ENV !== 'test') {
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  });
}

export default app;
