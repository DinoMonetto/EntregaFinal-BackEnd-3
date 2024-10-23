import { Router } from 'express';
import { generateMockUsers, generateData } from '../services/mockData.service.js'; // Asegúrate de que este archivo exista

const router = Router();

// Endpoint para mocking pets
router.get('/mockingpets', (req, res) => {
  const pets = [
    { name: 'Fido', type: 'dog' },
    { name: 'Mittens', type: 'cat' },
  ];
  res.json(pets);
});

// Generar 50 usuarios mock
router.get('/mockingusers', (req, res) => {
  const users = generateMockUsers(50);
  res.json(users);
});

// Generar data para users y pets y guardarla en la base de datos
router.post('/generateData', async (req, res) => {
  const { users, pets } = req.body;
  try {
    await generateData(users, pets);
    res.status(201).json({ message: 'Datos generados e insertados correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error generando datos' });
  }
});

export default router;
