import Header from "@/components/Header";
import {Category} from "@/models/Category";
import {Product} from "@/models/Product";
import ProductBox from "@/components/ProductBox";
import styled from "styled-components";
import Link from "next/link";
import {RevealWrapper} from "next-reveal";
import {mongooseConnect} from "@/lib/mongoose";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {WishedProduct} from "@/models/WishedProduct";
import Footer from "@/components/Footer";

export default function CategoriesPage({mainCategories,categoriesProducts,wishedProducts=[]}) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col mt-10">
            {mainCategories.map(cat => (
              <div className="mb-10" key={cat._id}>
                <div className="flex mt-4 items-center gap-3">
                  <h2 className="text-4xl font-bold mb-5">{cat.name}</h2>
                </div>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5">
                  {categoriesProducts[cat._id].map((p, index) => (
                    <div key={p._id} delay={index * 50}>
                      <ProductBox {...p} wished={wishedProducts.includes(p._id)} />
                    </div>
                  ))}
                  <Link className="bg-red-300 h-40 rounded-xl flex items-center justify-center" href={'/category/' + cat._id} key={`showall-${cat._id}`} delay={categoriesProducts[cat._id].length * 50}>
                    <div href={'/category/' + cat._id}>
                      Prikaži više &rarr;
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(ctx) {
  await mongooseConnect();
  const categories = await Category.find();
  const mainCategories = categories.filter(c => !c.parent);
  const categoriesProducts = {}; // catId => [products]
  const allFetchedProductsId = [];
  for (const mainCat of mainCategories) {
    const mainCatId = mainCat._id.toString();
    const childCatIds = categories
      .filter(c => c?.parent?.toString() === mainCatId)
      .map(c => c._id.toString());
    const categoriesIds = [mainCatId, ...childCatIds];
    const products = await Product.find({category: categoriesIds}, null, {limit:3,sort:{'_id':-1}});
    allFetchedProductsId.push(...products.map(p => p._id.toString()))
    categoriesProducts[mainCat._id] = products;
  }


  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  const wishedProducts = session?.user
    ? await WishedProduct.find({
      userEmail:session?.user.email,
      product: allFetchedProductsId,
    })
    : [];

  return {
    props: {
      mainCategories: JSON.parse(
        JSON.stringify(mainCategories)
      ),
      categoriesProducts: JSON.parse(JSON.stringify(categoriesProducts)),
      wishedProducts: wishedProducts.map(i => i.product.toString()),
    },
  };
}

