import { ApiProperty } from '@nestjs/swagger';
import { LuckTestStatus } from '../types/luckTest.types';

export class LuckTestResult {
  @ApiProperty({
    example: '6358032d045f271f13b3bd65',
    description: 'The ID of luck test entity',
  })
  testId: string;

  @ApiProperty({
    example: 5,
    description: 'Amount of steps test consists of',
  })
  length: number;

  @ApiProperty({
    example: LuckTestStatus.Done,
    description: 'Shows test is either done or in progress',
    examples: LuckTestStatus,
    enum: LuckTestStatus,
  })
  status: LuckTestStatus;

  @ApiProperty({
    example: '2022-10-24T21:14:04.611Z',
    description: 'ISO date string presentation of date of creation',
  })
  dateOfCreation: string;

  @ApiProperty({
    example: 4,
    description: 'Count of correctly guessed steps',
    required: false,
  })
  correctCount?: number;

  @ApiProperty({
    example: true,
    description: 'Flag which is showing whether test is passed successfully',
    required: false,
  })
  isSucceeded?: boolean;
}
