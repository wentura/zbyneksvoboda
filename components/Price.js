import Link from "next/link";
export default function Price() {
  return (
    <div
      className="w-full my-20 bg-slate-100 shadow-xl py-20 -scroll-mt-2 md:scroll-mt-2	"
      id="cenik"
    >
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-full mb-10 mx-auto text-center md:mb-12">
          <h2 className="max-w-2xl mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-5xl md:mx-auto">
            Ceník
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Přistupuji ke každému klientovi individuálně a s maximálním možným
            soustředěním na cíl projektu.
            <br />
            Svými weby žiju a za svou prací si stojím.
          </p>
        </div>
        <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
              <div className="">základ</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">15.000+</div>
                <div className="text-gray-700">Kč</div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">jednoduché webové stánky</div>
                <div className="text-gray-700">prezentační weby</div>
                <div className="text-gray-700">unikátní design</div>
                <div className="text-gray-700">plně responzivní</div>
                <div className="text-gray-700">
                  solidní základ, který
                  <br />
                  určitým klientům plně dostačuje
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
            <div className="text-center">
              <div>&quot;umí víc&quot;</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">30.000+</div>
                <div className="text-gray-700">Kč</div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">
                  webové stránky s aplikační logikou
                </div>
                <div className="text-gray-700">redakční systémy</div>
                <div className="text-gray-700">unikátní design</div>
                <div className="text-gray-700">plně responzivní</div>
                <div className="text-gray-700">webové aplikace</div>
                <div className="text-gray-700">
                  e-shopy, půjčovny, databáze...
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
              <div className="">&nbsp;</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">1000</div>
                <div className="text-gray-700">Kč/h</div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">jednotlivé úpravy</div>
                <div className="text-gray-700">dílčí úkoly</div>
                <div className="text-gray-700">poradenství</div>
                <div className="text-gray-700">konzultace</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
