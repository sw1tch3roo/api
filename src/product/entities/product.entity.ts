import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number; // уникальный айди элемента

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  characteristics: string[];
}
