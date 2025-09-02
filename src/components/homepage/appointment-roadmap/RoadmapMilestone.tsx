import FillingCircle from "./FillingCircle";
import { useEffect, useState } from "react";

export interface RoadmapMilestoneProps {
  delay: number;
  label: string;
  src: string;
  alt: string;
  start: boolean;
}

export function RoadmapMilestone({
  delay,
  label,
  src,
  alt,
  start,
}: RoadmapMilestoneProps) {
  const [showUnderline, setShowUnderline] = useState<boolean>(false);

  useEffect(() => {
    if (start) {
      const timer = setTimeout(() => {
        setShowUnderline(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [start, delay]);

  return (
    <div className="milestone flex-column align-items-center">
      <FillingCircle delay={delay} src={src} alt={alt} />
      <div
        className={`milestone-label-container ${
          showUnderline ? "with-underline" : ""
        } flex relative justify-center align-items-center`}
      >
        <span className="milestone-label">{label}</span>
      </div>
    </div>
  );
}

export default RoadmapMilestone;
