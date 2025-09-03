import { activities } from "../../data/texts";
import bulletPoint from "../../assets/bulletpoint.svg"
import greenTick from "../../assets/green-tick.svg"
import redX from "../../assets/red-x.svg"

export interface FAActivitiesProps {
  activities: activities;
  className?: string;
}

export function FAActivities({
  activities,
  className = "",
}: FAActivitiesProps) {

  const activityIcons: Record<string,{src: string, alt: string}> = {
    "To zrób przed": {src: greenTick, alt:"Tick"},
    "Tego nie rób": { src: redX, alt: "X"}
  }


  return (
    <div className={`fa-activities-container flex-column width-90 ${className}`}>
      <section className="activity-title-section flex width-80 justify-center align-items-center align-self-center g-10">
        <img
          className="activity-title-img"
          src={activityIcons[activities.category]?.src}
          alt={activityIcons[activities.category]?.alt}
        />
        <h2 className="activity-title flex justify-center">{activities.category}</h2>
      </section>
      <div className="activities-list flex-column width-80 align-self-center">
        {activities.activities.map((activity) => (
          <div className="flex align-items-center g-5">
            <img
              className="activity-text-img"
              src={bulletPoint}
              alt="Bullet Point"
            ></img>
            <p className="activity-text text-align-justify">{activity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAActivities;
