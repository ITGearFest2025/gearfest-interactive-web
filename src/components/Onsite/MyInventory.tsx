import { userCollection } from "@/stores/userCollection";
import { useStore } from "@nanostores/react";
import { ImageSrc, validItems } from "./ShowItem";
import Inventory from "@/pages/onsite/inventory.astro";

const MyInventory = () => {
  const tempItem = useStore(userCollection);
  const item = Object.keys(tempItem).filter((key) => tempItem[key] === "true");
  return (
    <>
      {item.length > 0 ? (
        <div className="hide-scrollbar mt-6 grid max-h-[560px] grid-cols-3 gap-4 overflow-y-auto">
          {Array.from({ length: 25 }, (_, index) => index + 1).map(
            (i, index) => {
              return (
                <a
                  key={index}
                  href={
                    index <= item.length - 1
                      ? `/onsite/getitem?item=${validItems[parseInt(item[index]) - 1]}`
                      : ""
                  }
                  className="eiei flex h-[100px] w-[100px] items-center justify-center border-[1px] border-[#F7DEFC] bg-[#0D0232]"
                >
                  {index <= item.length - 1 ? (
                    <img
                      src={ImageSrc[parseInt(item[index]) - 1].src}
                      alt="items"
                      className="h-[90px] w-[90px] object-cover"
                    />
                  ) : (
                    <></>
                  )}
                </a>
              );
            },
          )}
        </div>
      ) : (
        <div className="font-taviraj flex h-full w-full flex-col items-center justify-center gap-2 text-center">
          <p className="text-2xl text-white">Your inventory is empty.</p>
          <p className="text-base text-[#E2C7E8]">
            Scan QRcode in Gear Festival to collect items.
          </p>
        </div>
      )}
    </>
  );
};

export default MyInventory;
