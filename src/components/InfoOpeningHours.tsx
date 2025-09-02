import { OPENING_HOURS } from "../data/header-info";
import { redirectToBooksy } from "./utlis/navigation";

export interface InfoOpeningHoursProps {
  displayImg?: boolean;
  className?: string;
}

export function InfoOpeningHours ({ displayImg = true, className="" }: InfoOpeningHoursProps) {
  return (
    <section className="info-opening-hours gap flex">
        { displayImg && 
        <>
        <div className="info-oh-img-bg flex justify-center">
          <img
            className="info-oh-img align-self-center"
            src="./src/assets/calendar.svg"
            alt="Calendar"
          ></img>
        </div>
        </>}
        <div className="info-opening-hours flex-column justify-center pointer" onClick={redirectToBooksy}>
          {OPENING_HOURS.map((oh, index) => (
            <div key={index} className="info-oh-container flex">
              <div className={`info-oh-days flex justify-start align-center ${className}`}>
                <span className={`info-oh-d-span full-text nowrap ${className}`}>{oh.days}</span>
                <span className={`info-oh-d-span short-text nowrap ${className}`}>{oh.daysShort}</span>
              </div>
              <div className={`info-oh-hours flex justify-center align-center ${className}`}>
                <span className={`info-oh-h-span full-text nowrap ${className}`}>{oh.hours}</span>
                <span className={`info-oh-h-span short-text nowrap ${className}`}>{oh.hoursShort}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default InfoOpeningHours
