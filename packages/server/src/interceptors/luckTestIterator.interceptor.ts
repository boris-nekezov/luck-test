import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { LuckTestMapper } from '../mappers/luckTest.mapper';

@Injectable()
export class LuckTestIteratorInterceptor implements NestInterceptor {
  constructor(private readonly luckTestMapper: LuckTestMapper) {}

  intercept(context: ExecutionContext, next: CallHandler) {
    const toIterator = this.luckTestMapper.toIterator.bind(this.luckTestMapper);

    return next.handle().pipe(map(toIterator));
  }
}
