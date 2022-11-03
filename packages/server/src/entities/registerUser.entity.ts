import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IRegisterUser } from '@luck-test/contracts';

export class RegisterUser implements IRegisterUser {
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
