export class SingleActivity {
    userId: number;
    gameSessionDetails: {
      gameSessionId: number;
      sessionActivity: {
        gameId: number;
        gameName: string;
        gameTypeName: string;
        question: [
          {
            question: string;
            options: string[];
            selectedAnswer: string;
            correctAnswer: string;
          }
        ];
      };
    };
  }
  