export enum LuckTestStatus {
  InProgress = 'InProgress',
  Done = 'Done',
}

export enum LuckTestLength {
  Small = 3,
  Medium = 5,
  Large = 8,
}

export interface ICreateLuckTest {
  length: number;
}

export interface IGiveAnswer {
  answer: boolean;
}

export interface ILuckTestIterator {
  testId: string;
  length: number;
  answers: boolean[];
  areAnswersCorrect: boolean[];
}

export interface  ILuckTestResult {
  testId: string;
  length: number;
  areAnswersCorrect: boolean[];
  status: LuckTestStatus;
  createdAt: string;
  updatedAt: string;
  correctCount?: number;
  isSucceeded?: boolean;
}
