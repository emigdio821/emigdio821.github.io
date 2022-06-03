import { FC, createContext, useCallback, useEffect, useState } from "react";

interface ScrollValue {
  scrollY: number;
}

interface ScrollObserverProps {
  children: React.ReactNode;
}

export const ScrollContext = createContext<ScrollValue>({ scrollY: 0 });

export const ScrollObserver: FC<ScrollObserverProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};
