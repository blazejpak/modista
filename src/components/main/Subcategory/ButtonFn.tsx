type ButtonFnProps = {
  label: string;
  onClick: () => void;
};

const ButtonFn = ({ label, onClick }: ButtonFnProps) => {
  return (
    <div
      onClick={onClick}
      className="flex h-10 w-24 cursor-pointer items-center justify-center rounded bg-gold-dark p-4 text-white transition-all hover:bg-gold-lighter active:bg-gold-dark"
    >
      {label}
    </div>
  );
};

export default ButtonFn;
