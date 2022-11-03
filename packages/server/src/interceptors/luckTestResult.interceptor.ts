import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { LuckTestDocument } from '../schemas/luckTest.schema';
import { LuckTestMapper } from '../mappers/luckTest.mapper';

@Injectable()
export class LuckTestResultInterceptor implements NestInterceptor {
  constructor(private readonly luckTestMapper: LuckTestMapper) {}

  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((data: LuckTestDocument | LuckTestDocument[]) => {
        if (data instanceof Array) {
          const toResult = this.luckTestMapper.toResult.bind(
            this.luckTestMapper,
          );

          return data.map(toResult);
        }

        return this.luckTestMapper.toResult(data);
      }),
    );
  }
}
