import Button from "../components/Button";
import { redirectTo } from "../components/utlis/navigation";
import { useNavigate } from "react-router-dom";
import { AppTab } from "../data/appTabs";
import HeaderLogo from "../components/HeaderLogo";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container width-fit-content flex-column justify-center justify-self-center">
      <h1 className="header-h1 m-0 not-found">404 - Nie znaleziono strony</h1>
      <div className="not-found-content flex-column align-items-center">
        <p className="welcome-text-h2 m-0">Strona nie istnieje.</p>
        <div className="not-found-action width-max flex align-items-center space-around">
            <HeaderLogo />
        <Button
          disableImage={true}
          text={"Strona Główna"}
          onClick={() => redirectTo(AppTab.STRONA_GLOWNA, navigate)}
        />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
