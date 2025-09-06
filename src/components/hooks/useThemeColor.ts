import { useEffect } from "react";

export const useThemeColor = (isDark: boolean) => {
  useEffect(() => {
    const statusBarStyle = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]') as HTMLMetaElement | null;
    const themeMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
    
    if (!statusBarStyle || !themeMeta) return;

    if (isDark) {
      statusBarStyle.setAttribute("content", "black-translucent");
      themeMeta.setAttribute("content", "#000000");
      document.body.classList.add("popup-safe-area-dark");
    } else {
      statusBarStyle.setAttribute("content", "default");
      themeMeta.setAttribute("content", "#D7D7D7");
      document.body.classList.remove("popup-safe-area-dark");
    }

    return () => {
      statusBarStyle.setAttribute("content", "default");
      themeMeta.setAttribute("content", "#D7D7D7");
      document.body.classList.remove("popup-safe-area-dark");
    };
  }, [isDark]);
};