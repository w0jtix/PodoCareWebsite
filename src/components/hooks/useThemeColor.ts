import { useEffect } from "react";

export const useThemeColor = (isDark: boolean) => {
  useEffect(() => {
    const updateTheme = () => {
      const statusBarStyle = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]') as HTMLMetaElement | null;
      const themeMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
      
      if (!statusBarStyle || !themeMeta) return;

      if (isDark) {
        statusBarStyle.setAttribute("content", "black-translucent");
        themeMeta.setAttribute("content", "#000000");
      } else {
        statusBarStyle.setAttribute("content", "default");
        themeMeta.setAttribute("content", "#D7D7D7");
      }

      document.documentElement.style.setProperty('--safe-area-bg', isDark ? '#000000' : '#D7D7D7');
      
      const forceUpdate = () => {
        const dummy = document.createElement('div');
        dummy.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;';
        document.body.appendChild(dummy);
        
        dummy.offsetHeight;
        
        document.body.removeChild(dummy);
        
        if (window.scrollY === 0) {
          window.scrollBy(0, 1);
          requestAnimationFrame(() => window.scrollBy(0, -1));
        } else {
          window.scrollBy(0, -1);
          requestAnimationFrame(() => window.scrollBy(0, 1));
        }
      };

      requestAnimationFrame(forceUpdate);
      setTimeout(forceUpdate, 100);
    };

    updateTheme();

    return () => {
      const statusBarStyle = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]') as HTMLMetaElement | null;
      const themeMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
      
      if (statusBarStyle && themeMeta) {
        statusBarStyle.setAttribute("content", "default");
        themeMeta.setAttribute("content", "#D7D7D7");
        document.documentElement.style.setProperty('--safe-area-bg', '#D7D7D7');
      }
    };
  }, [isDark]);
};