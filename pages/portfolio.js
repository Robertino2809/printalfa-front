import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Portfolio() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-red">Print Alfa</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Naš portfolio
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
          Dobrodošli u naš portfolio, gdje se susreću kreativnost i stručnost. Svaki projekt u našoj galeriji svjedoči o našoj predanosti vrhunskoj kvaliteti i jedinstvenom dizajnu. Od elegantnih vizitki do impozantnih promotivnih materijala, ponosni smo na svaki komad koji smo proizveli.
        </p>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">Sneaker Stop</h2>

                <p className="mt-4 text-gray-600">
                  Za klijenta koji se bavi prodajom patika, dizajnirali smo i razvili modernu i funkcionalnu web stranicu koja reflektira njihov brend i proizvode. Naša rješenja uključuju intuitivnu navigaciju, privlačan dizajn i optimizaciju za sve uređaje, čime smo omogućili korisnicima jednostavno pregledavanje i kupovinu proizvoda. Rezultat je povećanje online prodaje i poboljšanje korisničkog iskustva.
                </p>
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt=""
                  src="/assets/images/Thumbnail.webp"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
                <img
                  alt=""
                  src="/assets/images/ThumbnailFoodoo.webp"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">Foodoo</h2>

                <p className="mt-4 text-gray-600">
                  Za klijenta koji je kreirao mobilnu aplikaciju s fokusom na zdrave recepte, dizajnirali smo i razvili sveobuhvatan digitalni paket koji uključuje mobilnu aplikaciju i web stranicu. Naš tim je osmislio vizualno privlačan i intuitivan dizajn koji korisnicima omogućuje lako pronalaženje i kreiranje zdravih jela. Web stranica je optimizirana za sve uređaje, pružajući korisnicima besprijekorno iskustvo pregledavanja i pristupa receptima. Kroz ovaj projekt, značajno smo unaprijedili digitalnu prisutnost klijenta i poboljšali angažman korisnika.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        
      </div>
      <Footer />
    </>
  )
}