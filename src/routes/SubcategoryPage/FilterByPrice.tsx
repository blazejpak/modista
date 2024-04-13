import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import SortButton from "../../components/main/Subcategory/SortButton";
import { useClickOutside } from "../../components/helpers/useClickOutside";
import Button from "../../components/main/Subcategory/Button";

type FilterByPriceProps = {
  priceOpen: boolean;
  setPriceOpen: Dispatch<SetStateAction<boolean>>;
  price: {
    min: number;
    max: number;
  };
  changePriceInput: (e: ChangeEvent<HTMLInputElement>) => void;
  savePriceSubmit: () => void;
};

const FilterByPrice = ({
  priceOpen,
  setPriceOpen,
  price,
  changePriceInput,
  savePriceSubmit,
}: FilterByPriceProps) => {
  const priceDivRef = useRef<HTMLDivElement>(null);
  useClickOutside({ refEl: priceDivRef, callback: () => setPriceOpen(false) });

  return (
    <div className="flex  items-center gap-2" ref={priceDivRef}>
      <SortButton active={priceOpen} setActive={setPriceOpen} label="Price" />
      {priceOpen && (
        <div className="absolute  top-[150%] z-10 flex translate-x-[-10%] flex-col items-center gap-2 border  bg-grey-lighter p-4">
          <div className="flex  gap-3">
            <div className="relative h-10">
              <input
                className="hide-arrows h-10 w-24 cursor-pointer rounded border pr-4 text-right outline-none sm:w-40"
                name="min"
                id="min"
                type="number"
                min={1}
                placeholder="1"
                value={price.min}
                onChange={changePriceInput}
              />
              <p className="absolute left-4 top-2 opacity-50">$</p>
            </div>
            <div className="relative h-10">
              <input
                className="hide-arrows h-10 w-24 cursor-pointer rounded border pr-4 text-right outline-none sm:w-40"
                name="max"
                id="max"
                type="number"
                max={1000}
                placeholder="9999"
                value={price.max}
                onChange={changePriceInput}
              />
              <p className="absolute left-4 top-2 opacity-50">$</p>
            </div>
          </div>
          <Button onClick={savePriceSubmit}>
            <p>Submit</p>
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterByPrice;
