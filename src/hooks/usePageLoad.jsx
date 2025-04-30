// usePageLoad.tsx or .jsx
import { useState, useEffect } from "react";

export function usePageLoad() {
  const [pageIsLoading, setPageIsLoading] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleLoad = () => setPageIsLoading(false);

    if (document.readyState === "complete") {
      // If already loaded by the time this runs
      scrollToTop();
      setPageIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return pageIsLoading;
}
