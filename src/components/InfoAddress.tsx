import { ADDRESS } from "../data/header-info";
import { callTo, googleMapsNavigate } from "./utlis/navigation";
import homeIcon from "../assets/home.svg"

export interface InfoAddressProps {
  className?: string;
}

export function InfoAddress ({ className="" }: InfoAddressProps) {
  return (
    <section className="info-address flex">
        <div className="info-oh-img-bg flex justify-center">
          <img
            className="info-oh-img align-self-center"
            src={homeIcon}
            alt="Home"
          ></img>
        </div>
        <div className="info-address-details gap flex-column">
          <div onClick={googleMapsNavigate}>
          <span className={`info-add-span nowrap pointer ${className}`}>{ADDRESS.street}</span>
          </div>
          <div onClick={googleMapsNavigate}>
          <span className={`info-add-span nowrap pointer ${className}`}>{`${ADDRESS.zip} ${ADDRESS.city}`}</span>
          </div>
          <div onClick={callTo}>
          <span className={`info-add-span nowrap pointer  ${className}`}>{`tel. ${ADDRESS.phone}`}</span>
          </div>
        </div>
      </section>
  )
}

export default InfoAddress
