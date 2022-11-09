import { IsEnum } from 'class-validator';
import { LuckTestLength, ICreateLuckTest } from '@luck-test/contracts';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLuckTest implements ICreateLuckTest {
  @IsEnum(LuckTestLength)
  @ApiProperty({
    example: LuckTestLength.Medium,
    description: 'Desired length of created test',
    examples: LuckTestLength,
    enum: LuckTestLength,
  })
  length: number;
}
