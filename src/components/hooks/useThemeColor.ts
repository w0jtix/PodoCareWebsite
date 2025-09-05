import { useEffect } from "react";

export const useThemeColor = (color?: string) => {
  useEffect(() => {
    if (!color) return;

    const bodyElement = document.body;
    const themeMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
    if (!bodyElement || !themeMeta) return;

    bodyElement.classList.add("popup-background-override");
    themeMeta.setAttribute("content", color);

    return () => {
      bodyElement.classList.remove("popup-background-override");
      themeMeta.setAttribute("content", "#D7D7D7");
    };
  }, [color]);
};