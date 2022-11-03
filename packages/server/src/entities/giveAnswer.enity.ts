import { IsBoolean } from 'class-validator';
import { IGiveAnswer } from '@luck-test/contracts';
import { ApiProperty } from '@nestjs/swagger';

export class GiveAnswer implements IGiveAnswer {
  @IsBoolean()
  @ApiProperty({
    example: true,
    description: 'The answer user has selected',
  })
  answer: boolean;
}
