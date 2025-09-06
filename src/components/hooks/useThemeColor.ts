import { useEffect } from "react";

export const useThemeColor = (color?: string) => {
  useEffect(() => {
    if (!color) return;

    const statusBarStyle = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]') as HTMLMetaElement | null;
    const themeMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
    
    if (!statusBarStyle || !themeMeta) return;

    const originalStatusBar = statusBarStyle.getAttribute("content") || "black-translucent";
    const originalTheme = themeMeta.getAttribute("content") || "#D7D7D7";
    const originalBodyBg = document.body.style.backgroundColor;

    statusBarStyle.setAttribute("content", "black-translucent");
    themeMeta.setAttribute("content", color);
    
    document.body.style.backgroundColor = color;
    
    document.documentElement.style.backgroundColor = color;

    return () => {
      statusBarStyle.setAttribute("content", originalStatusBar);
      themeMeta.setAttribute("content", originalTheme);
      document.body.style.backgroundColor = originalBodyBg;
      document.documentElement.style.backgroundColor = "";
    };
  }, [color]);
};