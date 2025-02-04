import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find({
      relations: ['author', 'language', 'collection'],
    });
  }

  async findOne(id: number): Promise<Book | null> {
    return this.bookRepository.findOne({
      where: { id },
      relations: ['author', 'language', 'collection'],
    });
  }

  async create(createBookDto: Partial<Book>): Promise<Book> {
    const newBook = this.bookRepository.create(createBookDto);
    return this.bookRepository.save(newBook);
  }

  async update(id: number, updateBookDto: Partial<Book>): Promise<Book | null> {
    await this.bookRepository.update(id, updateBookDto);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
