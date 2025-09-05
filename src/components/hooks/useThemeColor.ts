import { useEffect } from "react";

export const useThemeColor = (color: string) => {
  useEffect(() => {
  const bodyElement = document.body;
  const themeMeta = document.querySelector(
    'meta[name="theme-color"]'
  ) as HTMLMetaElement | null;

  if (!themeMeta) return;

  themeMeta.setAttribute("content", color);
  bodyElement?.classList.add("popup-background-override");

  return () => {
    bodyElement?.classList.remove("popup-background-override");
    themeMeta.setAttribute("content", "#D7D7D7");
  };
}, [color]);
};