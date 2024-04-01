import { useContext, useEffect, useState } from "react";
import { SortDataContext } from "../../context/SortDataContext";

import { FaStar } from "react-icons/fa";

const FilterData = ({ data }: any) => {
  const { setSortedData } = useContext(SortDataContext);

  const [filterByPrice, setFilterByPrice] = useState<number>(1);
  const [filterByRate, setFilterByRate] = useState<number>(1);

  const filterData = (data: any[]) => {
    return data.filter((product) => {
      if (filterByPrice !== null && product.price < filterByPrice) {
        return false;
      }
      if (filterByRate !== null && product.rating < filterByRate) {
        return false;
      }
      return true;
    });
  };

  useEffect(() => {
    const newData = [...data];
    const filteredData = filterData(newData);

    setSortedData(filteredData);
  }, [filterByPrice, filterByRate]);

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="flex w-[240px] items-center gap-2">
        <label>Price:</label>
        <input
          type="range"
          value={filterByPrice || ""}
          onChange={(e) => setFilterByPrice(Number(e.target.value))}
          min={1}
          max={100}
          className="relative "
        />
        <p className="font-bold">{`> $${filterByPrice}`}</p>
      </div>
      <div className="flex w-[240px] items-center gap-2">
        <label>Rating:</label>
        <input
          type="range"
          value={filterByRate || 1}
          onChange={(e) => setFilterByRate(Number(e.target.value))}
          min={1}
          max={5}
          step={0.1}
          className="relative "
        />
        <div className="flex items-center gap-1">
          <p className="font-bold">
            <span>{">"}</span>
            {filterByRate}
          </p>
          <FaStar color="gold" size={24} />
        </div>
      </div>
    </div>
  );
};

export default FilterData;
