
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('button, a, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-[#8F62AA] pointer-events-none z-[9999] mix-blend-screen"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: isHovering ? 4 : 1,
        opacity: 0.8,
        boxShadow: isHovering ? '0 0 20px #8F62AA' : '0 0 10px #8F62AA',
      }}
    />
  );
};

export default CustomCursor;
