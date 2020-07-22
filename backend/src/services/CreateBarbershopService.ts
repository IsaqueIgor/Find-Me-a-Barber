import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import BarberShop from '../models/Barbershop';

import AppError from '../shared/errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
  city: string;
  uf: string;
  longitude: number;
  latitude: number;
}

class CreateBarbershopService {
  public async execute({
    name,
    email,
    password,
    city,
    uf,
    longitude,
    latitude,
  }: Request): Promise<BarberShop> {
    const BarbershopRepository = getRepository(BarberShop);

    const checkIfExists = await BarbershopRepository.findOne({
      where: { email },
    });

    if (checkIfExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const barbershop = BarbershopRepository.create({
      name,
      email,
      city,
      uf,
      longitude,
      latitude,
      password: hashedPassword,
    });

    await BarbershopRepository.save(barbershop);

    return barbershop;
  }
}

export default CreateBarbershopService;
