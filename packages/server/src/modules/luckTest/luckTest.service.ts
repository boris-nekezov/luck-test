import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  GetIteratorException,
  GetResultException,
} from '../../Exceptions/luckTest.exceptions';
import { GiveAnswer } from '../../entities/giveAnswer.enity';
import { LuckTest, LuckTestDocument } from '../../schemas/luckTest.schema';
import { LuckTestEtolonCreator } from './luckTestEtolonCreator.service';

@Injectable()
export class LuckTestService {
  constructor(
    private readonly luckTestEtolonCreator: LuckTestEtolonCreator,
    @InjectModel(LuckTest.name) private luckTestModel: Model<LuckTestDocument>,
  ) {}

  createTest(userId: string, length: number): Promise<LuckTestDocument> {
    const currentDate = new Date().toISOString();

    const createdTest = new this.luckTestModel({
      user: userId,
      createdAt: currentDate,
      updatedAt: currentDate,
      etolon: this.luckTestEtolonCreator.generate(length),
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

  async giveAnswer(luckTestDocument: LuckTestDocument, giveAnswer: GiveAnswer) {
    if (luckTestDocument.answers.length >= luckTestDocument.etolon.length) {
      throw new GetIteratorException();
    }

    luckTestDocument.answers.push(giveAnswer.answer);
    luckTestDocument.updatedAt = new Date().toISOString();

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
