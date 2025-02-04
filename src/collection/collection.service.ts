import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Collection } from './entities/collection.entity';
import { Repository } from 'typeorm';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Injectable()
export class CollectionService {
  constructor(
    @InjectRepository(Collection)
    private readonly collectionRepository: Repository<Collection>,
  ) {}

  async findAll(): Promise<Collection[]> {
    return this.collectionRepository.find();
  }

  async findOne(id: number): Promise<Collection | null> {
    return this.collectionRepository.findOne({
      where: { id },
    });
  }

  async create(createCollectionDto: CreateCollectionDto): Promise<Collection> {
    const newCollection = this.collectionRepository.create(createCollectionDto);
    return this.collectionRepository.save(newCollection);
  }

  async update(id: number, updateCollectionDto: UpdateCollectionDto) {
    await this.collectionRepository.update(id, updateCollectionDto);
    return this.findOne(id);
  }

  async delete(id: number) {
    await this.collectionRepository.delete(id);
  }
}
