import Button from "../Button";
import { PriceListItem } from "../../data/priceList";
import { redirectToBooksy } from "../utlis/navigation";
import { formatTime } from "../utlis/serviceTime";
import { formatPrice } from "../utlis/servicePrice";

export interface SDInfoCardProps {
  selectedService: PriceListItem;
}

export function SDInfoCard({ selectedService }: SDInfoCardProps) {

  return (
    <div className="sd-info-card flex-column height-fit-content">
      <div className="sd-info-section flex-column">
        <div className="flex space-between align-items-center">
          <span className="sd-info-label">Przybliżony czas trwania:</span>

          <div className="service-price sd flex align-items-center justify-center">
            <span className="service-price-text sd">
              {selectedService.name.includes("VIP") ? "-": formatTime(selectedService.duration)}
            </span>
          </div>
        </div>
        <div className="flex space-between align-items-center">
          <span className="sd-info-label">Koszt usługi:</span>

          <div className="service-price sd flex align-items-center justify-center">
            <span className="service-price-text sd">
              {formatPrice(selectedService)}
            </span>
          </div>
        </div>
      </div>
      <Button
        text={"Umów wizytę"}
        onClick={redirectToBooksy}
        disableImage={true}
        shiny={true}
        footer={true}
        customClassName="justify-self-center"
      />
    </div>
  );
}

export default SDInfoCard;
