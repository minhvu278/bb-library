import { Book } from 'src/books/entities/book.entity';
import { BaseEntity } from 'src/common/entities/base.entities';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Languages extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @OneToMany(() => Book, (book) => book.language)
  books: Book[];
}
