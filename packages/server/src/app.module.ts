import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './modules/user/user.module';
import { LuckTestModule } from './modules/luckTest/luckTest.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    LuckTestModule,
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'luck-test-db',
    }),
  ],
})
export class AppModule {}
