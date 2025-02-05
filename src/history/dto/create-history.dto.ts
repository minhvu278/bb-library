import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreateHistoryDto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  borrowed_date: Date;

  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  returned_date?: Date;

  @IsString()
  status: string;

  @IsNumber()
  user_id: number;

  @IsNumber()
  book_id: number;
}
