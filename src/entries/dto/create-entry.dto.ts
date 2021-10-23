import { IsInt, IsString, IsDate } from 'class-validator';

export class CreateEntryDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsDate()
  readonly createdAt: Date;
}
