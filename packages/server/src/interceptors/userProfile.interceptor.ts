import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { UserMapper } from '../mappers/user.mappers';

@Injectable()
export class UserProfileInterceptor implements NestInterceptor {
  constructor(private readonly userMapper: UserMapper) {}

  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(map(this.userMapper.toUserResponce));
  }
}
