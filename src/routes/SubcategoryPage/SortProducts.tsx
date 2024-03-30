import { useContext, useEffect, useState } from "react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrRadial } from "react-icons/gr";
import { GrRadialSelected } from "react-icons/gr";
import { dataSort, sortType } from "./utils";
import { SortDataContext } from "../../context/SortDataContext";

const SortProducts = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectSort, setSelectSort] = useState<string>("Lowest price");

  const { sortedData, setSortedData } = useContext(SortDataContext);

  useEffect(() => {
    if (sortedData) {
      const sortData = dataSort(sortedData, selectSort);
      setSortedData(sortData);
    }
  }, []);

  // setSortedData(sortData);
  const handleSortChange = (sortType: string) => {
    setSelectSort(sortType);
    const sortData = dataSort(sortedData, sortType);
    setSortedData(sortData);

    console.log(sortData);
  };

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
              className={`flex cursor-pointer items-center gap-2 ${selectSort === item.label && "bg-grey-normal"} p-4 hover:bg-grey-normal`}
              onClick={() => handleSortChange(item.label)}
            >
              {selectSort === item.label ? <GrRadialSelected /> : <GrRadial />}
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortProducts;
