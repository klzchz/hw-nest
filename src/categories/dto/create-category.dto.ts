import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDTO {
  @IsNotEmpty()
  @MaxLength(255)
  @MinLength(3)
  @IsString()
  name: string;

  @IsNotEmpty()
  @MaxLength(255)
  @MinLength(3)
  @IsString()
  desc: string;
}
