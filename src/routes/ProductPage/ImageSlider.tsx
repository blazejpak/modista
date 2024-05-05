import { useState } from "react";

import ImageGrid from "./ImageGrid";
import SliderImage from "./SliderImage";
import ImageZoom from "./ImageZoom";

type ImageSliderProps = {
  images: string[];
  alt: string;
};

const ImageSlider = ({ images, alt }: ImageSliderProps) => {
  const [imageClicked, setImageClicked] = useState(false);
  const [imageNumber, setImageNumber] = useState(0);

  const previousImage = () => {
    if (imageNumber === 0) setImageNumber(images.length - 1);
    else setImageNumber((prevState) => prevState - 1);
  };

  const nextImage = () => {
    if (imageNumber === images.length - 1) setImageNumber(0);
    else setImageNumber((prevState) => prevState + 1);
  };

  if (!images) return null;

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
    <div className="w-full select-none lg:w-[50%] ">
      {imageClicked && (
        <ImageZoom
          images={images}
          alt={alt}
          imageFunction={imageHandle}
          previousImage={previousImage}
          nextImage={nextImage}
          imageNumber={imageNumber}
        />
      )}
      <SliderImage images={images} alt={alt} imageFunction={imageHandle} />
      <ImageGrid images={images} alt={alt} imageFunction={imageHandle} />
    </div>
  );
};

export default ImageSlider;
