import Button from "../../components/main/Subcategory/Button";
import { useAppSelector } from "../../store/hooks";

const CartPage = () => {
  const data = useAppSelector((state) => state.dataSlice.data)[0];

  if (!data) return null;
  return (
    <section className=" my-20 flex items-center justify-center ">
      <div className=" w-full max-w-[1140px]">
        <h2 className=" text-center text-3xl font-bold">Shopping bag</h2>
        <div className="mt-10 flex flex-col justify-center md:flex-row md:gap-10">
          <div className="flex   w-full flex-col items-center  gap-8 rounded bg-white p-8 xs:flex-row md:max-w-[500px]">
            <img
              src={data.thumbnail}
              alt={data.title}
              height={160}
              className="h-40"
            />
            <div className="flex flex-col  gap-2 text-xs">
              <div className="text-base">
                <p className="font-bold first-letter:uppercase">{data.title}</p>
                <p>${data.price.toFixed(2)}</p>
              </div>
              <div className="flex gap-2 font-normal">
                <div>
                  <p>Quantiity:</p>
                  <p>Rating:</p>
                  <p>Total:</p>
                </div>
                <div>
                  <p>1</p>
                  <p>{data.rating}</p>
                  {/* TODO summary */}
                  <p>${data.price.toFixed(2)}</p>
                </div>
              </div>
              <p></p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-8 rounded bg-white p-8 shadow-sm md:max-w-[300px]">
            <div>
              <div className="flex justify-between">
                <p>Order value</p>
                <p>$27.99</p>
              </div>
              <div className="flex justify-between">
                <p>Delivery</p>
                <p>$4,99</p>
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p>$32,98</p>
              </div>
            </div>

            <Button disabled>Checkout</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
