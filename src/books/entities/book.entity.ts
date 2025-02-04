import { Author } from 'src/authors/entities/author.entity';
import { Collection } from 'src/collection/entities/collection.entity';
import { History } from 'src/history/entities/history.entity';
import { Languages } from 'src/languages/entities/language.entity';
import { Review } from 'src/reviews/entities/review.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ unique: true })
  description: string;

  @Column()
  published_date: Date;

  @Column()
  page_count: number;

  @ManyToOne(() => Languages, (language) => language.books)
  language: Languages;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;

  @ManyToOne(() => Collection, (collection) => collection.books)
  collection: Collection;

  @OneToMany(() => History, (history) => history.book)
  histories: History[];

  @OneToMany(() => Review, (review) => review.book)
  reviews: Review[];
}
