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
    <main className="w-full h-full p-5 bg-gray-100">
      <div className="flex bg-red-500 text-2xl p-4">hello</div>
      <hr className="my-4" />

      <section>
        <h3 className="text-lg font-bold mb-2">Tap to continue button</h3>
        <div className="h-[400px] w-full bg-blue-100 flex items-center justify-center">
          <ContinueButton word="Tap to Continue" onClick={handleClick} />
          {clicked && <p className="text-green-500">Clicked</p>}
        </div>
        <hr className="my-4" />
      </section>

      <section>
        <h3 className="text-lg font-bold mb-2">Long text input</h3>
        <div className="h-[400px] w-full bg-yellow-100 p-4">
          <Answerfield value={text} className="h-full" onChange={handleTextChange} />

        </div>
        <hr className="my-4" />
      </section>

      <div className="h-auto w-full  p-4">
        <h3 className="text-lg font-bold mb-2">Story Text type 1</h3>
        <div className="w-full h-[800px] flex bg-gray-500 p-4">
          <StoryText type="top" className="w-full h-full bg-blue-100">
            <p>Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text Top story text</p>
          </StoryText>

        </div>
        <hr className="my-4" />
      </div>

      <div className="h-auto w-full  p-4">
        <h3 className="text-lg font-bold mb-2">Story Text type 2</h3>
        <div className="w-full h-[800px] flex bg-gray-500 p-4">
          <StoryText type="bottom" className="w-full h-full bg-blue-100">
            <p>bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text bottom story text</p>
          </StoryText>

        </div>
        <hr className="my-4" />
      </div>

      <div className="h-auto w-full  p-4">
        <h3 className="text-lg font-bold mb-2">Story Text type 3</h3>
        <div className="w-full h-[800px] flex bg-gray-500 p-4">
          <StoryText type="center" className="w-full h-full bg-blue-100">
            <p>center story text center story text center story text center story text center story text center story text center story text center story text center story text center story text center story text center story text center story text center story text center story text center story text</p>
          </StoryText>

        </div>
        <hr className="my-4" />
      </div>
    </main>
  );
}

export default Test;