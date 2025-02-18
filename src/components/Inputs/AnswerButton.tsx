import { userAnswer } from "@/stores/userAnswer";
import { navigate } from "astro:transitions/client";

const AnswerButton = ({
  text,
  attribute,
  redirectUrl,
}: {
  text: string;
  attribute: string;
  redirectUrl: string;
}) => {
  const handleClick = () => {
    const currentScoreStr = userAnswer.get()[attribute] || "0";
    const currentScore = parseInt(currentScoreStr, 10);
    userAnswer.setKey(attribute, (currentScore + 1).toString());

    setTimeout(() => {
      navigate(redirectUrl);
    }, 300);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full max-w-xs rounded-2xl border-2 border-white bg-neutral-200 px-6 py-3 text-left text-base break-words text-black transition-colors duration-300 hover:border-black hover:bg-neutral-400 hover:text-black`}
    >
      {text}
    </button>
  );
};

export default AnswerButton;
