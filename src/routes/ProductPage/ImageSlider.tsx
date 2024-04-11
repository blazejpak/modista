import { useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

type ImageSliderProps = {
  images: string[];
  alt: string;
};

const ImageSlider = ({ images, alt }: ImageSliderProps) => {
  const [imageClicked, setImageClicked] = useState<boolean>(false);
  const [imageNum, setImageNum] = useState<number>(0);

  const previousImage = () => {
    if (imageNum === 0)
      setImageNum((prevState) => (prevState = images.length - 1));
    else setImageNum((prevState) => prevState - 1);
  };

  const nextImage = () => {
    if (imageNum === images.length - 1)
      setImageNum((prevState) => (prevState = 0));
    else setImageNum((prevState) => prevState + 1);
  };

  return (
    <div className="w-full select-none">
      {images[0] && (
        <div className="flex gap-2">
          <img
            src={images[0]}
            className=" w-[95%] cursor-zoom-in shadow sm:min-w-[600px] md:min-w-[750px] lg:hidden"
            onClick={() => {
              setImageClicked(true);

              document.body.style.overflowY = "hidden";
            }}
          />
          <img
            src={images[1]}
            className="cursor-zoom-in shadow lg:hidden"
            onClick={() => {
              setImageClicked(true);

              document.body.style.overflowY = "hidden";
            }}
          />
        </div>
      )}
      {imageClicked && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-[1000] flex select-none items-center   bg-white">
          <div
            className="absolute right-[5%] top-6 cursor-pointer"
            onClick={() => {
              setImageClicked(false);
              setImageNum(0);

              document.body.style.overflowY = "auto";
            }}
          >
            <IoClose size={36} />
          </div>
          <div
            className="flex h-[80dvh]  w-[10dvw] cursor-pointer items-center justify-center xl:w-[15dvw]"
            onClick={previousImage}
          >
            <FaArrowLeft size={24} className="" />
          </div>
          <div className="relative">
            <img
              src={images[imageNum]}
              className="xs:h-[80dvh] h-[60dvh] w-[80dvw] shadow md:h-[80dvh]  xl:w-[70dvw]"
            />
            <p className="absolute left-[50%] top-[105%] translate-x-[-50%] text-xl md:top-[103%]">
              {imageNum + 1} of {images.length}
            </p>
          </div>
          <div
            className="flex h-[80dvh]  w-[10dvw] cursor-pointer items-center justify-center xl:w-[15dvw]"
            onClick={nextImage}
          >
            <FaArrowRight size={24} className="cursor-pointer" />
          </div>
        </div>
      )}
      <div className="hidden flex-col justify-between gap-10 lg:flex lg:flex-row lg:flex-wrap lg:gap-0 ">
        {images &&
          images.map((image, i) => (
            <div
              className={`mb-2 cursor-zoom-in shadow-lg  ${i === 0 ? "w-full" : "w-[49%]"}`}
              onClick={() => {
                setImageClicked(true);
                setImageNum(i);

                document.body.style.overflowY = "hidden";
              }}
              key={i}
            >
              <img src={image} alt={alt} className="h-full" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageSlider;
