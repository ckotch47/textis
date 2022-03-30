import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  Unique,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne, ManyToMany,
} from 'typeorm';
import { Users } from '../../users/entity/users.entity';

@Entity('posts')

export class Posts extends BaseEntity{
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  DATE: Date;

  @Column()
  tag: string;

  @Column()
  public: boolean;

  @ManyToOne(() => Users, user => user.ID)
  userID: number;

  constructor(title: string, text: string, tag: string, pubclic: boolean, userID: number) {
    super();
    this.title = title;
    this.text = text;
    this.DATE = new Date();
    this.tag = tag;
    this.public = pubclic;
    this.userID = userID;
  }
}