import { ApiProperty } from '@nestjs/swagger';
import { ILoginResponse } from '@luck-test/contracts';

export class LoginResponse implements ILoginResponse {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6...',
    description: 'Bearer token',
  })
  accessToken: string;
}
