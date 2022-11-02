import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LuckTest, LuckTestSchema } from '../../schemas/luckTest.schema';
import { LuckTestController } from './luckTest.controller';
import { LuckTestService } from './luckTest.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LuckTest.name, schema: LuckTestSchema },
    ]),
  ],
  controllers: [LuckTestController],
  providers: [LuckTestService],
})
export class LuckTestModule {}
