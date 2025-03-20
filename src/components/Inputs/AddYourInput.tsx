import React from "react";
import { useStore } from "@nanostores/react";
import { userLongAnswer } from "@/stores/userLongAnswer"; // Persistent Store
import { navigate } from "astro:transitions/client";

interface AddYourInput {
  placeholder?: string;
  rows?: number;
  className?: string;
}

const LongTextInput: React.FC<AddYourInput> = ({
  placeholder = "Write something...",
  rows = 8,
  className = "",
}) => {
  const answers = useStore(userLongAnswer); // ✅ Watch the entire store
  const text = answers["tellUs"] || ""; // ✅ Extract only the relevant field

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    userLongAnswer.setKey("tellUs", e.target.value); // ✅ Update only one field
  };
  const handleClick = () => {};

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div>
        <textarea
          value={text} // ✅ Watches only this field
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={`w-full border-2 px-3 py-2 placeholder:text-[#F6ECFF] ${className} `}
        />
        <button
          onClick={handleClick}
          className="font-italiana broder-l-[#f0e1d4] h-12 w-full cursor-pointer border-2 border-t-[#f0e1d4] border-r-[#0a0030] border-b-[#0a0030] bg-[#7b6088] text-lg text-white hover:bg-[#7b6088]/70 active:bg-[#7b6088]/50"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default LongTextInput;
