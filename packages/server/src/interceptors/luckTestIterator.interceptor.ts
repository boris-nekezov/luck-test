import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { luckTestDocumentToIterator } from '../mappers/luckTest.mapper';

@Injectable()
export class LuckTestIteratorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(map(luckTestDocumentToIterator));
  }
}
