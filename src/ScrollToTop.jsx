import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly resets scroll position to the top-left corner
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" 
    });
  }, [pathname]); // Fires every time the URL path changes

  return null;
}