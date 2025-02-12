import React from "react";

type TextBoxProps = {
  type: "top" | "bottom" | "center";
  children: React.ReactNode;
  className?: string;
};

const TextBox: React.FC<TextBoxProps> = ({
  type,
  children,
  className = "",
}) => {
  const baseClasses = "w-full h-full relative";

  const typeClasses = {
    top: "pt-[30%] pl-4 bg-transparent",
    bottom: "relative",
    center: "flex items-center justify-center bg-transparent",
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]} ${className}`}>
      {type === "bottom" ? (
        <div className="absolute right-0 bottom-0 left-0 flex h-[30%] flex-col justify-start bg-black p-5 text-white opacity-50">
          {children}
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default TextBox;
