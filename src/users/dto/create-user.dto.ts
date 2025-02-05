import { IsString, MinLength } from '@nestjs/class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  username: string;

  @IsString()
  @MinLength(2)
  password: string;

  @IsString()
  @MinLength(2)
  email: string;

  @IsString()
  @MinLength(2)
  full_name: string;

  @IsString()
  @MinLength(2)
  address: string;

  @IsString()
  @MinLength(2)
  role: string;
}
