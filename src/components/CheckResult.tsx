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
        <div className="flex w-full items-center justify-between">
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
          <a
            href="/donation"
            className="font-judson flex cursor-pointer items-center p-3 font-bold text-white"
          >
            {"Donation"}
            <img
              src={ArrowDown.src}
              width={36}
              height={36}
              className="rotate-270"
              alt="ArrowRight"
            />
          </a>
        </div>
      ) : (
        // You can render something else or return null
        <div className="flex w-full items-center justify-end">
          <a
            href="/donation"
            className="font-judson flex cursor-pointer items-center p-3 font-bold text-white"
          >
            {"Donation"}
            <img
              src={ArrowDown.src}
              width={36}
              height={36}
              className="rotate-270"
              alt="ArrowRight"
            />
          </a>{" "}
        </div> // Or null
      )}
    </>
  );
};

export const CheckResultDonation = () => {
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
        <div className="flex items-center justify-between">
          <a
            href="/what-is-gearfest"
            className="font-judson flex cursor-pointer items-center p-3 font-bold text-white"
          >
            <img
              src={ArrowDown.src}
              width={36}
              height={36}
              className="rotate-90"
              alt="ArrowLeft"
            />
            {"Gear Festival"}
          </a>
          <a
            href="/starboard"
            className="font-judson flex cursor-pointer items-center p-3 font-bold text-white"
          >
            {"Starboard"}
            <img
              src={ArrowDown.src}
              width={36}
              height={36}
              className="rotate-270"
              alt="ArrowRight"
            />
          </a>
        </div>
      ) : (
        // You can render something else or return null
        <div className="flex items-center justify-start">
          <a
            href="/what-is-gearfest"
            className="font-judson flex cursor-pointer items-center p-3 font-bold text-white"
          >
            <img
              src={ArrowDown.src}
              width={36}
              height={36}
              className="rotate-90"
              alt="ArrowLeft"
            />
            {"Gear Festival"}
          </a>
        </div> // Or null
      )}
    </>
  );
};

export default CheckResult;
