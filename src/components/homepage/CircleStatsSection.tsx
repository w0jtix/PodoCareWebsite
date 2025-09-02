import CircleStat from "./CircleStat";
import { useEffect } from "react";
import { CIRCLE_STATS } from "../../data/circle-stats";

export interface CircleStatsSectionProps {
  onDone: () => void;
}

export function CircleStatsSection({ onDone }: CircleStatsSectionProps) {
  useEffect(() => {
    const maxTime = Math.max(
      ...CIRCLE_STATS.map((stat) => stat.delay + stat.duration)
    );
    const timer = setTimeout(() => {
      onDone();
    }, maxTime + 300);

    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="circle-stats-wrapper flex width-max justify-center align-items-center height-fit-content">
      {CIRCLE_STATS.map((stat, index) => (
        <CircleStat
          key={index}
          label={stat.label}
          value={stat.value}
          duration={stat.duration}
          delay={stat.delay}
        />
      ))}
    </div>
  );
}

export default CircleStatsSection;
