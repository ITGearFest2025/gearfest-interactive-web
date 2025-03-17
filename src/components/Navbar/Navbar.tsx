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
      {/* Left side with menu icon */}
      <div className="flex-shrink-0">
        <MenuTab />
      </div>
      
      {/* Center with logo */}
      <div className="flex-shrink-0">
        <img 
          src={gearfest.src} 
          alt="Gear Festival" 
          className="h-10"
        />
      </div>
      
      {/* Right side with icons */}
      <div className="flex-shrink-0 flex items-center space-x-4">
        <img 
          src={esc.src} 
          alt="ESC" 
          className="h-8"
        />
        <img 
          src={idk.src} 
          alt="IDK" 
          className="h-8"
        />
      </div>
    </nav>
  );
};

export default Navbar;