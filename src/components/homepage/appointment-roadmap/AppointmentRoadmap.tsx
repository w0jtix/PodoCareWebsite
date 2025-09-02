import RoadmapMilestone from "./RoadmapMilestone";
import FillingLine from "./FillingLine";
import Button from "../../Button";
import { useState, useEffect, useRef } from "react";
import { redirectTo, redirectToBooksy } from "../../utlis/navigation";
import { AppTab } from "../../../data/appTabs";

const AppointmentRoadmap = () => {
  const roadmapRef = useRef(null);
  const [start, setStart] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (roadmapRef.current) {
      observer.observe(roadmapRef.current);
    }

    return () => {
      if (roadmapRef.current) observer.unobserve(roadmapRef.current);
    };
  }, []);

  return (
    <div
      ref={roadmapRef}
      className="appointment-roadmap-container flex-column height-fit-content width-90 align-self-center"
    >
      <div className="stepper flex align-items-center space-between width-max">
        <RoadmapMilestone
          start={start}
          delay={0}
          label={"Rejestracja"}
          src={"src/assets/calendar.svg"}
          alt={"Umów wizytę"}
        />
        <FillingLine delay={600} start={start} />
        <RoadmapMilestone
          start={start}
          delay={1100}
          label={"Konsultacja"}
          src={"src/assets/footprint.svg"}
          alt={"Konsultacja"}
        />
        <FillingLine delay={1700} start={start} />
        <RoadmapMilestone
          start={start}
          delay={2200}
          label={"Terapia"}
          src={"src/assets/terapia.png"}
          alt={"Terapia"}
        />
      </div>
      <section className="appointment-roadmap-button-section flex width-max space-around align-self-center">
        <div className="button-with-label width-fit-content align-items-center flex align-self-center">
          <span className="button-label width-fit-content">
            Umów się przez Booksy
          </span>
          <Button
            text={"Booksy"}
            disableImage={true}
            onClick={redirectToBooksy}
            backgroundVersion="dark"
          />
        </div>
        <div className="button-with-label width-fit-content align-items-center flex align-self-center">
          <span className="button-label">Skontaktuj się z nami</span>
          <Button
            text={"Kontakt"}
            disableImage={true}
            onClick={() => redirectTo(AppTab.KONTAKT)}
            backgroundVersion="dark"
          />
        </div>

        <div className="button-with-label width-fit-content align-items-center flex align-self-center">
          <span className="button-label">Jak przygotować się do wizyty</span>
          <Button
            text={"Sprawdź"}
            disableImage={true}
            onClick={() => redirectTo(AppTab.PRZED_WIZYTA)}
            backgroundVersion="dark"
          />
        </div>
      </section>
    </div>
  );
};

export default AppointmentRoadmap;
