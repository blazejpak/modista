type ImageGridProps = {
  images: string[];
  alt: string;
  imageFunction: (
    isImageZoomActive: boolean,
    indexImage: number,
    typeScroll: "auto" | "hidden",
  ) => void;
};

const ImageGrid = ({ images, alt, imageFunction }: ImageGridProps) => {
  return (
    <div className="hidden flex-col justify-between gap-10 lg:flex lg:flex-row lg:flex-wrap lg:gap-0 ">
      {images &&
        images.map((image, i) => (
          <div
            className={`mb-2 cursor-zoom-in shadow-lg  ${i === 0 ? "w-full" : "w-[49%]"}`}
            onClick={() => imageFunction(true, i, "hidden")}
            key={i}
          >
            <img src={image} alt={alt} className="h-full w-full" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
