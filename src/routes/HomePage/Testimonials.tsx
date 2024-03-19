import firstTestimonial from "../../assets/firstTestimonial.jpg";
import secondTestimonial from "../../assets/secondTestimonial.jpg";
import thirdTestimonial from "../../assets/thirdTestimonial.jpg";
import fourthTestimonial from "../../assets/fourthTestimonial.jpg";

const Testimonials = () => {
  return (
    <section className="mt-8 p-4">
      <h2 className="mb-8 text-center text-3xl">What others think about us?</h2>
      <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="flex max-w-[350px] flex-col gap-4 border-[1px] border-grey-normal border-opacity-50 p-8 shadow-md">
          <div className="flex items-center gap-8 ">
            <img
              height={64}
              src={firstTestimonial}
              alt="Testimonial face 1"
              className="h-16 w-16 rounded-full  "
            />
            <p className="text-lg font-bold">Rebecca</p>
          </div>
          <p className="text-sm">
            "I'm obsessed with the fit and feel of their clothes! Every piece
            I've bought from this brand has become a wardrobe staple. Highly
            recommended for those who value both comfort and style."
          </p>
        </div>
        <div className="flex max-w-[350px] flex-col gap-4 border-[1px] border-grey-normal border-opacity-50 p-8 shadow-md">
          <div className="flex items-center gap-8 ">
            <img
              height={32}
              src={secondTestimonial}
              alt="Testimonial face 2"
              className="h-16 w-16 rounded-full  "
            />
            <p className="text-lg font-bold">Laura</p>
          </div>
          <p className="text-sm">
            "Absolutely love the attention to detail in every garment. It's
            clear that this brand takes pride in craftsmanship. Shopping here
            always feels like indulging in luxury without breaking the bank."
          </p>
        </div>
        <div className="flex max-w-[350px] flex-col gap-4 border-[1px] border-grey-normal border-opacity-50 p-8 shadow-md">
          <div className="flex items-center gap-8 ">
            <img
              height={32}
              src={thirdTestimonial}
              alt="Testimonial face 3"
              className="h-16 w-16 rounded-full  "
            />
            <p className="text-lg font-bold">Thomas</p>
          </div>
          <p className="text-sm">
            "Talk about bang for your buck! Not only are their prices
            reasonable, but the quality of their clothing surpasses many
            high-end brands I've tried. Trust me, you won't be disappointed."
          </p>
        </div>
        <div className="flex max-w-[350px] flex-col gap-4 border-[1px] border-grey-normal border-opacity-50 p-8 shadow-md">
          <div className="flex items-center gap-8 ">
            <img
              height={32}
              src={fourthTestimonial}
              alt="Testimonial face 4"
              className="h-16 w-16 rounded-full  "
            />
            <p className="text-lg font-bold">Jack</p>
          </div>
          <p className="text-sm">
            "This brand never fails to impress me with its stylish collections.
            From casual wear to formal attire, they've got it all. Quality and
            fashion blend seamlessly here!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
