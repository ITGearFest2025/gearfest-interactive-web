import star from "@/assets/starboard/star1.webp";
import { useState } from "react";
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

const AddYour = ({ ref }: { ref: React.ForwardedRef<HTMLDivElement> }) => {
  const [showAddYour, setShowAddYour] = useState<boolean>(false);
  const [yourMessage, setYourMessage] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);

  const userMessage = userStar.get();

  const handleStarClick = () => {
    setShowAddYour((prev) => !prev);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setYourMessage(event.target.value);
  };

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck((prev) => !prev);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    userStar.set(yourMessage);
    setShowAddYour(false);
  };

  return (
    <>
      <div
        className="absolute top-1/2 left-1/2 flex h-fit w-fit -translate-x-0.5 -translate-y-0.5 cursor-pointer flex-col items-center gap-4 p-4"
        ref={ref}
        onClick={handleStarClick}
      >
        <YourStar size={36} />
        <p className="text-3xl text-white">Your Star</p>
      </div>

      {/* If userStar is empty, show the form; otherwise, show the message */}
      {showAddYour && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/70">
          <YourStar size={36} />
          <p className="text-xl text-white">อยากบอกอะไรกับตัวเองที่ผ่านมาไหม</p>
          <form className="w-72 space-y-4" onSubmit={handleSubmit}>
            <div className="h-52">
              <LongTextInput
                value={yourMessage}
                onChange={handleChange}
                className="h-full bg-neutral-300"
              />
            </div>
            <label className="flex items-center gap-4 text-base text-white">
              <input
                type="checkbox"
                id="share-message"
                name="share-message"
                checked={check}
                onChange={handleCheckChange}
                className="size-4"
              />
              แชร์คำตอบให้คนอื่นเห็น
            </label>
            <button className="w-full cursor-pointer rounded-md bg-neutral-300 py-3 transition-all hover:scale-105 hover:bg-neutral-400">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddYour;
