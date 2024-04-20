import { useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import ImageGrid from "./ImageGrid";
import SliderImage from "./SliderImage";

type ImageSliderProps = {
  images: string[];
  alt: string;
};

const ImageSlider = ({ images, alt }: ImageSliderProps) => {
  const [imageClicked, setImageClicked] = useState<boolean>(false);
  const [imageNumber, setImageNumber] = useState<number>(0);

  const previousImage = () => {
    if (imageNumber === 0)
      setImageNumber((prevState) => (prevState = images.length - 1));
    else setImageNumber((prevState) => prevState - 1);
  };

  const nextImage = () => {
    if (imageNumber === images.length - 1)
      setImageNumber((prevState) => (prevState = 0));
    else setImageNumber((prevState) => prevState + 1);
  };

  const imageHandle = (
    isImageZoomActive: boolean,
    indexImage: number,
    typeScroll: "auto" | "hidden",
  ) => {
    setImageClicked(isImageZoomActive);
    setImageNumber(indexImage);

    document.documentElement.style.overflowY = typeScroll;
  };

  return (
    <div className="w-full select-none">
      {imageClicked && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-[1000] flex select-none items-center   bg-white">
          <div
            className="absolute right-[5%] top-6 cursor-pointer"
            onClick={() => {
              document.documentElement.style.overflowY = "auto";
              setImageClicked(false);
              setImageNumber(0);
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
              src={images[imageNumber]}
              className="h-[60dvh] w-[80dvw] object-contain  xs:h-[80dvh] md:h-[80dvh]  xl:w-[70dvw]"
            />
            <p className="absolute left-[50%] top-[105%] translate-x-[-50%] text-xl md:top-[103%]">
              {imageNumber + 1} of {images.length}
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
      <SliderImage images={images} alt={alt} imageFunction={imageHandle} />
      <ImageGrid images={images} alt={alt} imageFunction={imageHandle} />
    </div>
  );
};

export default ImageSlider;
