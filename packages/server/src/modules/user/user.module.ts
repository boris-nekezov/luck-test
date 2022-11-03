import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsertController } from './user.controller';
import { UserService } from './user.service';
import { User, UserSchema } from '../../schemas/user.schema';
import { AuthModule } from '../../modules/auth/auth.module';
import { UserMapper } from '../../mappers/user.mappers';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsertController],
  providers: [UserService, UserMapper],
  exports: [UserService],
})
export class UserModule {}
