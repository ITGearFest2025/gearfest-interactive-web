import React from 'react';

type TextBoxProps = {
  type: 'top' | 'bottom' | 'center';
  children: React.ReactNode;
  className?: string;
};

const TextBox: React.FC<TextBoxProps> = ({ type, children, className = "" }) => {
  const baseClasses = "w-full h-full relative";
  
  const typeClasses = {
    top: "pt-[30%] pl-4 bg-transparent",
    bottom: "relative",
    center: "flex items-center justify-center bg-transparent"
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]} ${className}`}>
      {type === "bottom" ? (
        <div className="absolute bottom-0 left-0 right-0 p-5 h-[30%] text-white bg-black opacity-50 flex flex-col justify-start ">
          {children}
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default TextBox;
