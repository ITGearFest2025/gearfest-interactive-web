export default function ColorBox() {
  const handleClick = () => {
    window.location.href = "/"; 
  };

  return (
    <div
      style={{
        boxShadow: "0px 0px 10px 2px #E2C7E8",
      }}
      className="inline-flex h-[47px] w-full cursor-pointer items-center justify-center rounded-full border-2 border-white px-4 py-2 text-white transition duration-300"
      onClick={handleClick}
    >
      Back To Home
    </div>
  );
}
