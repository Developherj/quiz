import { render, screen } from "@testing-library/react";

import type { QuizQuestionType } from "../../../types/QuizTypes";
import QuizQuestion from "../QuizQuestion";

describe("Quiz component", () => {
  const { getByText } = screen;
  const mockQuestion: QuizQuestionType = {
    question: "Are you over 18?",
    options: [
      { answer: "Yes", isCorrect: true },
      { answer: "No", isCorrect: false },
    ],
  };

  const mockOnAnswer = jest.fn();

  // Test rendering the component
  test("renders question and options", () => {
    render(
      <QuizQuestion
        question={mockQuestion}
        questionNumber={1}
        onAnswer={mockOnAnswer}
      />
    );
    expect(getByText("Question 1")).toBeInTheDocument();
    expect(getByText("Are you over 18?")).toBeInTheDocument();
    expect(getByText("Yes")).toBeInTheDocument();
  });
});
