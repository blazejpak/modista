import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";

import { FaStar } from "react-icons/fa";

<<<<<<< HEAD
import SortButton from "../../components/main/Subcategory/SortButton";
=======
import SortButton from "../../components/main/UI/SortButton";
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
import { useClickOutside } from "../../components/helpers/useClickOutside";

interface RatingProductsProps {
  ratingOpen: boolean;
  setRatingOpen: Dispatch<SetStateAction<boolean>>;
  filterByRate: number;
  ratingChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RatingProducts = ({
  ratingOpen,
  setRatingOpen,
  filterByRate,
  ratingChange,
}: RatingProductsProps) => {
  const ratingDivRef = useRef<HTMLDivElement>(null);
  useClickOutside({
    refEl: ratingDivRef,
    callback: () => setRatingOpen(false),
  });

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
            name="rating"
            type="range"
            value={filterByRate}
            onChange={ratingChange}
            min={1}
            max={5}
            step={0.1}
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
