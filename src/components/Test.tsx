import React, { useState, useEffect } from "react";
import ContinueButton from "./ContinueButton/ContinueButton";
import Answerfield from "./AnswerField/AnswerField";
import StoryText from "./StoryText/StoryText";

function Test() {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState("");

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    console.log("Clicked", clicked);
  }, [clicked]);

  return (
    <main className="h-full w-full bg-gray-100 p-5">
      <div className="flex bg-red-500 p-4 text-2xl">hello</div>
      <hr className="my-4" />

      <section>
        <h3 className="mb-2 text-lg font-bold">Tap to continue button</h3>
        <div className="flex h-[400px] w-full items-center justify-center bg-blue-100">
          <ContinueButton word="Tap to Continue" onClick={handleClick} />
          {clicked && <p className="text-green-500">Clicked</p>}
        </div>
        <hr className="my-4" />
      </section>

      <section>
        <h3 className="mb-2 text-lg font-bold">Long text input</h3>
        <div className="h-[400px] w-full bg-yellow-100 p-4">
          <Answerfield
            value={text}
            className="h-full"
            onChange={handleTextChange}
          />
        </div>
        <hr className="my-4" />
      </section>

      <div className="h-auto w-full p-4">
        <h3 className="mb-2 text-lg font-bold">Story Text type 1</h3>
        <div className="flex h-[800px] w-full bg-gray-500 p-4">
          <StoryText type="top" className="h-full w-full bg-blue-100">
            <p>
              Top story text Top story text Top story text Top story text Top
              story text Top story text Top story text Top story text Top story
              text Top story text Top story text Top story text Top story text
              Top story text Top story text Top story text Top story text Top
              story text Top story text Top story text Top story text Top story
              text Top story text Top story text Top story text Top story text
              Top story text Top story text Top story text Top story text Top
              story text Top story text Top story text Top story text
            </p>
          </StoryText>
        </div>
        <hr className="my-4" />
      </div>

      <div className="h-auto w-full p-4">
        <h3 className="mb-2 text-lg font-bold">Story Text type 2</h3>
        <div className="flex h-[800px] w-full bg-gray-500 p-4">
          <StoryText type="bottom" className="h-full w-full bg-blue-100">
            <p>
              bottom story text bottom story text bottom story text bottom story
              text bottom story text bottom story text bottom story text bottom
              story text bottom story text bottom story text bottom story text
              bottom story text bottom story text bottom story text bottom story
              text bottom story text bottom story text bottom story text bottom
              story text bottom story text bottom story text bottom story text
              bottom story text bottom story text
            </p>
          </StoryText>
        </div>
        <hr className="my-4" />
      </div>

      <div className="h-auto w-full p-4">
        <h3 className="mb-2 text-lg font-bold">Story Text type 3</h3>
        <div className="flex h-[800px] w-full bg-gray-500 p-4">
          <StoryText type="center" className="h-full w-full bg-blue-100">
            <p>
              center story text center story text center story text center story
              text center story text center story text center story text center
              story text center story text center story text center story text
              center story text center story text center story text center story
              text center story text
            </p>
          </StoryText>
        </div>
        <hr className="my-4" />
      </div>
    </main>
  );
}

export default Test;
