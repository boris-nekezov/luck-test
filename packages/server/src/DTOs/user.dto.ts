import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDTO {
  @IsEmail()
  @ApiProperty({
    example: 'test@gmail.com',
    description: 'Users mail',
  })
  login: string;

  @IsString()
  @ApiProperty({
    example: 'test_Pa$$w0rd',
    description: 'Users password',
  })
  password: string;
}
