import { useState, useEffect, useRef } from "react";

export function useAutoClose(initialState) {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null);

  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e?.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, []);

  return { ref, isOpen, setIsOpen };
}
