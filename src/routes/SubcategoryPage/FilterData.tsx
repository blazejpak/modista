import { ChangeEvent, useContext, useEffect, useState } from "react";

import { SortDataContext } from "../../context/SortDataContext";

import { Product } from "../../utils/types";

import RatingProducts from "./RatingProducts";
import FilterByPrice from "./FilterByPrice";
import { dataSort } from "../../utils/helpers";

interface FilterDataProps {
  data: Product[];
  currentLink: string;
}

const FilterData = ({ data, currentLink }: FilterDataProps) => {
  console.log(data);
  if (!data) return null;

  const { setSortedData, typeSort } = useContext(SortDataContext);

  const [priceOpen, setPriceOpen] = useState(false);
  const [ratingOpen, setRatingOpen] = useState(false);

  const [price, setPrice] = useState({
    min: 1,
    max: 1000,
  });
  const [filterByRate, setFilterByRate] = useState(1);

  useEffect(() => {
    setFilterByRate(1);
    setPrice({ min: 1, max: 1000 });
  }, [currentLink]);

  const changePriceInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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

  const ratingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterByRate(Number(e.target.value));
  };

  useEffect(() => {
    const newData = [...data];
    const filteredData = filterData(newData);

    const sortData = dataSort(filteredData, typeSort) as Product[];

    setSortedData(sortData);
  }, [filterByRate]);

  const savePriceSubmit = () => {
    if (price.min > price.max) {
      setPrice((prev) => ({ ...prev, min: prev.max }));
    }
    const newData = [...data];
    const filteredData = filterData(newData);

    setSortedData(filteredData);
  };

  return (
    <div className="relative flex  gap-8 ">
      <FilterByPrice
        price={price}
        priceOpen={priceOpen}
        changePriceInput={changePriceInput}
        savePriceSubmit={savePriceSubmit}
        setPriceOpen={setPriceOpen}
      />

      <RatingProducts
        filterByRate={filterByRate}
        ratingOpen={ratingOpen}
        setRatingOpen={setRatingOpen}
        ratingChange={ratingChange}
      />
    </div>
  );
};

export default FilterData;
