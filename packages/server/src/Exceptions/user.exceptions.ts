import { HttpException, HttpStatus } from '@nestjs/common';

export class UserIsExistException extends HttpException {
  constructor() {
    super(
      {
        status: HttpStatus.CONFLICT,
        error: 'User is already exist',
      },
      HttpStatus.CONFLICT,
    );
  }
}
