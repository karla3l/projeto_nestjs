import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn('uuid')
  id: string; // uuid
  @Column()
  name: string;
  @Column()
  age: number;
}
