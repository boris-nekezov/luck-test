import { Injectable } from '@nestjs/common';
import { LuckTestStatus } from '@luck-test/contracts';
import { LuckTestDocument } from '../schemas/luckTest.schema';
import { LuckTestIterator } from '../entities/testIterator.entity';
import { LuckTestResult } from '../entities/testResult.entity';

@Injectable()
export class LuckTestMapper {
  private checkAnswers(answers: boolean[], etolon: boolean[]) {
    return answers.map((usersAnwser, idx) => usersAnwser === etolon[idx]);
  }

  public toIterator(luckTestDocument: LuckTestDocument): LuckTestIterator {
    const result: LuckTestIterator = {
      testId: luckTestDocument._id,
      length: luckTestDocument.etolon.length,
      answers: luckTestDocument.answers,
      areAnswersCorrect: this.checkAnswers(
        luckTestDocument.answers,
        luckTestDocument.etolon,
      ),
    };

    return result;
  }

  public toResult(luckTestDocument: LuckTestDocument): LuckTestResult {
    const result: LuckTestResult = {
      testId: luckTestDocument._id,
      length: luckTestDocument.etolon.length,
      createdAt: luckTestDocument.createdAt,
      updatedAt: luckTestDocument.updatedAt,
      areAnswersCorrect: this.checkAnswers(
        luckTestDocument.answers,
        luckTestDocument.etolon,
      ),
      status:
        luckTestDocument.answers.length === luckTestDocument.etolon.length
          ? LuckTestStatus.Done
          : LuckTestStatus.InProgress,
      correctCount: undefined,
      isSucceeded: undefined,
    };

    if (luckTestDocument.answers.length === luckTestDocument.etolon.length) {
      result.correctCount = luckTestDocument.answers.reduce(
        (total, answer, idx) => {
          return total + Number(answer === luckTestDocument.etolon[idx]);
        },
        0,
      );

      result.isSucceeded =
        result.correctCount >= Math.round(luckTestDocument.etolon.length / 2);
    }

    return result;
  }
}
