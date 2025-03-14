import StarbarDark from "@/assets/tool/starbar-dark";
import StarbarLight from "@/assets/tool/starbar-light";
import React, { useState } from "react";

interface LongTextInputProps {
  placeholder?: string;
  id?: string;
  rows?: number;
  className?: string;
  redirectUrl?: string;
  question: string;
  theme?: "light" | "dark";
}

const LongTextInput: React.FC<LongTextInputProps> = ({
  placeholder = "Write something...",
  id = "long-text-input",
  rows = 8,
  className = "",
  redirectUrl,
  theme = "dark",
  question,
}) => {
  const [text, setText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

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
              {theme === "light" ? <StarbarLight /> : <StarbarDark />}
              <textarea
                id={id}
                value={text}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                className={`w-full border-2 px-3 py-2 ${className} text-sm font-light transition-colors duration-300 ${theme === "light" ? "border-t-[#fff3e2] border-r-[#94694c] border-b-[#94694c] border-l-[#fff3e2] bg-[#ffecc7] text-[#763c0d]" : "border-t-[#f0e1d4] border-r-[#0a0030] border-b-[#0a0030] border-l-[#f0e1d4] bg-[#42427a] text-[#F6ECFF]"}`}
              />
              <button className="font-italiana broder-l-[#f0e1d4] h-16 w-full cursor-pointer border-2 border-t-[#f0e1d4] border-r-[#0a0030] border-b-[#0a0030] bg-[#7b6088] text-white hover:bg-[#7b6088]/70 active:bg-[#7b6088]/50">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongTextInput;
