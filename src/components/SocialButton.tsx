import { AppTab } from "@/data/appTabs";
import { redirectTo } from "./utlis/navigation";
import { useNavigate } from "react-router-dom";

export interface SocialButtonProps {
  src: string;
  alt: string;
  tab: AppTab;
  className?: string;
}

export function SocialButton( { src, alt, tab, className="" }: SocialButtonProps) {
  const navigate = useNavigate();
  return (
    <div 
    className={`social-button border-none align-items-center pointer ${className}`}
    onClick={() => redirectTo(tab, navigate)}
    >
        <img
            className={`sm-icon ${className}`}
            src={src}
            alt={alt}
        ></img>      
    </div>
  )
}

export default SocialButton 
