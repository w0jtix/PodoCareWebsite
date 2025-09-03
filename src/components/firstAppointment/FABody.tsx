import {
  firstAppointmentActivities,
  firstAppointmentEntryText,
  firstAppointmentProcess
} from "../../data/texts";
import FAActivities from "./FAActivities";
import Article from "../Article";
import questionIcon from "../../assets/question.svg"
import infoIcon from "../../assets/info.svg"

export function FABody() {
  return (
    <div className="body-background width-max p-0">
      <div className="body-container flex-column justify-self-center align-items-start height-fit-content">
        <section className="home-body-row height-fit-content width-max flex-column">
          <h1 className="header-h1">Przed wizytą</h1>
        </section>
        <div className="fa-container flex-column width-max">
          <section className="appointment-common art flex-column justify-self-center align-self-center height-fit-content width-70">
            <Article 
                article={firstAppointmentEntryText}
                headerImgSrc={questionIcon}
                headerImgAlt={"Question Mark"}
            />
          </section>
          <section className="appointment-common flex justify-self-center align-self-center height-fit-content width-70 g-15">
            <FAActivities activities={firstAppointmentActivities[0]} />
            <FAActivities activities={firstAppointmentActivities[1]} />
          </section>
          <section className="appointment-common art flex-column justify-self-center align-self-center height-fit-content width-70">
            <Article 
                article={firstAppointmentProcess}
                headerImgSrc={infoIcon}
                headerImgAlt={"Information Mark"}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default FABody;
