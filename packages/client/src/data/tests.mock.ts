
// all state and structure will be updated at a later point 
// this is just for implementing and testing basic routing mechanism
export interface MockTest {
  testId: string;
  length: number;
  createdAt?: string;
  updatedAt?: string;
  areAnswersCorrect: boolean[];
  status: 'InProgress' | 'Done';
  correctCount?: number;
  isSucceeded?: boolean;
}

export const mockTests: MockTest[] = [
  {
    testId: '635fc783d10071eb8938dcba',
    length: 8,
    areAnswersCorrect: [],
    status: 'InProgress',
  },
  {
    testId: '635fd055d10071eb8938dcbd',
    length: 8,
    areAnswersCorrect: [
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      true
    ],
    status: 'Done',
    correctCount: 3,
    isSucceeded: false,
  },
  {
    testId: '637ddfd34c5a1aed9df1192f',
    length: 3,
    createdAt: '2022-11-23T08:54:43.965Z',
    updatedAt: '2022-11-23T08:55:53.661Z',
    areAnswersCorrect: [
      true,
      false
    ],
    status: 'InProgress',
  },
];