import { useState, useEffect } from "react";
import gearfest from '../../assets/navbar/gearfest.svg';
import MenuTab from "../MenuTab/Menutab";
import esc from '../../assets/navbar/esc.svg';
import idk from '../../assets/navbar/idk.svg';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className = "" }: NavbarProps) => {
  const [currentPath, setCurrentPath] = useState("");
  
  // Set current path when component mounts
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav className={`w-full px-6 py-4 flex justify-between items-center ${className}`}>
      <div className="flex-shrink-0 flex items-center justify-center">
        <MenuTab className="relative " />
        <img 
          src={gearfest.src} 
          alt="Gear Festival" 
          className=""
        />
      </div>
      

      <div className="flex-shrink-0 flex ">
        <img 
          src={esc.src} 
          alt="Gear Festival" 
          className=""
        />
        <img 
          src={idk.src} 
          alt="Gear Festival" 
          className=""
        />
      </div>
    </nav>
  );
};

export default Navbar;