import React, { useState, useEffect } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import ContinueButton from "./ContinueButton/ContinueButton";
import Answerfield from "./AnswerField/AnswerField";
import StoryText from "./StoryText/StoryText";

function DraggableItem({ id, children }: { id: string; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  })
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  )
}

function DroppableArea({ id, children }: { id: string; children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({
    id: id,
  })

  return (
    <div ref={setNodeRef} className="p-4 bg-green-200 min-h-[200px]">
      <h4 className="mb-2 font-bold">Droppable Area {id}</h4>
      {children}
    </div>
  )
}
function Test() {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState("");
  const [items, setItems] = useState([
    { id: "1", content: "Item 1" },
    { id: "2", content: "Item 2" },
    { id: "3", content: "Item 3" },
  ])
  const [droppedItems, setDroppedItems] = useState<{ [key: string]: string[] }>({
    "1": [],
    "2": [],
    "3": [],
  })
  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    console.log("Clicked", clicked);
  }, [clicked]);

 
  function handleDragEnd(event: { active: any; over: any }) {
    const { active, over } = event

    if (over && active.id[0] === over.id) {
      const updatedItems = items.filter((item) => item.id !== active.id)
      setItems(updatedItems)

      const updatedDroppedItems = {
        ...droppedItems,
        [over.id]: [...droppedItems[over.id], active.id],
      }
      setDroppedItems(updatedDroppedItems)

      // Check if all items have been dropped
      if (updatedItems.length === 0) {
        alert("Complete! All items have been correctly placed.")
      }
    }
  }


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
            onClick={handleClick}
          />
          <ContinueButton
            position="top"
            word="Tap to Continue"
            onClick={handleClick}
          />
          <ContinueButton
            position="bottom"
            word="Tap to Continue"
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

      <div className="h-auto w-full p-4">
        <h3 className="mb-2 text-lg font-bold">Drag and Drop Example</h3>
        <DndContext onDragEnd={handleDragEnd}>
          <div className="flex gap-4">
            <div className="w-1/2 p-4 bg-gray-200">
              <h4 className="mb-2 font-bold">Draggable Items</h4>
              {items.map((item) => (
                <DraggableItem key={item.id} id={item.id}>
                  <div className="mb-2 p-2 bg-white rounded shadow">{item.content}</div>
                </DraggableItem>
              ))}
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              {["1", "2", "3"].map((id) => (
                <DroppableArea key={id} id={id}>
                  {droppedItems[id].map((itemId) => (
                    <div key={itemId} className="mb-2 p-2 bg-white rounded shadow">
                      {items.find((item) => item.id === itemId)?.content || itemId}
                    </div>
                  ))}
                </DroppableArea>
              ))}
            </div>
          </div>
        </DndContext>
      </div>
    </main>
  );
}

export default Test;