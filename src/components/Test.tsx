import React, { useState, useEffect } from "react";
import ContinueButton from "./ContinueButton/ContinueButton";

function Test() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    console.log("Clicked", clicked);
  }, [clicked]);

  return (
    <main>
      <div className="bg-red-500 text-2xl flex">hello</div>
      <hr></hr>
      <section>
      <h3>Tap to continue button</h3>
      <div className="bg-gray w-full h-[400px]">
        <ContinueButton word="Tap to Continue" onClick={handleClick} />
        {clicked && <p>Clicked</p>}
      </div>
      <hr></hr>
      </section>
    </main>
  );
}

export default Test;