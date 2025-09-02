import { useEffect, useState } from "react";

export interface FillingCircleProps {
  delay: number;
  src: string;
  alt: string;
}

export function FillingCircle ({ delay, src, alt }: FillingCircleProps) {
  const [filled, setFilled] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilled(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`milestone-circle ${filled ? "fill" : ""} relative flex justify-center align-items-center`}>
      <img
        src={src}
        alt={alt}
        className={`milestone-icon ${alt?.toLowerCase()}`}
      ></img>
    </div>
  );
};

export default FillingCircle;
