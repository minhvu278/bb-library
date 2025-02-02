import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Languages } from './entities/language.entity';
import { Repository } from 'typeorm';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';

@Injectable()
export class LanguagesService {
  constructor(
    @InjectRepository(Languages)
    private languagesRepository: Repository<Languages>,
  ) {}

  create(createLanguageDto: CreateLanguageDto) {
    const newLanguage = this.languagesRepository.create(createLanguageDto);
    return this.languagesRepository.save(newLanguage);
  }

  findAll() {
    return this.languagesRepository.find();
  }

  findOne(id: number) {
    return this.languagesRepository.findOneBy({ id });
  }

  async update(id: number, updateLanguageDto: UpdateLanguageDto) {
    await this.languagesRepository.update(id, updateLanguageDto);
    return this.languagesRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.languagesRepository.delete(id);
  }
}
