import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  published_date: string;

  @IsNumber()
  page_count: number;

  @IsNumber()
  author_id: number;

  @IsNumber()
  language_id: number;

  @IsOptional()
  @IsNumber()
  collection_id?: number;
}
