import React from "react";

type TextBoxProps = {
  type: "top" | "bottom" | "center";
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
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]} ${className}`}>
      {children ? children : <p className="text-xl">{word}</p>}
    </div>
  );
  // return (
  //   <div className={`${baseClasses} ${typeClasses[type]} ${className}`}>
  //     {type === "bottom" ? (
  //       <div className="absolute right-0 bottom-0 left-0 flex h-[30%] flex-col justify-start bg-black p-5 text-white opacity-50">
  //         {children}
  //       </div>
  //     ) : (
  //       <div>{children}</div>
  //     )}
  //   </div>
  // );
};

export default TextBox;
