import { IsBoolean, IsEnum } from 'class-validator';
import { LuckTestLength } from '../types/luckTest.types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLuckTestDTO {
  @IsEnum(LuckTestLength)
  @ApiProperty({
    example: LuckTestLength.Medium,
    description: 'Desired length of created test',
    examples: LuckTestLength,
    enum: LuckTestLength,
  })
  length: number;
}

export class GiveAnswerDTO {
  @IsBoolean()
  @ApiProperty({
    example: true,
    description: 'The answer user has selected',
  })
  answer: boolean;
}
