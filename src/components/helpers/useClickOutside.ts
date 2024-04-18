import { RefObject, useEffect } from "react";

interface ClickOutsideProps {
  refEl: RefObject<HTMLDivElement>;
  callback: () => void;
}

export const useClickOutside = ({ refEl, callback }: ClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
      if (refEl.current && !refEl.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
};
