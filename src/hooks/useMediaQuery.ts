import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [condition, setcondition] = useState<boolean>(false);
  useEffect(() => {
    const mediaQueryList: MediaQueryList = window.matchMedia(query);
    const handler = (): void => {
      setcondition(mediaQueryList.matches);
    };
    handler();
    mediaQueryList.addEventListener("change", handler);
    return () => {
      mediaQueryList.removeEventListener("change", handler);
    };
  }, []);
  return condition;
};

export default useMediaQuery;
