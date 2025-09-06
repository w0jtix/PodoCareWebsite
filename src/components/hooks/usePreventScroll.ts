import { useEffect } from "react";

export const usePreventScroll = (popupOpen: boolean) => {
  useEffect(() => {
    const body = document.body;

    if (popupOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }

    return () => {
      body.style.overflow = "";
    };
  }, [popupOpen]);
};