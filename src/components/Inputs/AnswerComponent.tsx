import AnswerButton from "./AnswerButton";
import StarBarDark from "@/assets/tool/starbar-dark.tsx";
import StarBarLight from "@/assets/tool/starbar-light.tsx";

interface IAnswer {
  text: string;
  attribute: string;
  redirectUrl?: string;
}

const AnswerComponent = ({
  question,
  answers,
  redirectUrl,
  theme = "dark",
}: {
  answers: IAnswer[];
  question: string;
  redirectUrl?: string;
  theme?: "light" | "dark";
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative w-[334px] px-3 py-4">
        {/* Background with 90% opacity */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            theme === "light"
              ? "from-[#c6985f] to-[#a05646]"
              : "from-[#1a1635] to-[#1a1622]"
          } opacity-95`}
        />

        {/* Everything else remains unchanged */}
        <div className="relative">
          <div
            className={`border-[3px] ${
              theme === "light" ? "border-[#ffecc7]" : "border-[#d2cea0]"
            } p-1.5`}
          >
            <div
              className={`font-mitr space-y-4 border-[1.5px] ${
                theme === "light" ? "border-[#ffecc7]" : "border-[#d2cea0]"
              } px-6 py-6`}
            >
              <p className="mb-6 px-2 text-center text-lg text-white">
                {question}
              </p>
              {theme === "light" ? <StarBarLight /> : <StarBarDark />}
              <div className="mt-10 flex flex-col gap-y-2">
                {answers.map((answer: IAnswer, idx: number) => (
                  <AnswerButton
                    theme={theme}
                    key={idx}
                    text={answer.text}
                    attribute={answer.attribute}
                    redirectUrl={answer.redirectUrl || redirectUrl || ""}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerComponent;
