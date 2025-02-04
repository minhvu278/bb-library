import { BaseEntity } from 'src/common/entities/base.entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  full_name: string;

  @Column()
  address: string;

  @Column()
  role: string;
}
