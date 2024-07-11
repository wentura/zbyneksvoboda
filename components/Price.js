import Link from "next/link";
export default function Price() {
  return (
    <div
      className="w-full py-20 my-20 shadow-xl bg-slate-100 -scroll-mt-2 md:scroll-mt-2 "
      id="cenik"
    >
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-full mx-auto mb-10 text-center md:mb-12">
          <h2 className="max-w-2xl mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-5xl md:mx-auto">
            Ceník
          </h2>
          <p className="text-base text-gray-700 md:text-xl">
            Přistupuji ke každému klientovi individuálně a s maximálním možným
            soustředěním na jeho potřeby a cíle projektu.
          </p>
        </div>
        <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
          <div className="flex flex-col justify-between p-8 bg-white border shadow-xl rounded-2xl sm:items-center">
            <div className="text-center">
              <div className="">základ</div>
              <div className="flex items-center justify-center mt-2">
                <div className="text-gray-700">od&nbsp;</div>
                <div className="mr-1 text-5xl font-bold">19.000</div>
                <div className="text-gray-700">Kč</div>
              </div>
              <div className="mt-8 space-y-3">
                <div className="text-gray-700">statické webové stánky</div>
                <div className="text-gray-700">prezentační weby</div>
                <div className="text-gray-700">unikátní design</div>
                <div className="text-gray-700">plně responzivní</div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-between p-8 bg-white border shadow-xl rounded-2xl sm:items-center">
            <div className="text-center">
              <div>standard</div>
              <div className="flex items-center justify-center mt-2">
                <div className="text-gray-700">od&nbsp;</div>
                <div className="mr-1 text-5xl font-bold">32.000</div>
                <div className="text-gray-700">Kč</div>
              </div>
              <div className="mt-8 space-y-3">
                <div className="text-gray-700">web s aplikační logikou</div>
                <div className="text-gray-700">redakční systémy</div>
                <div className="text-gray-700">unikátní design</div>
                <div className="text-gray-700">plně responzivní</div>
                <div className="text-gray-700">webové aplikace</div>
                <div className="text-xs text-gray-400">
                  (e-shopy, půjčovny, databáze atd.)
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 bg-white border shadow-xl rounded-2xl sm:items-center">
            <div className="text-center">
              <div className="">&nbsp;</div>
              <div className="flex items-center justify-center mt-2">
                <div className="text-gray-700">od&nbsp;</div>
                <div className="mr-1 text-5xl font-bold">950</div>
                <div className="text-gray-700">Kč/h</div>
              </div>
              <div className="mt-8 space-y-3">
                <div className="text-gray-700">jednotlivé úpravy</div>
                <div className="text-gray-700">dílčí úkoly</div>
                <div className="text-gray-700">poradenství</div>
                <div className="text-gray-700">konzultace</div>
              </div>
            </div>
          </div>
          <p className="pt-4 text-base text-gray-700">
            Ceny uvádím včetně DPH.
          </p>
        </div>
      </div>
    </div>
  );
}
