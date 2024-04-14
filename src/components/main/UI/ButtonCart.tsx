import { ReactNode } from "react";

type ButtonCartProps = {
  onClick: () => void;
  children: ReactNode;
};

const ButtonCart = ({ onClick, children }: ButtonCartProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full max-w-[600px] self-center rounded-2xl bg-gold-dark p-4 text-center text-2xl font-bold text-white transition-all hover:bg-gold-lighter active:bg-gold-dark"
    >
      {children}
    </button>
  );
};

export default ButtonCart;
