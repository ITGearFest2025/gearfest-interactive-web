import star from "@/assets/starboard/Star1.webp";
import { useState, forwardRef, type ForwardedRef } from "react";
import LongTextInput from "@/components/Inputs/LongTextInput";
import { userStar } from "@/stores/userStar";

interface YourStarProps {
  size: number;
}

const YourStar: React.FC<YourStarProps> = ({ size }) => (
  <img
    src={star.src}
    alt="Your Star"
    style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
  />
);

interface StarButtonProps {
  onClick: () => void;
}

const StarButton: React.FC<StarButtonProps> = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-1/2 flex h-fit w-fit -translate-x-0.5 -translate-y-0.5 cursor-pointer flex-col items-center gap-4 p-4"
    onClick={onClick}
  >
    <YourStar size={36} />
    <p className="text-3xl text-white">Your Star</p>
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
}) => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/70">
    <YourStar size={36} />
    <p className="text-xl text-white">อยากบอกอะไรกับตัวเองที่ผ่านมาไหม</p>
    <form className="w-72 space-y-4" onSubmit={onSubmit}>
      <div className="h-52">
        <LongTextInput
          value={message}
          onChange={onMessageChange}
          className="h-full bg-neutral-300"
        />
      </div>
      <label className="flex items-center gap-4 text-base text-white">
        <input
          type="checkbox"
          id="share-message"
          name="share-message"
          checked={check}
          onChange={onCheckChange}
          className="size-4"
        />
        แชร์คำตอบให้คนอื่นเห็น
      </label>
      <button className="w-full cursor-pointer rounded-md bg-neutral-300 py-3 transition-all hover:scale-105 hover:bg-neutral-400">
        Submit
      </button>
    </form>
  </div>
);

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
      userStar.set(yourMessage);
      setShowAddYour(false);
    };

    return (
      <>
        <StarButton onClick={toggleShowAddYour} />
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
