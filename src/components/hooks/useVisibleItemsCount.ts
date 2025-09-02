import { useEffect, useState } from "react";

export type BreakpointConfig = {
    width: number;
    count: number;
}

export function useVisibleItemsCount(
    breakpoints: BreakpointConfig[],
    defaultCount = 4
): number {
    const getCount = (): number => {
        if (typeof window === "undefined") return defaultCount;

        const width = window.innerWidth;

        for(let i = 0; i < breakpoints.length; i++) {
            if(width < breakpoints[i].width) {
                return breakpoints[i].count;
            }
        }

        return defaultCount;
    }

    const [visibleCount, setVisibleCount] = useState<number>(getCount());


    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(getCount());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[]);

    return visibleCount;
}



