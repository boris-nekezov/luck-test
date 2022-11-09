import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LuckTestMapper } from '../../mappers/luckTest.mapper';
import { LuckTest, LuckTestSchema } from '../../schemas/luckTest.schema';
import { LuckTestController } from './luckTest.controller';
import { LuckTestService } from './luckTest.service';
import { LuckTestEtolonCreator } from './luckTestEtolonCreator.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LuckTest.name, schema: LuckTestSchema },
    ]),
  ],
  controllers: [LuckTestController],
  providers: [LuckTestService, LuckTestMapper, LuckTestEtolonCreator],
})
export class LuckTestModule {}
