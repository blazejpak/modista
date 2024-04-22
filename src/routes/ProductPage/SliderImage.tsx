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
    <div className="lg:hidden">
      <Swiper
        slidesPerView={1}
        freeMode={false}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90vw] "
      >
        {images &&
          images.map((image, i) => (
            <SwiperSlide key={i}>
              <div
                className={`mb-10 flex min-w-[70%]  cursor-zoom-in justify-center px-5`}
                onClick={() => imageFunction(true, i, "hidden")}
              >
                <img
                  src={image}
                  alt={alt}
                  className="h-[300px] object-contain sm:h-[450px]"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SliderImage;
