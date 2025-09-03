import logo from "../assets/podocarelogo.svg"

export interface ContainerLogoProps {
    className?: string;
}
export function ContainerLogo ({ className="" }) {
  return (
    <section className={`card-container-logo flex justify-center align-items-center absolute width-auto height-auto ${className}`}>
        <div className="div-logo flex justify-center align-items-center border-radius-half">
          <img
            className="header-logo-img border-radius-half"
            src={logo}
            alt="PodoCare"
          />
        </div>
      </section>
  )
}

export default ContainerLogo
