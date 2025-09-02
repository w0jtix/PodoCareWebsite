
export interface HeaderLogoProps {
  className?: string;
}

export function HeaderLogo ({ className="" }: HeaderLogoProps) {
  return (
    <div className={`header-logo-container flex width-fit-content align-items-center justify-center ${className}`}>
      <a href="/" className={`header-logo-link flex align-items-center pointer ${className}`}>
        <img
          className={`header-logo-img border-radius-half pointer ${className}`}
          src="src/assets/podocarelogo.svg"
          alt="PodoCare"
        ></img>
        <h1 className={`header-logo-brandname pointer m-0 nowrap ${className}`}>PodoCare</h1>
      </a>
    </div>
  );
};

export default HeaderLogo;
