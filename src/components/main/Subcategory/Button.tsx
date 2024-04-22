<<<<<<< HEAD
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
=======
import { ReactNode } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
>>>>>>> 5b2eb40629bbf2f2e609b63edd043e826ea46c9c
  children: ReactNode;
};

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
<<<<<<< HEAD
      className="flex h-10 w-full max-w-[400px] cursor-pointer items-center justify-center rounded bg-gold-dark p-4 text-white transition-all hover:bg-gold-lighter active:bg-gold-dark"
=======
      className={`flex h-10 w-full max-w-[400px] cursor-pointer  items-center justify-center rounded bg-gold-dark p-4 text-xl font-bold text-white transition-all hover:bg-gold-lighter active:bg-gold-dark ${className}`}
>>>>>>> 5b2eb40629bbf2f2e609b63edd043e826ea46c9c
    >
      {children}
    </button>
  );
};

export default Button;
