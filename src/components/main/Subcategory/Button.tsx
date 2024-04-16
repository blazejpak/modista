import { ReactElement } from "react";

type ButtonProps = {
  children: ReactElement;
  props: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="flex h-10 w-24 cursor-pointer items-center justify-center rounded bg-gold-dark p-4 text-white transition-all hover:bg-gold-lighter active:bg-gold-dark"
    >
      {children}
    </button>
  );
};

export default Button;
