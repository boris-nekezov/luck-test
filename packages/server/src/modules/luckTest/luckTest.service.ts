import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  GetIteratorException,
  GetResultException,
} from '../../Exceptions/luckTest.exceptions';
import { GiveAnswerDTO } from '../../DTOs/luckTest.dto';
import { LuckTest, LuckTestDocument } from '../../schemas/luckTest.schema';

@Injectable()
export class LuckTestService {
  constructor(
    @InjectModel(LuckTest.name) private luckTestModel: Model<LuckTestDocument>,
  ) {}

  createTest(userId: string, length: number): Promise<LuckTestDocument> {
    const createdTest = new this.luckTestModel({
      user: userId,
      dateOfCreation: new Date().toISOString(),
      etolon: Array.from({ length }).map(() => Math.random() >= 0.5),
      answers: [],
    });

    return createdTest.save();
  }

  getTests(userId: string, page = 0, size = 10): Promise<LuckTestDocument[]> {
    return this.luckTestModel
      .find({ user: userId }, {}, { skip: page * size, limit: size })
      .exec();
  }

  getTest(testId: string) {
    return this.luckTestModel.findById(testId).exec();
  }

  async giveAnswer(
    luckTestDocument: LuckTestDocument,
    giveAnswerDTO: GiveAnswerDTO,
  ) {
    if (luckTestDocument.answers.length >= luckTestDocument.etolon.length) {
      throw new GetIteratorException();
    }

    luckTestDocument.answers.push(giveAnswerDTO.answer);

    return luckTestDocument.save();
  }

  async getResult(
    luckTestDocument: LuckTestDocument,
  ): Promise<LuckTestDocument> {
    if (luckTestDocument.answers.length !== luckTestDocument.etolon.length) {
      throw new GetResultException();
    }

    return luckTestDocument;
  }
}
