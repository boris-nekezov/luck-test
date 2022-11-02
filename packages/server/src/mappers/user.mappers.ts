import { UserInfo } from '../entities/userInfo.entity';
import { UserDocument } from '../schemas/user.schema';

export function userDocumentToUserResponce(
  userDocument: UserDocument,
): UserInfo {
  return { userId: userDocument._id, login: userDocument.login };
}
