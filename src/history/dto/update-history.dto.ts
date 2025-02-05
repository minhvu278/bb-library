import { IsDate, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateHistoryDto {
  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  returned_date?: Date;

  @IsOptional()
  @IsString()
  status?: string;
}
