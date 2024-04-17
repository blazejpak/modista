import { useAppSelector } from "../../store/hooks";

const CartPage = () => {
  const data = useAppSelector((state) => state.dataSlice.data)[0];
  console.log(data);
  if (!data) return null;
  return (
    <section className=" my-20 flex items-center justify-center">
      <div className=" w-full max-w-[1140px]">
        <h2 className=" text-center text-3xl font-bold">Shopping bag</h2>
        <div className="mt-10 flex justify-center gap-10">
          <div className="flex w-full max-w-[500px] items-center justify-between gap-4 rounded bg-white p-8 shadow-sm">
            <img
              src={data.thumbnail}
              alt={data.title}
              height={160}
              className="h-40"
            />
            <div className="flex flex-col  gap-2 text-xs">
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
          <div className=" w-full max-w-[300px] rounded bg-white p-8 shadow-sm">
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
        </div>
      </div>
    </section>
  );
};

export default CartPage;
