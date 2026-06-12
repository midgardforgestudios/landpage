import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const retryRef = useRef(null);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const tryScroll = (attempts = 20) => {
        if (retryRef.current) clearTimeout(retryRef.current);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (attempts > 0) {
          retryRef.current = setTimeout(() => tryScroll(attempts - 1), 100);
        }
      };
      tryScroll();
      return () => {
        if (retryRef.current) clearTimeout(retryRef.current);
      };
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
