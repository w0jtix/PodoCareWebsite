import { useEffect } from "react";

export const usePopupBackground = (backgroundColor = 'rgba(0, 0, 0, 0.75)') => {
  useEffect(() => {
    const bodyElement = document.body;
    if (bodyElement) {
      bodyElement.classList.add('popup-background-override');
      
      return () => {
        bodyElement.classList.remove('popup-background-override');
      };
    }
  }, []);
};