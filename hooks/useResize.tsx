import { useState, useEffect, useMemo, useCallback } from "react";
import debounce from "lodash.debounce";

export default function useResize(
  mobile: number,
  tablet: number,
  desktop: number
) {
  const [showItems, setShowItems] = useState(desktop);

  const updateItemsCount = useCallback(() => {
    if (window.innerWidth <= 740) {
      setShowItems(mobile);
    } else if (window.innerWidth >= 741 && window.innerWidth <= 1023) {
      setShowItems(tablet);
    } else {
      setShowItems(desktop);
    }
  }, [desktop, tablet, mobile]);

  const handleThrottleUpdate = useMemo(
    () => debounce(updateItemsCount, 200),
    [updateItemsCount]
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
