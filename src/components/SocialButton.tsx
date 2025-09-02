import { AppTab } from "@/data/appTabs";
import { redirectTo } from "./utlis/navigation";

export interface SocialButtonProps {
  src: string;
  alt: string;
  tab: AppTab;
  className?: string;
}

export function SocialButton( { src, alt, tab, className="" }: SocialButtonProps) {
  return (
    <div 
    className={`social-button border-none align-items-center pointer ${className}`}
    onClick={() => redirectTo(tab)}
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
