import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Languages } from './entities/language.entity';
import { LanguagesController } from './languages.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Languages])],
  providers: [LanguagesService],
  controllers: [LanguagesController],
})
export class LanguagesModule {}
