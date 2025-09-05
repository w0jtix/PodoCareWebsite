import { useEffect } from "react";

export const useThemeColor = (color: string) => {
  useEffect(() => {
  const bodyElement = document.body;
  const themeMeta = document.querySelector(
    'meta[name="theme-color"]'
  ) as HTMLMetaElement | null;

  if (!bodyElement || !themeMeta) return;

  // Apply popup color & class after next paint
  requestAnimationFrame(() => {
    bodyElement.classList.add("popup-background-override");
    themeMeta.setAttribute("content", color);
  });

  return () => {
    bodyElement.classList.remove("popup-background-override");
    themeMeta.setAttribute("content", "#D7D7D7");
  };
}, [color]);
};