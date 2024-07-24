export default function Faq() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h2 className="text-base font-semibold leading-7 text-red">Print Alfa</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Često postavljena pitanja
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mb-5">
        Imate pitanja o našim uslugama tiska? Ovdje možete pronaći odgovore na najčešće postavljana pitanja o narudžbama, vrstama tiska, rokovima isporuke i još mnogo toga. Ako ne pronađete informacije koje tražite, slobodno nas kontaktirajte.
      </p>
      <div className="space-y-4">
        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">Hoće li UI/UX dizajn biti responzivan i kompatibilan s različitim uređajima?</h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Svakako! U Print Alfi shvaćamo važnost responzivnog dizajna. Naš UI/UX dizajn će se lako prilagođavati različitim uređajima i zaslonima, jamčeći ugodno korisničko iskustvo.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">Možete li raditi s postojećim dizajnom ili obnoviti zastarjeli dizajn?</h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Naravno! Bez obzira na to trebate li poboljšati postojeći dizajn ili želite potpunu obnovu, prilagoditi ćemo se vašim zahtjevima. Analizirati ćemo trenutni dizajn, razumjeti vaše ciljeve te vam pružiti svjež i moderan UI/UX dizajn.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">Možete li ugraditi prilagođene animacije na moju web stranicu?</h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Apsolutno! U Print Alfi volimo dodavati jedinstvene i privlačne animacije na web stranice.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">Pružate li stalnu podršku nakon isporuke web stranice?</h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Svakako! Osiguravamo podršku i pomoć i nakon završetka projekta. Bez obzira trebate li ažuriranja, održavanje ili imate pitanja, stojimo vam na raspolaganju kako bih vam pružili potrebnu pomoć.
          </p>
        </details>
      </div>
    </div>
  )
}

