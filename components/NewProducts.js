import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

export default function NewProducts({products}) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h2 className="text-base font-semibold leading-7 text-red">Print Alfa</h2>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Proizvodi</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-lg">
          Otkrijte našu raznoliku ponudu proizvoda, dizajniranih da zadovolje sve vaše potrebe. Od najnovijih inovacija do bezvremenskih klasika, naša kolekcija nudi nešto za svakoga. Pregledajte i pronađite savršen izbor za vaš stil života, ukus i budžet.
        </p>
      <ProductsGrid products={products} />
    </div>
  );
}

