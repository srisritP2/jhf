import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number; // ms
  label?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2000, label, className }) => {
  const [count, setCount] = useState(0);
  const startTimestamp = useRef<number | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        raf.current = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      startTimestamp.current = null;
    };
  }, [value, duration]);

  return (
    <div className={`flex flex-col items-center ${className || ''}`} aria-label={label || undefined}>
      <span className="text-5xl md:text-6xl font-extrabold text-pink-600 drop-shadow animate-pulse">{count.toLocaleString()}</span>
      {label && <span className="mt-2 text-lg font-semibold text-gray-700">{label}</span>}
    </div>
  );
};

export default AnimatedCounter;
