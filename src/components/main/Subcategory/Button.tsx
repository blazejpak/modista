import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="flex h-10 w-full max-w-[400px] cursor-pointer items-center justify-center rounded bg-gold-dark p-4 text-white transition-all hover:bg-gold-lighter active:bg-gold-dark"
    >
      {children}
    </button>
  );
};

export default Button;
