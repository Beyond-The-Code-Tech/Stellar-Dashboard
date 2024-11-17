import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className="stars"></div>
      <div className="twinkling"></div>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-500 rounded-full"
          animate={{
            x: mousePosition.x + Math.random() * 100 - 50,
            y: mousePosition.y + Math.random() * 100 - 50,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            mass: 0.1 + Math.random() * 0.3,
          }}
          style={{
            filter: "blur(1px)",
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}