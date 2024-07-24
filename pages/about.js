import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function About() {
  return (
    <>
      <Header />
        <section className="flex justify-center">
          <div className="border-hero flex h-full w-[95%] flex-col">
            <div className="2xl:pl-24 2xl:mt-20">
              <h1 className="text-6xl text-black-stroke font-bold pb-3">PRINT ALFA</h1>
              <h1 className="text-red text-base font-bold pb-6">ABOUT COMPANY</h1>
            </div>
          </div>
        </section>
      <Footer />
    </>
  )
}