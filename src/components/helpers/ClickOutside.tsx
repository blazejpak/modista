import { ReactNode, useEffect } from "react";

interface ClickOutsideProps {
  children: ReactNode;
  refEl: any;
  isActive: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClickOutside = ({
  children,
  refEl,
  close,
  isActive,
}: ClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refEl.current && !refEl.current.contains(event.target)) {
        close(false);
      }
    };

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, close]);

  return <div>{children}</div>;
};

export default ClickOutside;
