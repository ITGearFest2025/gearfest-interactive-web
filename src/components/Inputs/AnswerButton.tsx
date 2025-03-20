import { userAnswer } from "@/stores/userAnswer";
import { navigate } from "astro:transitions/client";

const AnswerButton = ({
  text,
  attribute,
  redirectUrl,
  theme = "light",
}: {
  text: string;
  attribute: number[];
  redirectUrl: string;
  theme?: "light" | "dark";
}) => {
  const handleClick = () => {
    attribute.map((item, index) => {
      const typeName = "type" + (index + 1).toString();
      const currentScoreStr = userAnswer.get()[typeName] || "0";
      const currentScore = parseInt(currentScoreStr, 10);
      userAnswer.setKey(typeName, (currentScore + item).toString());
    });

    setTimeout(() => {
      navigate(redirectUrl);
    }, 300);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full max-w-xs cursor-pointer text-sm font-light transition-colors duration-300 ${theme === "light" ? "border-t-[#fff3e2] border-r-[#94694c] border-b-[#94694c] border-l-[#fff3e2] bg-[#ffecc7] text-[#763c0d] hover:bg-[#ffecc7]/90 active:bg-[#ffecc7]/70" : "border-t-[#f0e1d4] border-r-[#0a0030] border-b-[#0a0030] border-l-[#f0e1d4] bg-[#42427a] text-[#F6ECFF] hover:bg-[#42427a]/70 active:bg-[#42427a]/50"} border-2 px-6 py-3 text-center text-base break-words`}
    >
      {text}
    </button>
  );
};

export default AnswerButton;
