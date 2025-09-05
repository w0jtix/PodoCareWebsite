import { useEffect } from "react";

export const usePopupBackground = (backgroundColor = "#000000") => {
  useEffect(() => {
    const bodyElement = document.body;
    const themeMeta = document.querySelector(
      'meta[name="theme-color"]'
    ) as HTMLMetaElement | null;

    if (bodyElement) {
      bodyElement.classList.add("popup-background-override");
    }
    if (themeMeta) {
      const prevColor = themeMeta.getAttribute("content") || "#D7D7D7";
      themeMeta.setAttribute("content", backgroundColor);

      return () => {
        bodyElement?.classList.remove("popup-background-override");
        themeMeta.setAttribute("content", prevColor);
      };
    }

    return () => {
      bodyElement?.classList.remove("popup-background-override");
    };
  }, [backgroundColor]);
};