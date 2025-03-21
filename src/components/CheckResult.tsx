import ArrowDown from "@/assets/landing/arrowdown.svg";
import { userResult } from "@/stores/userResult";
const CheckResult = () => {
  const temp = userResult.get()["result"] || "";
  return (
    <>
      {temp && temp !== "" && (
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
          {/* <a
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
          </a> */}
        </>
      )}
      {/* {temp === "" && (
        <a
          href="/donation"
          className="font-judson flex cursor-pointer items-center p-3 font-bold text-white"
        >
          <img
            src={ArrowDown.src}
            width={36}
            height={36}
            className="rotate-90"
            alt="ArrowLeft"
          />
          {"Donation"}
        </a>
      )} */}
    </>
  );
};

export default CheckResult;
