import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export abstract class BaseEntity {
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;
}
