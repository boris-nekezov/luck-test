import { HttpException, HttpStatus } from '@nestjs/common';

export class GetIteratorException extends HttpException {
  constructor() {
    super(
      {
        status: HttpStatus.NOT_ACCEPTABLE,
        error: 'Luck Test has been already completed',
      },
      HttpStatus.NOT_ACCEPTABLE,
    );
  }
}

export class GetResultException extends HttpException {
  constructor() {
    super(
      {
        status: HttpStatus.NOT_ACCEPTABLE,
        error: 'Luck Test is still in progress',
      },
      HttpStatus.NOT_ACCEPTABLE,
    );
  }
}
