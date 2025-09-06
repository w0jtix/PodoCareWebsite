import { useEffect } from "react";
export const usePreventScroll = (popupOpen: boolean) => {
    useEffect(() => {
  const body = document.body;
  if (popupOpen) {
    const scrollY = window.scrollY;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";
  } else {
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    body.style.overflow = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }
}, [popupOpen]);
}