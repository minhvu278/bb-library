import { IsString, MinLength } from '@nestjs/class-validator';

export class CreateLanguageDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  @MinLength(2)
  code: string;
}
