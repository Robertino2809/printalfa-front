import Link from "next/link";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

export default function ProductBox({_id,title,price,images}) {
  const {addProduct} = useContext(CartContext);
  const url = '/product/'+_id;
  return (
    <div className="group relative block overflow-hidden border border-gray-200">
      <Link href={url}>
        <div className="flex justify-center">
          <img src={images?.[0]} alt="" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 max-[460px]:w-72 max-[768px]:w-72"/>
        </div>
      </Link>
      <div className="relative product-border border-gray-100 bg-white p-6">
        <h1 href={url} className="mt-4 text-lg font-medium text-gray-900">{title}</h1>
        <p className="mt-1.5 text-sm text-gray-700">
          € {price.toFixed(2)}
        </p>
        <form className="mt-4">
          <button block onClick={() => addProduct(_id)} primary outline className="block w-full rounded bg-red-300 p-3 text-sm transition hover:scale-105">
            Dodaj u košaricu
          </button>
        </form>
      </div>
    </div>
  );
}
