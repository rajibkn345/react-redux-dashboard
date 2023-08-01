import { useState, useRef, useEffect } from "react";

const usePopupControl = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickoutside = (e) => {
    // console.log(e.target);
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickoutside);
    return () => {
      document.removeEventListener("click", handleClickoutside);
    };
  }, []);

  return { isOpen, toggleMenu, dropdownRef };
};

export default usePopupControl;
