import { AppTab } from "../../data/appTabs";
import { redirectTo } from "../utlis/navigation";
import yellowDot from "../../assets/yellow-dot.svg"
import { useNavigate } from "react-router-dom";

export interface MenuItemProps {
  name: AppTab;
  page: AppTab;
  className?: string;
}

export function MenuItem({ name, page, className="" }: MenuItemProps) {
  const navigate = useNavigate();
  const isSelected = page === name;

  return (
    <div
      className={`menu-item-div relative inline-flex align-items-center justify-center height-fit-content ${
        isSelected ? "selected" : ""
      } ${className}`}
    >
      <button 
        className={`menu-button flex relative width-auto border-none pointer ${className} ${isSelected ? "selected" : ""}`}
        onClick={() => redirectTo(name, navigate)}
        >
          <img className={`yellow-dot ${className} ${isSelected? "selected" : ""}` } src={yellowDot} alt="Yellow Dot" ></img>
        <span
          className={`menu-button-text nowrap ${isSelected ? "selected" : ""} ${className}`}
        >
          {name}
        </span>
        
      </button>
    </div>
  );
}

export default MenuItem;