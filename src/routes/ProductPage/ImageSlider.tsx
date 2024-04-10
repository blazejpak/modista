import { useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

type ImageSliderProps = {
  images: string[];
};

const ImageSlider = ({ images }: ImageSliderProps) => {
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

  console.log(images);
  console.log(imageNum);
  return (
    <div>
      {images[0] && (
        <img
          src={images[0]}
          className=""
          onClick={() => setImageClicked(true)}
        />
      )}
      {imageClicked && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-[1000] flex select-none  items-center bg-white">
          <div
            className="absolute left-[5%] top-6"
            onClick={() => {
              setImageClicked(false);
              setImageNum(0);
              window.scrollTo(0, 0);
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
    </div>
  );
};

export default ImageSlider;
