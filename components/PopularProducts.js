import Link from "next/link";
import ProductBox from "./ProductBox";

export default function PopularProducts({products}) {
  return (
    <section className="flex justify-center">
      <div className="border-hero flex h-full w-[95%] flex-col">
        <div className="pl-24">
          <h1 className="text-6xl text-black-stroke font-bold pb-3">PRINT ALFA</h1>
          <h1 className="text-red text-base font-bold pb-6">POPULAR PRODUCTS</h1>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 max-[1024px]:grid-cols-2 gap-x-10 gap-y-10 mt-10">
            {products?.length > 0 && products.map(product => (
              <ProductBox {...product} key={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}