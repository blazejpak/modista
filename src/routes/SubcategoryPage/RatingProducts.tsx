import { ChangeEvent, Dispatch, MutableRefObject, SetStateAction } from "react";
import SortButton from "../../components/main/Subcategory/SortButton";
import { FaStar } from "react-icons/fa";

interface RatingProductsProps {
  ratingDivRef: MutableRefObject<any>;
  ratingOpen: boolean;
  setRatingOpen: Dispatch<SetStateAction<boolean>>;
  filterByRate: number;
  ratingChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RatingProducts = ({
  ratingDivRef,
  ratingOpen,
  setRatingOpen,
  filterByRate,
  ratingChange,
}: RatingProductsProps) => {
  return (
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
            onChange={ratingChange}
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
  );
};

export default RatingProducts;
