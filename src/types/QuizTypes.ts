export interface QuizOption {
  answer: string;
  isCorrect: boolean;
}

export interface QuizQuestionType {
  question: string;
  options: QuizOption[];
}
