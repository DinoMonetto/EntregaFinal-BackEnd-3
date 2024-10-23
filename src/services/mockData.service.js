import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import User from '../models/user.model.js';
import Pet from '../models/pet.model.js';

// Generar usuarios mock
export const generateMockUsers = (num) => {
  const users = [];
  for (let i = 0; i < num; i++) {
    const hashedPassword = bcrypt.hashSync('coder123', 10);
    const role = faker.helpers.randomize(['user', 'admin']);
    users.push({
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: hashedPassword,
      role,
      pets: [],
    });
  }
  return users;
};

// Insertar datos en la base de datos
export const generateData = async (numUsers, numPets) => {
  const users = generateMockUsers(numUsers);

  // Guardar usuarios en la base de datos
  await User.insertMany(users);

  // Generar mascotas mock
  const pets = [];
  for (let i = 0; i < numPets; i++) {
    pets.push({
      name: faker.animal.cat(),
      type: faker.helpers.randomize(['dog', 'cat', 'hamster']),
    });
  }

  // Guardar mascotas en la base de datos
  await Pet.insertMany(pets);
};
