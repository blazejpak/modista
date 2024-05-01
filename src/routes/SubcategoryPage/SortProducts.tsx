import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { GrRadial } from "react-icons/gr";
import { GrRadialSelected } from "react-icons/gr";

import { SortDataContext } from "../../context/SortDataContext";
import { dataSort } from "../../utils/helpers";
import { sortType } from "../../utils/variables";
import { useClickOutside } from "../../components/helpers/useClickOutside";
import SortButton from "../../components/main/Subcategory/SortButton";

const SortProducts = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const param = useParams();

  const { sortedData, setSortedData, typeSort, setTypeSort } =
    useContext(SortDataContext);

  const handleSortChange = (sortType: string) => {
    setTypeSort(sortType);
    const sortData = dataSort(sortedData, sortType);

    setSortedData(sortData);
  };

  useEffect(() => {
    setTypeSort("Lowest price");
  }, [param]);

  const sortModalRef = useRef<HTMLDivElement>(null);
  useClickOutside({ refEl: sortModalRef, callback: () => setIsActive(false) });
  return (
    <div className="relative z-20" ref={sortModalRef}>
      <SortButton active={isActive} setActive={setIsActive} label="Sort By" />
      {isActive && (
        <ul className="absolute left-0 top-[150%] z-10 flex flex-col gap-1 border bg-grey-lighter  text-sm">
          {sortType &&
            sortType.map((item) => (
              <li
                key={item.id}
                className={`flex cursor-pointer items-center  gap-2 ${typeSort === item.label && "bg-grey-normal"} p-4 hover:bg-grey-normal`}
                onClick={() => handleSortChange(item.label)}
              >
                {typeSort === item.label ? <GrRadialSelected /> : <GrRadial />}
                <p>{item.label}</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SortProducts;
