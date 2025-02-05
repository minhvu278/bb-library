import { Book } from 'src/books/entities/book.entity';
import { User } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  borrowed_date: Date;

  @Column({ nullable: true })
  returned_date: Date;

  @Column({ default: 'borrowed' })
  status: string;

  @ManyToOne(() => Book, (book) => book.histories)
  book: Book;

  @ManyToOne(() => User, (user) => user.history)
  user: User;
}
