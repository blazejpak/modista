import { useContext, useEffect, useState } from "react";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";

import { SortDataContext } from "../../context/SortDataContext";

import { FaStar } from "react-icons/fa";
import { Product } from "../../utils/types";
import SortButton from "../../components/main/SortButton";

interface FilterDataProps {
  data: Product[];
}

const FilterData = ({ data }: FilterDataProps) => {
  const { setSortedData } = useContext(SortDataContext);

  const [priceOpen, setPriceOpen] = useState<boolean>(false);

  const [filterByPrice, setFilterByPrice] = useState<number>(1);
  const [filterByRate, setFilterByRate] = useState<number>(1);

  const [minValue, setMinValue] = useState<number>(1);
  const [maxValue, setMaxValue] = useState<number>(1000);

  const priceChange = (event: ChangeResult) => {
    setMinValue(event.minValue);
    setMaxValue(event.maxValue);
  };

  const filterData = (data: Product[]) => {
    return data.filter((product) => {
      console.log(product.price > minValue);
      if (product.price < minValue || product.price > maxValue) {
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
  }, [minValue, maxValue, filterByRate]);

  return (
    <div className="relative flex flex-col gap-4 md:flex-row">
      <div className="flex w-[240px] items-center gap-2">
        <SortButton active={priceOpen} setActive={setPriceOpen} />
        {priceOpen && (
          <div className="absolute left-0 top-[150%] z-10 flex h-20 w-44 flex-col items-center gap-2  border bg-grey-lighter">
            <p>
              {minValue} - {maxValue}
            </p>
            <MultiRangeSlider
              min={1}
              max={1000}
              step={1}
              minValue={minValue}
              maxValue={maxValue}
              onInput={(event) => {
                priceChange(event);
              }}
              label={false}
              ruler={false}
              style={{
                border: "none",
                boxShadow: "none",
              }}
              barLeftColor="#FBAF85"
              barInnerColor="#D87D4A"
              barRightColor="#FBAF85"
              thumbLeftColor="black"
              thumbRightColor="black"
              className="w-40"
            />
          </div>
        )}
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
