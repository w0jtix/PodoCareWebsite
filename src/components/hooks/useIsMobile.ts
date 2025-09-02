import { useState, useEffect } from "react";

export function useIsMobile(maxWidth = 1024): boolean {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < maxWidth;
  });

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < maxWidth);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [maxWidth]);

  return isMobile;
}