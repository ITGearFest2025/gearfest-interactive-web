export default function ColorBox() {
  const handleClick = () => {
    console.log("Scanning more items..."); // Replace with your actual function
  };

  return (
    <div
      className="inline-flex h-[47px] w-[167px] cursor-pointer items-center justify-center rounded-full border-2 border-white px-4 py-2 text-white transition duration-300"
      onClick={handleClick}
    >
      Scan More Items
    </div>
  );
}
