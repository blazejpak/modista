import { ReactNode } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  style: string | null;
};

const Button = ({ children, style, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`flex h-10 w-full max-w-[400px]  cursor-pointer items-center justify-center rounded bg-gold-dark p-4 text-xl font-bold text-white transition-all hover:bg-gold-lighter active:bg-gold-dark ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
