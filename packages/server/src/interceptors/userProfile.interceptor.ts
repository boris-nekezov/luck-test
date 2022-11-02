import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { userDocumentToUserResponce } from '../mappers/user.mappers';

@Injectable()
export class UserProfileInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(map(userDocumentToUserResponce));
  }
}
