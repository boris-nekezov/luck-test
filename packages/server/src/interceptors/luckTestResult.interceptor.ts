import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { LuckTestDocument } from '../schemas/luckTest.schema';
import { luckTestDocumentToResult } from '../mappers/luckTest.mapper';

@Injectable()
export class LuckTestResultInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((data: LuckTestDocument | LuckTestDocument[]) => {
        if (data instanceof Array) {
          return data.map(luckTestDocumentToResult);
        }

        return luckTestDocumentToResult(data);
      }),
    );
  }
}
