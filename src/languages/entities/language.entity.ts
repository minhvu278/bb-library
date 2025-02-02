import { BaseEntity } from 'src/common/entities/base.entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Languages extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;
}
