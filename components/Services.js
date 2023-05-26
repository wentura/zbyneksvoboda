import Link from "next/link";

export default function Services() {
  return (
    <div
      className="px-4 my-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-4 lg:py-20 scroll-mt-32	"
      id="s_cim_vam_pomohu"
    >
      <div className="max-w-full mb-10 mx-auto md:text-center md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-5xl md:mx-auto text-center">
          S čím Vám pomohu
        </h2>
        <p className="text-base text-gray-900 md:text-lg">
          Tvořím{" "}
          <span className="font-bold">
            moderní, úspěšné a funkční weby, e-shopy a aplikace.
          </span>{" "}
          Použitím nejmodernějších technologií a s individuálním přístupem
          dodávám řešení přímo na míru.
        </p>
      </div>
      <div className="grid gap-8 row-gap-8 lg:grid-cols-2 justify-center justify-items-center">
        <div className="sm:text-center w-full">
          <h6 className="mb-2 font-semibold leading-5 text-xl md:text-2xl pb-2">
            Tvorba webových stránek a aplikací
          </h6>
          <p className="max-w-md mb-3 text-gray-900 sm:mx-auto">
            <span className="px-2 py-1 bg-slate-100 shadow-md">
              {" "}
              Rychlé, responzivní
            </span>{" "}
            (dobře vypadající na mobilu) a funční webové stránky, které
            majitelům přináší užitek.
          </p>
        </div>
        <div className="sm:text-center w-full">
          <h6 className="mb-2 font-semibold leading-5  text-xl md:text-2xl pb-2">
            Úprava stávajících řešení
          </h6>
          <p className="max-w-md mb-3 text-gray-900 sm:mx-auto">
            Optimalizaci výkonu, renovace a modernizace stávajících webových
            stránek, vytvoření{" "}
            <span className="px-2 py-1 bg-slate-100 shadow-md">
              moderního designu
            </span>
            , který zaujme zákazníky a posune Vás vpřed.
          </p>
        </div>
        <div className="sm:text-center w-full">
          <h6 className="mb-2 font-semibold leading-5 text-xl md:text-2xl pb-2">
            Tvorba a vyladění e-shopů
          </h6>
          <p className="max-w-md mb-3 text-gray-900 sm:mx-auto">
            Specializuji se na platformy
            <span className="px-2 py-1 bg-slate-100 shadow-md">shoptet</span> a
            <span className="px-2 py-1 bg-slate-100 shadow-md">
              woocommerce
            </span>
            .
            <br />
            <Link
              href="/#reference"
              className="underline underline-offset-2 decoration-1 decoration-gray-400"
            >
              Více v referencích
            </Link>
          </p>
        </div>
        <div className="sm:text-center w-full">
          <h6 className="mb-2 font-semibold leading-5 text-xl md:text-2xl pb-2">
            Návrh UX / UI
          </h6>
          <p className="max-w-md mb-3 text-gray-900 sm:mx-auto">
            <span className="px-2 py-1 bg-slate-100 shadow-md">
              {" "}
              Moderní trendy ve webdesignu
            </span>
            pro Vaše stránky. Pro atraktivní vzhled, snadnou použitelnost a
            plnění cílů.
          </p>
        </div>
        <div className="sm:text-center w-full">
          <h6 className="mb-2 font-semibold leading-5 text-xl md:text-2xl pb-2">
            Konzultace
          </h6>
          <p className="max-w-md mb-3 text-gray-900 sm:mx-auto">
            Zodpovím otázky tvorby webu, optimalizaci obsahu, zlepšení
            uživatelského rozhraní nebo vylepšením celkového designu Vašich
            stránek?{" "}
            <span className="px-2 py-1 bg-slate-100 shadow-md">
              {" "}
              Rád pomohu najít řešení
            </span>
            .
          </p>
        </div>
        <div className="sm:text-center w-full">
          <span className="mb-2 font-semibold leading-5 text-xl md:text-2xl pb-2">
            <Link href="#about_me">
              <p className="bg-green-300 text-lg w-fit my-4 px-4 py-2 rounded-xl shadow-md mx-auto text-gray-900 font-extrabold">
                Začněme spolupráci
              </p>
            </Link>
          </span>
          <p className="max-w-md mb-3 text-gray-900 sm:mx-auto">
            Najděme společně řešení pro Vaše plány.
          </p>
        </div>
      </div>
    </div>
  );
}
