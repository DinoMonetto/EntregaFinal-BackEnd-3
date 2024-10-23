import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app.js'; // Importa el servidor

describe('Adoption Router Tests', () => {
  it('Debería devolver la lista de adopciones', async () => {
    const res = await request(app).get('/adoption');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('Debería crear una nueva adopción', async () => {
    const res = await request(app)
      .post('/adoption')
      .send({ petId: '123', userId: '456' });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('message');
  });
});
