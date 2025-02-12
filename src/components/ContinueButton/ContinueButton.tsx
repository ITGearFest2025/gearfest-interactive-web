import React from "react";

interface ContinueButtonProps {
  word: string;
  onClick: () => void;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ word, onClick }) => {
  return (
    <div
      className="z-50 bg-transparent"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <p>{word}</p>
    </div>
  );
};

export default ContinueButton;