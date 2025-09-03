import socials from "../../data/socials";
import SocialButton from "../SocialButton";

export interface HeaderSocialsProps {
  className?: string;
}

export function HeaderSocials({ className = "" }: HeaderSocialsProps) {
  return (
    <div
      className={`header-socials-container flex-column justify-center ${className}`}
    >
      {socials.map((medium) => (
        <SocialButton
          key={medium.name}
          src={medium.src}
          alt={medium.alt}
          tab={medium.name}
          className={className}
        />
      ))}
    </div>
  );
}

export default HeaderSocials;
