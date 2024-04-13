import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";

import { SortDataContext } from "../../context/SortDataContext";

import { Product } from "../../utils/types";
import ClickOutside from "../../components/helpers/ClickOutside";

import RatingProducts from "./RatingProducts";
import FilterByPrice from "./FilterByPrice";

interface FilterDataProps {
  data: Product[];
}

const FilterData = ({ data }: FilterDataProps) => {
  const { setSortedData } = useContext(SortDataContext);

  const [priceOpen, setPriceOpen] = useState<boolean>(false);
  const [ratingOpen, setRatingOpen] = useState<boolean>(false);

  // TODO ref type
  const priceDivRef = useRef<React.MutableRefObject<HTMLDivElement>>();
  const ratingDivRef = useRef<React.MutableRefObject<HTMLDivElement>>();

  const [price, setPrice] = useState<{
    min: number;
    max: number;
  }>({
    min: 1,
    max: 1000,
  });
  const [filterByRate, setFilterByRate] = useState<number>(1);

  const priceFromChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    console.log(newValue);
    if (newValue === "-" || newValue === "+") newValue = "";
    if (newValue.toString().length > 4) {
      const slicedValue = newValue.toString().slice(0, 4);
      setPrice((prevState) => ({
        ...prevState,
        min: Number(slicedValue),
      }));
    } else
      setPrice((prevState) => ({
        ...prevState,
        min: Number(newValue),
      }));
  };

  const priceToChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue === "-" || newValue === "+") return;

    if (newValue.toString().length > 4) {
      const slicedValue = newValue.toString().slice(0, 4);
      setPrice((prevState) => ({
        ...prevState,
        max: Number(slicedValue),
      }));
    } else
      setPrice((prevState) => ({
        ...prevState,
        max: Number(newValue),
      }));
  };

  const filterData = (data: Product[]) => {
    return data.filter((product) => {
      console.log(product.rating < filterByRate);
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
    setFilterByRate((prevState) => (prevState = Number(e.target.value)));
  };

  useEffect(() => {
    const newData = data;
    const filteredData = filterData(newData);
    setSortedData(filteredData);
  }, [data, filterByRate]);

  const savePriceSubmit = () => {
    if (price.min > price.max)
      setPrice((prevState) => ({ ...prevState, min: prevState.max }));

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
        <FilterByPrice
          price={price}
          priceDivRef={priceDivRef}
          priceFromChange={priceFromChange}
          priceOpen={priceOpen}
          priceToChange={priceToChange}
          savePriceSubmit={savePriceSubmit}
          setPriceOpen={setPriceOpen}
        />
      </ClickOutside>

      <ClickOutside
        close={setRatingOpen}
        isActive={ratingOpen}
        refEl={ratingDivRef}
      >
        <RatingProducts
          filterByRate={filterByRate}
          ratingDivRef={ratingDivRef}
          ratingOpen={ratingOpen}
          setRatingOpen={setRatingOpen}
          ratingChange={ratingChange}
        />
      </ClickOutside>
    </div>
  );
};

export default FilterData;
