import { DataSource } from 'typeorm';
import { User } from './users/entities/users.entity';
import { Languages } from './languages/entities/language.entity';
import { Author } from './authors/entities/author.entity';
import { Book } from './books/entities/book.entity';
import { Collection } from './collection/entities/collection.entity';
import { History } from './history/entities/history.entity';
import { Review } from './reviews/entities/review.entity';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [User, Languages, Author, Book, Collection, History, Review],
  migrations: ['dist/migrations/*.js'], // Thư mục chứa các file migration đã biên dịch
  synchronize: false, // Tắt synchronize khi sử dụng migration
});
