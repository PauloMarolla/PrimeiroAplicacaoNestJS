import { IsNotEmpty, IsString } from "class-validator";

export class CreateCoursesDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString({each: true})
  readonly tags: string[];
}
