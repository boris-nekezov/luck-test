import { ApiProperty } from '@nestjs/swagger';
import { IUserInfo } from '@luck-test/contracts';

export class UserInfo implements IUserInfo {
  @ApiProperty({
    example: '6356fff374c4b815ad766bc5',
    description: 'Users id',
  })
  userId: string;

  @ApiProperty({
    example: 'test@gmail.com',
    description: 'Users mail',
  })
  login: string;
}
