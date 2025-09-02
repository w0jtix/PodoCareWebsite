import { useEffect, useState } from "react";

export interface FillingLineProps {
  delay: number;
  start: boolean;
}

export function FillingLine ({ delay, start }: FillingLineProps) {
  const [filled, setFilled] = useState<boolean>(false);

  useEffect(() => {
    if (start) {
      const timer = setTimeout(() => {
        setFilled(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [start, delay]);

  return (
    <div className="filling-line-container">
      <div className={`line ${filled ? "fill" : ""}`}></div>
    </div>
  );
};

export default FillingLine;
