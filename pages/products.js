import Header from "@/components/Header";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Footer from "@/components/Footer";

export default function ProductsPage({products}) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Proizvodi</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-lg">
            Otkrijte našu raznoliku ponudu proizvoda, dizajniranih da zadovolje sve vaše potrebe. Od najnovijih inovacija do bezvremenskih klasika, naša kolekcija nudi nešto za svakoga. Pregledajte i pronađite savršen izbor za vaš stil života, ukus i budžet.
          </p>
        <ProductsGrid products={products} />
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}