// CheckResult.tsx
import ArrowDown from "@/assets/landing/arrowdown.svg";
import { userResult } from "@/stores/userResult";
import { useEffect, useState } from "react";
const CheckResult = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setResult(userResult.get()["result"] || "");
    // console.log("result", result);
    setStatus(true);
  }, []);
  return (
    <>
      {result !== "" && status ? (
        <>
          <a
            href="/starboard"
            className="font-judson flex cursor-pointer items-center p-3 font-bold text-white"
          >
            <img
              src={ArrowDown.src}
              width={36}
              height={36}
              className="rotate-90"
              alt="ArrowLeft"
            />
            {"Starboard"}
          </a>
        </>
      ) : (
        // You can render something else or return null
        <></> // Or null
      )}
    </>
  );
};

export default CheckResult;
