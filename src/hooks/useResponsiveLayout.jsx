import { useState, useEffect } from "react";

export const BREAK_POINTS = {
  tablet: 768,
  desktop: 1280,
};

function useResponsiveLayout({ onLayoutChange }) {
  const [layoutType, setLayoutType] = useState(
    window.innerWidth < BREAK_POINTS.tablet
      ? "mobile"
      : window.innerWidth < BREAK_POINTS.desktop
        ? "tablet"
        : "desktop",
  );

  useEffect(() => {
    const updateLayoutType = () => {
      const currentWidth = window.innerWidth;
      let newLayoutType;

      if (currentWidth < BREAK_POINTS.tablet) {
        newLayoutType = "mobile";
      } else if (currentWidth < BREAK_POINTS.desktop) {
        newLayoutType = "tablet";
      } else {
        newLayoutType = "desktop";
      }

      if (newLayoutType !== layoutType) {
        setLayoutType(newLayoutType);
        if (onLayoutChange) {
          onLayoutChange(newLayoutType);
        }
      }
    };

    updateLayoutType();
    window.addEventListener("resize", updateItemsToShow);

    return () => window.removeEventListener("resize", updateItemsToShow);
  }, [layoutType, onLayoutChange]);

  return { layoutType };
}

export default useResponsiveLayout;
