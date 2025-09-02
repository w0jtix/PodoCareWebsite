import { activities } from "../../data/texts";

export interface FAActivitiesProps {
  activities: activities;
  className?: string;
}

export function FAActivities({
  activities,
  className = "",
}: FAActivitiesProps) {
  return (
    <div className={`fa-activities-container flex-column width-90 ${className}`}>
      <section className="activity-title-section flex width-80 justify-center align-items-center align-self-center g-10">
        <img
          className="activity-title-img"
          src={`src/assets/${
            activities.category === "To zrób przed"
              ? `green-tick`
              : activities.category === "Tego nie rób"
              ? `red-x`
              : ""
          }.svg`}
          alt={`${
            activities.category === "To zrób przed"
              ? `Tick`
              : activities.category === "Tego nie rób"
              ? `X`
              : ""
          }`}
        />
        <h2 className="activity-title flex justify-center">{activities.category}</h2>
      </section>
      <div className="activities-list flex-column width-80 align-self-center">
        {activities.activities.map((activity) => (
          <div className="flex align-items-center g-5">
            <img
              className="activity-text-img"
              src="src\assets\bulletpoint.svg"
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
