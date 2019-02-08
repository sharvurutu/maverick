export class AdaptiveActivity {
  _id: number;
  user_id: number;
  category_id: number;
  topic_id: number;
  game_id: number;
  game_name: string;
  game_session_id: number;
  response: [
    {
      questionId: number;
      questionLevel: number;
      questionStem: string;
      option1: string;
      option2: string;
      option3: string;
      option4: string;
      correctAnswer: string;
      userAnswer: string;
    }
  ];
}
