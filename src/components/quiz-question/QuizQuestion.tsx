import type { QuizQuestionType } from "../../types/QuizTypes";

interface IQuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  onAnswer: (isCorrect: boolean) => void;
}

const QuizQuestion: React.FC<IQuizQuestionProps> = ({
  question,
  questionNumber,
  onAnswer,
}) => {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-gray-700 sm:text-2xl">
        Question {questionNumber}
      </h2>
      <p className="mb-6 text-xl font-semibold text-gray-600">
        {question.question}
      </p>
      <div className="flex flex-col space-y-4">
        {question.options.map((option) => (
          <button
            className="rounded-full bg-cyan-950 py-2 text-lg text-white hover:opacity-80 sm:text-xl "
            key={option.answer}
            onClick={() => onAnswer(option.isCorrect)}
          >
            {option.answer}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
