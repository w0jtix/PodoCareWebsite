import { useEffect, useState } from "react";

export interface CircleStatProps {
  label: string;
  value: number;
  duration: number;
  delay: number;
}

export function CircleStat ({ label, value, duration, delay = 0 }: CircleStatProps) {
  const [progress, setProgress] = useState<number>(0);
  const [showDot, setShowDot] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDot(true);
      let start = 0;
      const stepTime = duration / value;
      const interval = setInterval(() => {
        start += 1;
        setProgress(start);
        if (start >= value) clearInterval(interval);
      }, stepTime);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, duration, delay]);

  return (
    <div className="circle-wrapper flex-column align-items-center relative">
      <div
        className="circle border-radius-half relative flex align-items-center justify-center"
        style={{
          background: `conic-gradient(#000 ${progress * 3.6}deg,rgba(253, 253, 251, 0) ${
            progress * 3.6
          }deg)`,
        }}
      >
        {showDot && (
          <div
            className="circle-end-dot absolute"
            style={{
              transform: `rotate(${progress * 3.6 - 90}deg) translate(42px)`,
            }}
          />
        )}
        <div className="circle-inner border-radius-half flex align-items-center justify-center">
          <span className="circle-percent">{progress}%</span>
        </div>
      </div>
      <span className="circle-label nowrap">{label}</span>
    </div>
  );
};

export default CircleStat;
