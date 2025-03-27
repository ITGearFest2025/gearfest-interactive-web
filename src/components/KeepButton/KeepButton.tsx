import { useState } from "react";

export default function ColorBox() {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`inline-flex h-[47px] w-[341px] cursor-pointer items-center justify-center rounded-full border-2 px-4 py-2 text-white transition duration-300 ${
        active
          ? "border-[#EAA32F] bg-[#EAA32F40]" // Background: #EAA32F with 25% opacity & border color
          : "border-white bg-transparent" // Initial state: Transparent
      }`}
      onClick={() => setActive(!active)}
    >
      {active ? "Item has been keeped" : "Keep in inventory"}
    </div>
  );
}
