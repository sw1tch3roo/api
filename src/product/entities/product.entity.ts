import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number; // уникальный айди элемента

  @Column()
  image: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  color?: string;

  @Column({ nullable: true })
  country?: string;

  @Column({ nullable: true })
  recomendation?: string;

  @Column({ nullable: true })
  sizes?: string;

  @Column({ nullable: true })
  type?: string;
}
