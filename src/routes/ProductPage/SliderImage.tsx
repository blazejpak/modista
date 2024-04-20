import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

type SliderImageProps = {
  images: string[];
  alt: string;
  imageFunction: (
    isImageZoomActive: boolean,
    indexImage: number,
    typeScroll: "auto" | "hidden",
  ) => void;
};

const SliderImage = ({ images, alt, imageFunction }: SliderImageProps) => {
  return (
    <div className=" flex ">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
      >
        {images &&
          images.map((image, i) => (
            <SwiperSlide key={i}>
              <div
                className={`mb-2 min-w-[70%] cursor-zoom-in  shadow-lg`}
                onClick={() => imageFunction(true, i, "hidden")}
              >
                <img src={image} alt={alt} className="h-full object-cover" />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SliderImage;
