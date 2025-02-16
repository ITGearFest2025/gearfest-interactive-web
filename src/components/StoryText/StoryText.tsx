import React from "react";

type TextBoxProps = {
  type: "top" | "bottom" | "center" | "box";
  children?: React.ReactNode;
  word?: string;
  className?: string;
};

const TextBox: React.FC<TextBoxProps> = ({
  type,
  children,
  word,
  className = "",
}) => {
  const baseClasses = "absolute w-full px-8 select-none";

  const typeClasses = {
    top: "top-[20%] bg-transparent",
    bottom:
      "bottom-0 h-[20%] bg-black/30 w-full flex items-center justify-center",
    center: "top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2",
    box: "relative",
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]} ${className}`}>
      {children ? children : <p className="text-xl">{word}</p>}
    </div>
  );
};

export default TextBox;
