import React, { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import ContinueButton from "./ContinueButton/ContinueButton";
import Answerfield from "./Inputs/AnswerField";
import StoryText from "./StoryText/StoryText";
import { DraggablePiece, DropZone, PlacedPiece, StarOutline } from "./jigsaw/jigsaw";
import type { PuzzlePiece } from "../types/puzzlepiece";
import { puzzlePieces } from "../constant/puzzlepiece";
import { motion } from "framer-motion"

function Test() {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState("");
  const [placedPieces, setPlacedPieces] = useState<string[]>([]);
  const [isComplete, setIsStarComplete] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  function handleDragEnd(event: { active: any; over: any }) {
    const { active, over } = event

    if (over && over.id === `dropzone-${active.id}`) {
      setPlacedPieces((prev) => [...prev, active.id])
    }
  }

  useEffect(() => {
    if (placedPieces.length === puzzlePieces.length) {
      setIsStarComplete(true);
    }
  }, [placedPieces]);

  return (
    <main className="h-full w-full bg-gray-100 p-5">
      <div className="flex bg-red-500 p-4 text-2xl">hello</div>
      <hr className="my-4" />

      <section>
        <h3 className="mb-2 text-lg font-bold">Tap to continue button</h3>
        <div className="relative flex h-[400px] w-full items-center justify-center bg-blue-100">
          <ContinueButton
            position="center"
            word="Tap to Continue"
            color="white"
            delay={5}
            redirectUrl="/"
            onClick={handleClick}
          />
          <ContinueButton
            position="right"
            word="Tap to Continue"
            color="white"
            delay={5}
            redirectUrl="/"
            onClick={handleClick}
          />
          <ContinueButton
            position="bottom"
            word="Tap to Continue"
            color="white"
            delay={5}
            redirectUrl="/"
            onClick={handleClick}
          />
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

      <DndContext onDragEnd={handleDragEnd}>
          {/* Puzzle area with fixed aspect ratio */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl flex justify-center items-center  shadow-xl p-5 sm:p-8 mb-8">
            <div className="relative w-1/2 flex justify-center items-center h-1/2 " style={{ paddingBottom: "75%" }}>
              <div className="absolute  top-0 left-0 w-full h-full">
                {puzzlePieces.map((piece) => (
                  <DropZone key={piece.id} piece={piece}>
                    {placedPieces.includes(piece.id) && <PlacedPiece piece={piece} />}
                  </DropZone>
                ))}
              </div>
            </div>
          </div>

          {/* Pieces area */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-8">
            <div className="flex flex-wrap gap-4 sm:gap-8 justify-center items-center min-h-[100px]">
              {puzzlePieces.map((piece) => (
                <DraggablePiece key={piece.id} piece={piece} isPlaced={placedPieces.includes(piece.id)} />
              ))}
            </div>
          </div>
        </DndContext>

        {isComplete && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 text-center">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl shadow-lg px-4 sm:px-8 py-3 sm:py-4">
              <p className="text-xl sm:text-3xl font-bold text-white">
                ✨ Congratulations! The Perfect Star is Complete! ⭐
              </p>
            </div>
          </motion.div>
        )}
    </main>
  );
}

export default Test;
