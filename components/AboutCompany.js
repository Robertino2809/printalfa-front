export default function AboutCompany() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="/assets/images/design1.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-base font-semibold leading-7 text-red">Print Alfa</h2>
            <h2 className="text-3xl font-bold sm:text-4xl">Eksperti za grafički dizajn, web razvoj i programiranje</h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-lg">
              Print Alfa, osnovana s vizijom inovacije u dizajnu i preciznosti u tisku, pruža izvanredne usluge u području grafičkog dizajna, tiska i web razvoja. Naša misija je transformirati vaše poslovne ideje u vizualno impresivne proizvode koji komuniciraju i inspiriraju.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}




