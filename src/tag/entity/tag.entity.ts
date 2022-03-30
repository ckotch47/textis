import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tags')

export class Tag extends BaseEntity{

  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  name: string;
}