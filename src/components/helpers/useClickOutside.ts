import { useEffect } from "react";

interface ClickOutsideProps {
    refEl: any;
    callback: () => void;
}



export const useClickOutside = ({
    refEl,
    callback }: ClickOutsideProps) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (refEl.current && !refEl.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [close]);
}