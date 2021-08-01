import { IsNotEmpty, IsString } from 'class-validator';
import { Tag } from '../entities/tag.entity';

export class CreateCoursesDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString({ each: true })
  readonly tags: string[];
}
