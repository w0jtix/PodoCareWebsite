import { Alert } from '../data/alert'
import { useEffect, useState } from "react";
import { useIsMobile } from './hooks/useIsMobile';

export function CustomAlert (props: Alert) {
  const [topOffset, setTopOffset] = useState(20);
  const isMobile = useIsMobile();

  useEffect(() => {
    const updateOffset = () => {
      if (window.visualViewport) {
        setTopOffset(20 + window.visualViewport.offsetTop); 
      }
    };
    window.visualViewport?.addEventListener("resize", updateOffset);
    window.visualViewport?.addEventListener("scroll", updateOffset);
    updateOffset();
    return () => {
      window.visualViewport?.removeEventListener("resize", updateOffset);
      window.visualViewport?.removeEventListener("scroll", updateOffset);
    };
  }, []);

  return (
    <div className={`custom-alert custom-alert-${props.variant} flex justify-center align-items-center ${isMobile? "mobile-widht" : ""}`}
    style={{ top: `${topOffset}px` }}>
        <a className="alert-message flex-grow justify-center">{props.message}</a>
    </div>
  )
}

export default CustomAlert
