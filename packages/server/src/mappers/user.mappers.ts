import { Injectable } from '@nestjs/common';
import { UserInfo } from '../entities/userInfo.entity';
import { UserDocument } from '../schemas/user.schema';

@Injectable()
export class UserMapper {
  public toUserResponce(userDocument: UserDocument): UserInfo {
    return { userId: userDocument._id, login: userDocument.login };
  }
}
