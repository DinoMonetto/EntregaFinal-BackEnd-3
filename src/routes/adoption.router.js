// src/routes/adoption.router.js
import { Router } from 'express';

const router = Router();

// Ejemplo de rutas de adopción
router.get('/', (req, res) => {
  res.status(200).json([{ adoptionId: 1, petId: '123', userId: '456' }]);
});

router.post('/', (req, res) => {
  const { petId, userId } = req.body;
  if (!petId || !userId) {
    return res.status(400).json({ message: 'Faltan datos' });
  }
  res.status(201).json({ message: 'Adopción creada con éxito', adoptionId: 2 });
});

export default router;
