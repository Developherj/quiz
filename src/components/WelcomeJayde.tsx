import jaydelogo from "../assets/Developherj_logo.png";

interface IWelcomeProps {
  onStart: () => void;
}

const WelcomeJayde: React.FC<IWelcomeProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:gap-8  ">
      <img src={jaydelogo} className="w-[200px] sm:w-[300px]" alt="" />

      <h1 className="text-2xl font-bold text-gray-800 sm:text-4xl">
        Medical Assessment
      </h1>

      <span className="text-lg font-semibold sm:text-3x1 ">
        Answer a few quick and easy questions from our pharmacists to see what
        treatments you’re eligible for
      </span>

      <button
        className="w-1/2 rounded-full bg-cyan-950 px-4 py-2 text-sm text-white hover:opacity-80 sm:w-1/3 sm:text-xl "
        onClick={onStart}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default WelcomeJayde;
