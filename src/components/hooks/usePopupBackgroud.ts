import { useEffect } from "react";

export const usePopupBackground = (backgroundColor = 'rgba(0, 0, 0, 0.75)') => {
  useEffect(() => {
    const bodyElement = document.querySelector('.body');
    if (bodyElement) {
      const originalBackgroundColor = (bodyElement as HTMLElement).style.backgroundColor;
      
      (bodyElement as HTMLElement).style.backgroundColor = backgroundColor;
      
      return () => {
        (bodyElement as HTMLElement).style.backgroundColor = originalBackgroundColor;
      };
    }
  }, [backgroundColor]);
};