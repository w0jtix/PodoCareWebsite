import welcomeText from "../../data/texts";
import bouncingArrow from "../../assets/bouncing_arrow.svg"

export function HomeAbout() {
  return (
    <section className="welcome flex-column justify-center align-self-center width-80">
      <h1 className="welcome-main-title">{welcomeText.title1}</h1>
      <div className="welcome-container flex justify-center">
        <div className="welcome-shape">
          <h1 className="welcome-title flex absolute justify-center align-items-center text-align-center">
            {welcomeText.title2}
          </h1>
        </div>
        <div className="welcome-text relative flex-column align-items-center justify-center">
          <h2 className="welcome-text-h2 m-0">{welcomeText.line1}</h2>

          <h2 className="welcome-text-h2 m-0">{welcomeText.line2}</h2>

          <h2 className="welcome-text-h2 m-0">{welcomeText.line3}</h2>

          <img
            className="bouncing-arrow"
            src={bouncingArrow}
            alt="Bouncing Arrow"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
