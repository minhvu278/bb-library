import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { History } from './entities/history.entity';
import { Repository } from 'typeorm';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
  ) {}

  async findAll(): Promise<History[]> {
    return this.historyRepository.find({
      relations: ['user', 'book'],
    });
  }

  async findOne(id: number): Promise<History | null> {
    return this.historyRepository.findOne({
      where: { id },
      relations: ['user', 'book'],
    });
  }

  async create(createHistoryDto: CreateHistoryDto): Promise<History> {
    const newHistory = this.historyRepository.create(createHistoryDto);
    return this.historyRepository.save(newHistory);
  }

  async update(
    id: number,
    updateHistoryDto: UpdateHistoryDto,
  ): Promise<History | null> {
    await this.historyRepository.update(id, updateHistoryDto);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.historyRepository.delete(id);
  }
}
