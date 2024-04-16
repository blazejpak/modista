import { PiShoppingCart } from "react-icons/pi";
import { useAppSelector } from "../../../store/hooks";

const CartOnHover = () => {
  const data = useAppSelector((state) => state.dataSlice.data)[0];
  console.log(data);
  if (!data) return null;
  return (
    <div className=" group relative h-full content-center">
      <div className="hover-link flex cursor-pointer items-center  justify-center  gap-1 transition-all active:scale-110">
        <PiShoppingCart size={24} />
        <p className="text-sm font-light">Cart</p>
        <p className=" text-xs font-light ">(1)</p>
      </div>

      <div className="text-black-normal absolute right-[-100%] top-[100%] hidden w-[300px]  rounded bg-white shadow-xl group-hover:flex group-hover:flex-col">
        <div className="flex items-center justify-center gap-4 p-8">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="h-20 w-20 shadow"
          />

          <div className="flex flex-col gap-2 text-xs">
            <div>
              <p>{data.title}</p>
              <p>${data.price.toFixed(2)}</p>
            </div>
            <div className="flex gap-2 font-normal">
              <div>
                <p>Quantiity:</p>
                <p>Rating:</p>
              </div>
              <div>
                <p>1</p>
                <p>{data.rating}</p>
              </div>
            </div>
            <p></p>
          </div>
        </div>
        <button>Checkout</button>
        <button>Shopping bag</button>
      </div>
    </div>
  );
};

export default CartOnHover;
