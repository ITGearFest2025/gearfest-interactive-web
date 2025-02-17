import React, { useRef, useEffect } from 'react'

interface DragScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const DragScreen: React.FC<DragScreenProps> = ({ children }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, []);
  return (
      <div ref={targetRef} className="h-[1864px] w-[860px]">
        {children}
      </div>
  );
}

export default DragScreen