import { userCollection } from "@/stores/userCollection";
import { useStore } from "@nanostores/react";
import { useState } from "react";

interface KeepButtonProps {
  id: string;
}

export default function KeepButton({ id = "0" }: KeepButtonProps) {
  const itemStatus = useStore(userCollection);
  const isKeeped = itemStatus[id] === "true";

  const handleClick = () => {
    const checkKeep = userCollection.get()[id] || "false";
    userCollection.setKey(id, "true");
  };
  return (
    <button
      style={{
        boxShadow: "0px 0px 10px 2px #E2C7E8",
      }}
      className={`inline-flex h-[47px] w-full cursor-pointer items-center justify-center rounded-full border-2 px-4 py-2 text-2xl text-white transition duration-300 ${
        isKeeped
          ? "border-[#EAA32F] bg-[#EAA32F40]" // Background: #EAA32F with 25% opacity & border color
          : "border-white bg-transparent" // Initial state: Transparent
      }`}
      onClick={handleClick}
    >
      {isKeeped ? "Item has been keeped" : "Keep in inventory"}
    </button>
  );
}
