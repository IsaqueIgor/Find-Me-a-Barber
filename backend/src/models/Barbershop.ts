import { Entity, Column } from 'typeorm';

import User from './User';

@Entity('barbershop')
class Barbershop extends User {
  @Column()
  city: string;

  @Column({
    length: 2,
  })
  uf: string;

  @Column()
  longitude: number;

  @Column()
  latitude: number;
}

export default Barbershop;
