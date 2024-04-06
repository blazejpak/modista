import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface SortButtonProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const SortButton = ({ active, setActive }: SortButtonProps) => {
  return (
    <div
      className={`flex w-fit cursor-pointer items-center gap-2 hover:text-gold-lighter  ${active && "text-gold-dark"} `}
      onClick={() => setActive((prevState) => !prevState)}
    >
      <p className="font-bold ">Price</p>
      {active ? (
        <MdOutlineKeyboardArrowDown className="rotate-180" size={24} />
      ) : (
        <MdOutlineKeyboardArrowDown size={24} />
      )}
    </div>
  );
};

export default SortButton;
