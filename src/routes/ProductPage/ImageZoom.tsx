import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

type ImageZoomProps = {
  images: string[];
  alt: string;
  imageFunction: (
    isImageZoomActive: boolean,
    indexImage: number,
    typeScroll: "auto" | "hidden",
  ) => void;
  previousImage: () => void;
  nextImage: () => void;
  imageNumber: number;
};

const ImageZoom = ({
  images,
  alt,
  imageFunction,
  previousImage,
  nextImage,
  imageNumber,
}: ImageZoomProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[1000] flex select-none items-center   bg-white">
      <div
        className="absolute right-[5%] top-6 cursor-pointer"
        onClick={() => imageFunction(false, 0, "auto")}
      >
        <IoClose size={36} />
      </div>
      <div
        className="flex h-[80dvh]  w-[10dvw] cursor-pointer items-center justify-center xl:w-[15dvw]"
        onClick={previousImage}
      >
        <FaArrowLeft size={24} />
      </div>
      <div className="relative">
        <img
          alt={alt}
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
  );
};

export default ImageZoom;
