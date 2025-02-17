import type React from "react";

interface LongTextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  id?: string;
  rows?: number;
  className?: string;
}

const LongTextInput: React.FC<LongTextInputProps> = ({
  value,
  onChange,
  placeholder = "Enter your text here...",
  id = "long-text-input",
  rows = 4,
  className = "",
}) => {
  return (
    <div className={`flex h-full flex-col space-y-2`}>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full rounded-lg border px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none ${className}`}
      />
    </div>
  );
};

export default LongTextInput;
