import { useEffect } from "react";

export const useThemeColor = (color?: string) => {
  useEffect(() => {
    if (!color) return;

    const statusBarStyle = document.querySelector('meta[name=apple-mobile-web-app-status-bar-style]') as HTMLMetaElement | null;
    const themeMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
    if (!statusBarStyle|| !themeMeta) return;

    statusBarStyle.setAttribute("content", "black");
    themeMeta.setAttribute("content", color);

    return () => {
      statusBarStyle.setAttribute("content", "black-translucent");
      themeMeta.setAttribute("content", "#D7D7D7");
    };
  }, [color]);
};