import type React from "react"

interface ContinueButtonProps {
  word: string
  onClick: () => void
  position: "top" | "bottom" | "center"
  className?: string
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ word, onClick, position, className = "" }) => {
  const baseClasses = "z-50 transition-all hover:scale-105 bg-transparent cursor-pointer"

  const positionClasses = {
    top: "absolute left-4 top-[30%]",
    bottom: "absolute right-4 bottom-4",
    center: "absolute left-1/2 bottom-[30%] -translate-x-1/2",
  }

  return (
    <div className={`${baseClasses} ${positionClasses[position]} ${className}`} onClick={onClick}>
      <p className="px-3 py-2 bg-transparent bg-opacity-50 text-black rounded">{word}</p>
    </div>
  )
}

export default ContinueButton

