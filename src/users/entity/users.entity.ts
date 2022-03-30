import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Unique, OneToMany } from 'typeorm';
import { Posts } from '../../post/entity/post.entity';



@Entity('users')

export class Users extends BaseEntity{
  @OneToMany(() => Posts, post => post.userID)
  @PrimaryGeneratedColumn()
  public ID: number;

  @Column()
  @Unique(['username'])
  username: string;

  @Column()
  password: string;

  @Column()
  DATE: Date;

  @Column()
  roles: string;

  constructor(username: string, password: string, roles: string) {
    super();
    this.username = username;
    this.password = password;
    this.DATE = new Date();
    this.roles = roles;
  }
}