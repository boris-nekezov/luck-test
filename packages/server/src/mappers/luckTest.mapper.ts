import { LuckTestStatus } from '../types/luckTest.types';
import { LuckTestDocument } from '../schemas/luckTest.schema';
import { LuckTestIterator } from '../entities/testIterator.entity';
import { LuckTestResult } from '../entities/testResult.entity';

export function luckTestDocumentToIterator(
  luckTestDocument: LuckTestDocument,
): LuckTestIterator {
  const result: LuckTestIterator = {
    testId: luckTestDocument._id,
    length: luckTestDocument.etolon.length,
    currentStep: luckTestDocument.answers.length,
    currentAnswer: undefined,
    isCorrect: undefined,
  };

  if (result.currentStep) {
    result.currentAnswer = luckTestDocument.answers[result.currentStep - 1];
    result.isCorrect =
      luckTestDocument.etolon[result.currentStep - 1] === result.currentAnswer;
  }

  return result;
}

export function luckTestDocumentToResult(
  luckTestDocument: LuckTestDocument,
): LuckTestResult {
  const result: LuckTestResult = {
    testId: luckTestDocument._id,
    length: luckTestDocument.etolon.length,
    dateOfCreation: luckTestDocument.dateOfCreation,
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
