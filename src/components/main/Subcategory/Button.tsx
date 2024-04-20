import { ReactNode } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`flex h-10 w-full max-w-[400px] cursor-pointer  items-center justify-center rounded bg-gold-dark p-4 text-xl font-bold text-white transition-all hover:bg-gold-lighter active:bg-gold-dark ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
