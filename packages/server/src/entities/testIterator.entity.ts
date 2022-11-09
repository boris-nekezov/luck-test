import { ApiProperty } from '@nestjs/swagger';
import { ILuckTestIterator } from '@luck-test/contracts';

export class LuckTestIterator implements ILuckTestIterator {
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
    example: [true, false, true],
    description: 'List of answers user sent',
  })
  answers: boolean[];

  @ApiProperty({
    example: [false, true, false],
    description: 'List of values show whether particular answer was correct',
  })
  areAnswersCorrect: boolean[];
}
