import { useState, forwardRef, type ForwardedRef } from "react";
import { userLongAnswer } from "@/stores/userLongAnswer";
import { useStore } from "@nanostores/react";
import { userResult } from "@/stores/userResult";

import Reformer from "@/assets/starboard/reformer_Star.svg";
import Achiever from "@/assets/starboard/achiever_Star.svg";
import Helper from "@/assets/starboard/helper_Star.svg";
import Individualist from "@/assets/starboard/individualist_Star.svg";
import Investigator from "@/assets/starboard/investigator_Star.svg";
import Peacemaker from "@/assets/starboard/peacemaker_Star.svg";
import Challenger from "@/assets/starboard/challenger_Star.svg";
import Enthusiast from "@/assets/starboard/enthusiast_Star.svg";
import Loyalist from "@/assets/starboard/loyalist_Star.svg";

interface YourStarProps {
  size: number;
}

const mapType = {
  reformer: Reformer,
  achiever: Achiever,
  helper: Helper,
  individualist: Individualist,
  investigator: Investigator,
  peacemaker: Peacemaker,
  challenger: Challenger,
  enthusiast: Enthusiast,
  loyalist: Loyalist,
};

const YourStar: React.FC<YourStarProps> = ({ size }) => {
  const userStar = userResult.get()["result"] || "";
  return (
    <img
      src={
        userStar in mapType
          ? mapType[userStar as keyof typeof mapType].src
          : Reformer.src
      }
      alt="Your Star"
      style={{
        width: `${size * 4}px`,
        height: `${size * 4}px`,
        filter:
          "drop-shadow(0px 0px 8px rgba(7, 11, 31, 0.5)) drop-shadow(0px 0px 20px #FFFFFF)",
      }}
    />
  );
};

interface StarButtonProps {
  onClick: () => void;
  ref: ForwardedRef<HTMLDivElement>;
}

const StarButton: React.FC<StarButtonProps> = ({ ref, onClick }) => (
  <div
    ref={ref}
    className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center gap-4 p-4"
    onClick={onClick}
  >
    <YourStar size={36} />
    <p className="font-bethellen text-3xl text-white">Your Star</p>
  </div>
);

interface StarFormProps {
  message: string;
  onMessageChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  check: boolean;
  onCheckChange: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const StarForm: React.FC<StarFormProps> = ({
  message,
  onMessageChange,
  check,
  onCheckChange,
  onSubmit,
}) => {
  const answers = useStore(userLongAnswer); // ✅ Watch the entire store
  const text = answers["tellUs"] || ""; // ✅ Extract only the relevant field

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    userLongAnswer.setKey("tellUs", e.target.value); // ✅ Update only one field
  };
  const handleClick = () => {};

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/50">
      <YourStar size={50} />
      <p className="font-taviraj text-xl text-white">
        "อยากบอกอะไรกับตัวเองที่ผ่านมาไหม"
      </p>
      <form className="w-72 space-y-4" onSubmit={onSubmit}>
        <div className="h-auto">
          <textarea
            value={text} // ✅ Watches only this field
            onChange={onChange}
            placeholder="Write something..."
            rows={10}
            style={{
              background: "#807E8E",
              boxShadow: "inset 0px 0px 64px #FFFFFF",
              borderRadius: "8px",
            }}
            className={`font-taviraj w-full border-2 px-6 py-4 text-white placeholder:text-white`}
          />
        </div>
        <label className="font-taviraj flex items-center gap-3 text-base text-white">
          <input
            type="checkbox"
            id="share-message"
            name="share-message"
            checked={check}
            onChange={onCheckChange}
            className="font size-6 rounded-sm bg-[#faf8f5]"
          />
          แชร์คำตอบกับผู้อื่น
        </label>
        <button className="font-taviraj w-full cursor-pointer rounded-md bg-[#faf8f5] py-3 text-black transition-all duration-300 hover:scale-110 active:scale-105">
          Submit
        </button>
      </form>
    </div>
  );
};

const AddYour = forwardRef<HTMLDivElement>(
  (_, ref: ForwardedRef<HTMLDivElement>) => {
    const [showAddYour, setShowAddYour] = useState<boolean>(false);
    const [yourMessage, setYourMessage] = useState<string>("");
    const [check, setCheck] = useState<boolean>(false);

    const toggleShowAddYour = (): void => setShowAddYour((prev) => !prev);
    const handleChange = (
      event: React.ChangeEvent<HTMLTextAreaElement>,
    ): void => setYourMessage(event.target.value);
    const handleCheckChange = (): void => setCheck((prev) => !prev);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      setShowAddYour(false);
    };

    return (
      <>
        <StarButton ref={ref} onClick={toggleShowAddYour} />
        {showAddYour && (
          <StarForm
            message={yourMessage}
            onMessageChange={handleChange}
            check={check}
            onCheckChange={handleCheckChange}
            onSubmit={handleSubmit}
          />
        )}
      </>
    );
  },
);

export default AddYour;
