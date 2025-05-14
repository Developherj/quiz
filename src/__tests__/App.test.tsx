import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { questions } from "../questions";

describe("App Component", () => {
  const { getByText } = screen;
  test("renders the WelcomeJayde screen initially", () => {
    render(<App />);

    expect(getByText("Medical Assessment")).toBeInTheDocument();
  });

  test("transitions to QuizQuestion after clicking 'Start Test' button", async () => {
    render(<App />);

    const startButton = getByText("Start Quiz");
    await userEvent.click(startButton);

    expect(getByText("Question 1")).toBeInTheDocument();
  });

  test("calls onAnswer when an answer is clicked", async () => {
    render(<App />);

    const startButton = getByText("Start Quiz");

    await userEvent.click(startButton);

    const option = getByText("Yes");
    await userEvent.click(option);

    expect(getByText("Question 2")).toBeInTheDocument();
  });

  test("displays ResultJayde after answering all questions", async () => {
    render(<App />);

    const startButton = getByText("Start Quiz");
    await userEvent.click(startButton);

    for (let i = 0; i < questions.length; i++) {
      const option = getByText(questions[i].options[1].answer);
      await userEvent.click(option);
    }

    expect(getByText("Quiz Complete!")).toBeInTheDocument();
  });

  test("restarts the test when restart button is clicked", async () => {
    render(<App />);

    const startButton = getByText("Start Quiz");
    await userEvent.click(startButton);

    for (let i = 0; i < questions.length; i++) {
      const option = getByText(questions[i].options[1].answer);
      await userEvent.click(option);
    }

    expect(getByText("Quiz Complete!")).toBeInTheDocument();

    const restartButton = getByText("Try Again");
    await userEvent.click(restartButton);

    expect(getByText("Medical Assessment")).toBeInTheDocument();
  });
});
