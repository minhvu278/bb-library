import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreateReviewDto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNumber()
  rating: number;

  @IsString()
  comment: string;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  created_at: Date;

  @IsNumber()
  user_id: number;

  @IsNumber()
  book_id: number;
}
