import { useContext, useEffect, useRef, useState } from "react";

import { SortDataContext } from "../../context/SortDataContext";

import { FaStar } from "react-icons/fa";
import { Product } from "../../utils/types";
import ClickOutside from "../../components/helpers/ClickOutside";

import SortButton from "../../components/main/Subcategory/SortButton";
import ButtonFn from "../../components/main/Subcategory/ButtonFn";

interface FilterDataProps {
  data: Product[];
}

const FilterData = ({ data }: FilterDataProps) => {
  const { setSortedData } = useContext(SortDataContext);

  const [priceOpen, setPriceOpen] = useState<boolean>(false);
  const [ratingOpen, setRatingOpen] = useState<boolean>(false);

  // TODO ref type
  const priceDivRef = useRef<any>();
  const ratingDivRef = useRef<any>();

  const [price, setPrice] = useState<{ min: number; max: number }>({
    min: 1,
    max: 1000,
  });

  const [filterByRate, setFilterByRate] = useState<number>(1);

  const filterData = (data: Product[]) => {
    return data.filter((product) => {
      if (product.price < price.min || product.price > price.max) {
        return false;
      }
      if (filterByRate !== null && product.rating < filterByRate) {
        return false;
      }
      return true;
    });
  };

  const savePriceSubmit = () => {
    const newData = [...data];
    const filteredData = filterData(newData);

    setSortedData(filteredData);
  };

  // TODO type on event
  const ratingChange = (e: any) => {
    setFilterByRate(Number(e.target.value));
    const newData = [...data];
    const filteredData = filterData(newData);

    setSortedData(filteredData);
  };

  return (
    <div className="relative flex  gap-8 ">
      <ClickOutside
        close={setPriceOpen}
        isActive={priceOpen}
        refEl={priceDivRef}
      >
        <div className="flex  items-center gap-2" ref={priceDivRef}>
          <SortButton
            active={priceOpen}
            setActive={setPriceOpen}
            label="Price"
          />
          {priceOpen && (
            <div className="absolute  top-[150%] z-10 flex translate-x-[-10%] flex-col items-center gap-2 border  bg-grey-lighter p-4">
              <div className="flex  gap-3">
                <div className="relative h-10">
                  <input
                    className="hide-arrows h-10 w-24 cursor-pointer rounded border pr-4 text-right outline-none sm:w-40"
                    type="number"
                    placeholder="1"
                    min={1}
                    max={1000}
                    value={price.min}
                    onChange={(e) =>
                      setPrice((prevState) => ({
                        ...prevState,
                        min: Number(e.target.value),
                      }))
                    }
                  />
                  <p className="absolute left-4 top-2 opacity-50">$</p>
                </div>
                <div className="relative h-10">
                  <input
                    className="hide-arrows h-10 w-24 cursor-pointer rounded border pr-4 text-right outline-none sm:w-40"
                    type="number"
                    placeholder="1000"
                    min={1}
                    max={1000}
                    value={price.max}
                    onChange={ratingChange}
                  />
                  <p className="absolute left-4 top-2 opacity-50">$</p>
                </div>
              </div>
              <ButtonFn onClick={savePriceSubmit} label="Save" />
            </div>
          )}
        </div>
      </ClickOutside>

      <ClickOutside
        close={setRatingOpen}
        isActive={ratingOpen}
        refEl={ratingDivRef}
      >
        <div className="flex  items-center gap-2" ref={ratingDivRef}>
          <SortButton
            active={ratingOpen}
            setActive={setRatingOpen}
            label="Rating"
          />
          {ratingOpen && (
            <div className="absolute top-[150%] z-10 flex translate-x-[-50%] flex-col items-center gap-2 border bg-grey-lighter  p-4 sm:translate-x-[0]">
              <input
                type="range"
                value={filterByRate || 1}
                onChange={(e) => {
                  setFilterByRate(Number(e.target.value));
                  const newData = [...data];
                  const filteredData = filterData(newData);

                  setSortedData(filteredData);
                }}
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
          )}
        </div>
      </ClickOutside>
    </div>
  );
};

export default FilterData;
