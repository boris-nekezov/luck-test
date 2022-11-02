import { ApiProperty } from '@nestjs/swagger';

export class LuckTestIterator {
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
    example: 2,
    description: 'Number of current question in the test user is answering to',
  })
  currentStep: number;

  @ApiProperty({
    example: true,
    description: 'Value of answer user just sent',
    required: false,
  })
  currentAnswer?: boolean;

  @ApiProperty({
    example: true,
    description: 'Shows whether user has sent correctly guessed answer',
    required: false,
  })
  isCorrect?: boolean;
}
