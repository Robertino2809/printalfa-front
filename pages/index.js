import Header from "@/components/Header";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import Hero from "@/components/Hero";
import AboutCompany from "@/components/AboutCompany";
import Faq from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";


export default function HomePage({newProducts}) {
  
  return (
    <div>
      <Header />
      <Hero />
      <AboutCompany />
      <Features />
      <NewProducts products={newProducts} />
      <Faq />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:8});
  return {
    props: {
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}