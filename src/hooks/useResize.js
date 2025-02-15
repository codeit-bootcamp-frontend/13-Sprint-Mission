import { useState, useEffect, useMemo } from "react";
import throttle from "lodash.throttle";

export default function useResize(mobile, tablet, desktop) {
  const [showItems, setShowItems] = useState(desktop);

  const updateItemsCount = () => {
    if (window.innerWidth <= 767) {
      setShowItems(mobile);
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
      setShowItems(tablet);
    } else {
      setShowItems(desktop);
    }
  };

  const handleThrottleUpdate = useMemo(
    () => throttle(updateItemsCount, 500),
    []
  );

  useEffect(() => {
    updateItemsCount();
    window.addEventListener("resize", handleThrottleUpdate);
    return () => {
      window.removeEventListener("resize", handleThrottleUpdate);
      handleThrottleUpdate.cancel();
    };
  }, [handleThrottleUpdate, updateItemsCount]);

  return { showItems };
}
