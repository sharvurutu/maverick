export class MultiActivity {
  userId: number;
  gamedetails: {
    gameId: number;
    gameSessionId: number;
    gameTypeName: string;
  };
  score: number;
  reportQuestions: [
    {
      questionId: number;
      questionName: string;
      correctAnswer: string;
      selectedAnswer: string;
    }
  ];
}
