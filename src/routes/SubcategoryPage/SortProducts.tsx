import { useContext, useEffect, useRef, useState } from "react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrRadial } from "react-icons/gr";
import { GrRadialSelected } from "react-icons/gr";
import { SortDataContext } from "../../context/SortDataContext";
import { dataSort } from "../../utils/helpers";
import { sortType } from "../../utils/variables";
import { Product } from "../../utils/types";
import ClickOutside from "../../components/helpers/ClickOutside";

const SortProducts = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  // TODO type
  const sortModalRef = useRef<any>();

  const { sortedData, setSortedData, typeSort, setTypeSort } =
    useContext(SortDataContext);

  const handleSortChange = (sortType: string) => {
    setTypeSort(sortType);
    const sortData = dataSort(sortedData, sortType) as Product[];
    setSortedData(sortData);
  };

  useEffect(() => {
    setTypeSort("Lowest price");
  }, []);

  return (
    <div className="relative z-20" ref={sortModalRef}>
      <ClickOutside
        refEl={sortModalRef}
        close={setIsActive}
        isActive={isActive}
      >
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
            {sortType &&
              sortType.map((item) => (
                <li
                  key={item.id}
                  className={`flex cursor-pointer items-center gap-2 ${typeSort === item.label && "bg-grey-normal"} p-4 hover:bg-grey-normal`}
                  onClick={() => handleSortChange(item.label)}
                >
                  {typeSort === item.label ? (
                    <GrRadialSelected />
                  ) : (
                    <GrRadial />
                  )}
                  <p>{item.label}</p>
                </li>
              ))}
          </ul>
        )}
      </ClickOutside>
    </div>
  );
};

export default SortProducts;
