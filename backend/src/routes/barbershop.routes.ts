import { Router } from 'express';

import CreateBarbershopService from '../services/CreateBarbershopService';

const barbershopRouter = Router();

barbershopRouter.post('/', async (request, response) => {
  try {
    const {
      name,
      email,
      password,
      city,
      uf,
      latitude,
      longitude,
    } = request.body;

    const createUser = new CreateBarbershopService();
  } catch (err) {
    return response.status(err.statusCode).json({ error: err.message });
  }
});

export default barbershopRouter;
