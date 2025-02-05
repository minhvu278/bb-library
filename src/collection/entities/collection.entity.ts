import { Book } from 'src/books/entities/book.entity';
import { BaseEntity } from 'src/common/entities/base.entities';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Collection extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Book, (book) => book.collection)
  books: Book[];
}
