import { useState } from "react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrRadial } from "react-icons/gr";
import { GrRadialSelected } from "react-icons/gr";

type SortType = {
  label: string;
  id: number;
};

const sortType: SortType[] = [
  { label: "Lowest price", id: 0 },
  { label: "Highest price", id: 1 },
  { label: "Discount", id: 2 },
  { label: "Name", id: 3 },
];

const SortProducts = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectSort, setSelectSort] = useState<number>(0);

  return (
    <div className="relative">
      <div
        className={`flex w-fit cursor-pointer items-center gap-2 hover:text-gold-lighter  ${isActive && "text-gold-dark"} `}
        onClick={() => setIsActive((prevState) => !prevState)}
      >
        <p className="font-bold ">Sort by</p>
        {isActive ? (
          <MdOutlineKeyboardArrowDown className="rotate-180" size={24} />
        ) : (
          <MdOutlineKeyboardArrowDown size={24} />
        )}
      </div>
      {isActive && (
        <ul className="absolute left-0 top-[150%] z-10 flex flex-col gap-1 border bg-grey-lighter  text-sm">
          {sortType.map((item) => (
            <li
              key={item.id}
              className={`flex cursor-pointer items-center gap-2 ${selectSort === item.id && "bg-grey-normal"} p-4 hover:bg-grey-normal`}
              onClick={() => setSelectSort(item.id)}
            >
              {selectSort === item.id ? <GrRadialSelected /> : <GrRadial />}
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortProducts;
