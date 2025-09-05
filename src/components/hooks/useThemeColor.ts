import { useEffect } from "react";

export const useThemeColor = (color: string) => {
  useEffect(() => {
    const themeMeta = document.querySelector(
      'meta[name="theme-color"]'
    ) as HTMLMetaElement | null;

    if (!themeMeta) return;

    const prevColor = themeMeta.getAttribute("content") || "#D7D7D7";
    themeMeta.setAttribute("content", color);

    return () => {
      themeMeta.setAttribute("content", prevColor);
    };
  }, [color]);
};