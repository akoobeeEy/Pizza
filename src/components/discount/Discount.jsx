import { discountData } from "../../data/discount";

const Discount = () => {
  return (
    <section className="mt-8" id="discount">
     <div className="grid grid-cols-4 gap-5">
     {discountData.map(({ id, image, title }) => (
        <div key={id} className="relative">
          <img src={image} alt="" />
          <div className="absolute bottom-2 left-3">
            <p className="text-sm font-semibold text-white md:text-xl w-[240px] ">
              {title}
            </p>
          </div>
        </div>
      ))}
     </div>
    </section>
  );
};

export default Discount;
