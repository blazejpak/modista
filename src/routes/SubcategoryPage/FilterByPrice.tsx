import { ChangeEvent, Dispatch, MutableRefObject, RefObject, SetStateAction, useRef } from "react";
import ButtonFn from "../../components/main/Subcategory/ButtonFn";
import SortButton from "../../components/main/Subcategory/SortButton";
import { useClickOutside } from "../../components/helpers/useClickOutside";

type FilterByPriceProps = {
  priceOpen: boolean;
  setPriceOpen: Dispatch<SetStateAction<boolean>>;
  price: {
    min: number;
    max: number;
  };
  priceFromChange: (e: ChangeEvent<HTMLInputElement>) => void;
  priceToChange: (e: ChangeEvent<HTMLInputElement>) => void;
  savePriceSubmit: () => void;
};

const FilterByPrice = ({
  priceOpen,
  setPriceOpen,
  price,
  priceFromChange,
  priceToChange,
  savePriceSubmit,
}: FilterByPriceProps) => {
  interface KeyboardEventInterface
    extends React.KeyboardEvent<HTMLInputElement> {
    code: string;
  }
  const deleteMinus = (e: KeyboardEventInterface) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };
  const priceDivRef = useRef<HTMLDivElement>(null);
  useClickOutside({refEl: priceDivRef, callback: () => setPriceOpen(false)})

  return (
    <div className="flex  items-center gap-2" ref={priceDivRef}>
      <SortButton active={priceOpen} setActive={setPriceOpen} label="Price" />
      {priceOpen && (
        <div className="absolute  top-[150%] z-10 flex translate-x-[-10%] flex-col items-center gap-2 border  bg-grey-lighter p-4">
          <div className="flex  gap-3">
            <div className="relative h-10">
              <input
                className="hide-arrows h-10 w-24 cursor-pointer rounded border pr-4 text-right outline-none sm:w-40"
                type="number"
                placeholder="1"
                value={price.min}
                onChange={priceFromChange}
                onKeyDown={deleteMinus}
              />
              <p className="absolute left-4 top-2 opacity-50">$</p>
            </div>
            <div className="relative h-10">
              <input
                className="hide-arrows h-10 w-24 cursor-pointer rounded border pr-4 text-right outline-none sm:w-40"
                type="number"
                placeholder="1000"
                value={price.max}
                onChange={priceToChange}
                onKeyDown={deleteMinus}
              />
              <p className="absolute left-4 top-2 opacity-50">$</p>
            </div>
          </div>
          <ButtonFn onClick={savePriceSubmit} label="Save" />
        </div>
      )}
    </div>
  );
};

export default FilterByPrice;
