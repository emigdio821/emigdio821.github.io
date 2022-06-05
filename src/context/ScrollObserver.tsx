import {
  createContext,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";

interface ScrollValue {
  scrollY: number;
}

interface ScrollObserverProps {
  children: React.ReactNode;
}

export const ScrollContext = createContext<ScrollValue>({ scrollY: 0 });

export function ScrollObserver({ children }: ScrollObserverProps) {
  const [scrollY, setScrollY] = useState(0);
  const scrollYMem = useMemo(
    () => ({
      scrollY,
    }),
    [scrollY],
  );

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
    <ScrollContext.Provider value={scrollYMem}>
      {children}
    </ScrollContext.Provider>
  );
}
