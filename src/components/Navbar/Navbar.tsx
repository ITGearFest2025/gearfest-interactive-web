import { useState, useEffect } from "react";
import navbar from "@/assets/navbar/navbar.svg";
import X from "@/assets/navbar/x.svg";
import line from "@/assets/navbar/line.svg";
import linewhite from "@/assets/navbar/linewhite.svg";

const MenuIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    width="24"
    height="21"
    viewBox="0 0 24 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 19.8333C0 19.5239 0.114935 19.2272 0.31952 19.0084C0.524105 18.7896 0.801582 18.6667 1.09091 18.6667H22.9091C23.1984 18.6667 23.4759 18.7896 23.6805 19.0084C23.8851 19.2272 24 19.5239 24 19.8333C24 20.1428 23.8851 20.4395 23.6805 20.6583C23.4759 20.8771 23.1984 21 22.9091 21H1.09091C0.801582 21 0.524105 20.8771 0.31952 20.6583C0.114935 20.4395 0 20.1428 0 19.8333ZM0 10.5C0 10.1906 0.114935 9.89383 0.31952 9.67504C0.524105 9.45625 0.801582 9.33333 1.09091 9.33333H22.9091C23.1984 9.33333 23.4759 9.45625 23.6805 9.67504C23.8851 9.89383 24 10.1906 24 10.5C24 10.8094 23.8851 11.1062 23.6805 11.325C23.4759 11.5438 23.1984 11.6667 22.9091 11.6667H1.09091C0.801582 11.6667 0.524105 11.5438 0.31952 11.325C0.114935 11.1062 0 10.8094 0 10.5ZM0 1.16667C0 0.857247 0.114935 0.560501 0.31952 0.341709C0.524105 0.122917 0.801582 0 1.09091 0H22.9091C23.1984 0 23.4759 0.122917 23.6805 0.341709C23.8851 0.560501 24 0.857247 24 1.16667C24 1.47609 23.8851 1.77283 23.6805 1.99162C23.4759 2.21042 23.1984 2.33333 22.9091 2.33333H1.09091C0.801582 2.33333 0.524105 2.21042 0.31952 1.99162C0.114935 1.77283 0 1.47609 0 1.16667Z"
      fill="white"
    />
  </svg>
);

const Navbar = ({ className = "" }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Helper function to determine text color based on current path
  const getLinkClassName = (path: string) => {
    return `transition-colors duration-300 hover:text-[#FDB515] ${
      currentPath === path ? "text-[#FDB515]" : ""
    }`;
  };

  // Helper function to determine which line image to use
  const getLineImage = (adjacentPath: string) => {
    return currentPath === adjacentPath ? line.src : linewhite.src;
  };

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <nav
      className={`fixed top-0 mx-auto flex w-full max-w-[430px] items-center justify-between ${className}`}
    >
      <button
        onClick={toggleNavbar}
        className="absolute top-4 left-4 z-[100] flex items-center space-x-2 p-2"
      >
        <MenuIcon className="h-8 w-8 scale-75" />
      </button>

      {/* Fullscreen Navbar Overlay */}
      {isNavbarVisible && (
        <div
          id="menu-overlay"
          className="absolute top-0 left-0 z-[100] min-h-[430px] w-full max-w-[430px] bg-contain bg-no-repeat"
        >
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
            <button
              onClick={toggleNavbar}
              className="absolute top-6 right-6 text-5xl text-white"
            >
              <img src={X.src} width={24} height={24} alt="close button" />
            </button>
            <div className="flex h-full items-center text-xl text-white">
              <ul className="z-20 flex h-full flex-col items-center justify-center">
                <li className="flex flex-col items-center justify-center gap-4 pt-15 pb-3">
                  <a href="/" className={`${getLinkClassName("/")} `}>
                    Home
                  </a>
                </li>
                <img
                  src={getLineImage("/")}
                  alt="Divider"
                  className="w-full opacity-90"
                />
                <li className="flex flex-col items-center justify-center gap-4 py-3">
                  <a
                    href="/what-is-gearfest"
                    className={getLinkClassName("/what-is-gearfest")}
                  >
                    What is Gear Festival?
                  </a>
                </li>
                <img
                  src={getLineImage("/what-is-gearfest")}
                  alt="Divider"
                  className="w-full opacity-90"
                />
                <li className="flex flex-col items-center justify-center gap-4 py-3">
                  <a href="/donation" className={getLinkClassName("/donation")}>
                    Donation
                  </a>
                </li>
                <img
                  src={getLineImage("/donation")}
                  alt="Divider"
                  className="w-full opacity-90"
                />
                <li className="flex flex-col items-center justify-center gap-4 py-3">
                  <a
                    href="/starboard"
                    className={getLinkClassName("/starboard")}
                  >
                    Star Board
                  </a>
                </li>
                <img
                  src={getLineImage("/starboard")}
                  alt="Divider"
                  className="w-full opacity-90"
                />
              </ul>
            </div>
          </div>
          <img
            src={navbar.src}
            className="absolute top-0 right-0 left-0"
            alt="navbar bg"
          />
          <div onClick={toggleNavbar} className="fixed inset-0 z-0"></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
