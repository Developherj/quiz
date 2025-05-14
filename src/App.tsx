import { useState } from "react";
//import Welcome from "./components/Welcome";
//import Result from "./components/Result";
import { questions } from "./questions";
import QuizQuestion from "./components/quiz-question/QuizQuestion";
import WelcomeJayde from "./components/WelcomeJayde";
import ResultJayde from "./components/ResultJayde";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [showWelcome, setShowWelcome] = useState<boolean>(true);

  const startTest = () => {
    setShowWelcome(false);
  };

  const restartTest = () => {
    setShowWelcome(true);
    setShowResult(false);
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleAnswer = (isCorrect: boolean) => {
    const newAnswers = [...answers, isCorrect ? 1 : 0];

    setAnswers(newAnswers);

    if (currentQuestion >= questions.length - 1) {
      setShowResult(true);
      console.log(answers);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-300 to-blue-500  ">
      <div className="m-5 w-full max-w-xl rounded-3xl bg-white p-5 shadow-lg md:m-10 md:p-10   ">
        {showWelcome && <WelcomeJayde onStart={startTest} />}

        {!showWelcome && !showResult && (
          <QuizQuestion
            question={questions[currentQuestion]}
            questionNumber={currentQuestion + 1}
            onAnswer={handleAnswer}
          />
        )}

        {showResult && <ResultJayde answers={answers} restart={restartTest} />}
      </div>
    </div>
  );
}

export default App;
