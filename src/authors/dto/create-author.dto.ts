import { IsString, MinLength } from '@nestjs/class-validator';

export class CreateAuthorDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  @MinLength(2)
  bio: string;

  @IsString()
  @MinLength(2)
  nationality: string;
}
