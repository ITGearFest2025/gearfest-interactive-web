import type React from "react"

interface LongTextInputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  id?: string
  rows?: number
  className?: string
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
    <div className="flex flex-col space-y-2">
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${className}`}
      />
    </div>
  )
}

export default LongTextInput

