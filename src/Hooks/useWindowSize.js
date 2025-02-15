import { useState, useEffect } from "react";
import throttle from "lodash.throttle";
export default function useWindowSize() {
  const [deviceType, setDeviceType] = useState("desktop");
  //
  useEffect(() => {
    const handleResize = throttle(() => {
      if (window.matchMedia("(max-width: 375px)").matches) {
        setDeviceType("mobile");
        return;
      }
      if (window.matchMedia("(max-width: 768px)").matches) {
        setDeviceType("tablet");
        return;
      }
      setDeviceType("desktop");
    }, 2000);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return deviceType;
}
