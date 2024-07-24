import { CodeBracketIcon, ComputerDesktopIcon, PhotoIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Tisak',
    description:
      'Tisak je umjetnost koja se izvodi s preciznošću i stručnošću. Naša tvrtka koristi najmoderniju tehnologiju tiska kako bi osigurala vrhunsku kvalitetu i jasnoću u svakom projektu.',
    icon: Square3Stack3DIcon,
  },
  {
    name: 'Grafički dizajn',
    description:
      'Grafički dizajn je više od estetike - to je jezik koji komunicira vaše vrijednosti i identitet. Naš tim stručnjaka ugrađuje inovativne ideje u svaki piksel, stvarajući vizualno privlačne i funkcionalne dizajne koji izdvajaju vaš brend iz mase.',
    icon: PhotoIcon,
  },
  {
    name: 'UI/UX Dizajn',
    description:
      'UI/UX dizajn nije samo estetska nadogradnja, već ključni element koji oblikuje korisničko iskustvo i povećava vrijednost vašeg digitalnog proizvoda. Naš tim stručnjaka u potpunosti razumije vaše ciljeve i potrebe korisnika.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Web programiranje',
    description:
      'Web programiranje predstavlja srce naše tehnološke strane poslovanja. Naša stručna ekipa programera kombinira najnovije tehnologije i kreativne pristupe kako bi stvorila web stranice i aplikacije koje nadmašuju očekivanja.',
    icon: CodeBracketIcon,
  },
]

export default function Example() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h2 className="text-base font-semibold leading-7 text-red">Print Alfa</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Naše usluge
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-600 max-w-lg">
        Iskusite vrhunsku kvalitetu tiska, personalizirane dizajne koji odražavaju vašu jedinstvenost, i kreativna rješenja koja nadmašuju vaša očekivanja. Naša tiskara pretvara vaše ideje u zapanjujuće stvarnosti.
      </p>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg red-color">
                   <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
