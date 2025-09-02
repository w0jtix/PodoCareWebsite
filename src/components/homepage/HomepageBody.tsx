import AppointmentRoadmap from "./appointment-roadmap/AppointmentRoadmap";
import CardsContainer from "./CardsContainer";
import { useState } from "react";
import { GradualSpacing } from "../GradualSpacing";
import HomeAbout from "./HomeAbout";
import Faq from "./Faq";
import HomeCarousel from "./HomeCarousel";

export function HomepageBody() {
  const [showTitle, setShowTitle] = useState(false);

  const handleTriggerHeaderAnimation = () => {
    setShowTitle(true);
  };

  return (
    <div className="body-background width-max p-0">
      <div className="body-container flex-column justify-self-center align-items-start height-fit-content">
        <section className="home-body-row entry width-max flex-column">
          
          <div className="home-entry-title-space">
            {showTitle && (
             <GradualSpacing 
              text="Witaj w PodoCare!"
             />
            )}
          </div>
          <HomeCarousel onTriggerHeaderAnimation={handleTriggerHeaderAnimation} />         
        </section>
        <HomeAbout />
        <section className="flex justify-center width-max">
          <AppointmentRoadmap />
        </section>
        <CardsContainer />
        <Faq />
      </div>
    </div>
  );
}

export default HomepageBody;
