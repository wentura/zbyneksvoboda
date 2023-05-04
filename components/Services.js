import Link from "next/link";

export default function Services() {
  return (
    <div
      className="px-4 my-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-4 lg:py-20"
      id="s_cim_vam_pomohu"
    >
      <div className="max-w-full mb-10 mx-auto text-center md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-5xl md:mx-auto">
          S čím Vám pomohu
        </h2>
        <p className="text-base text-gray-900 md:text-lg">
          <br />
          Tvořím moderní, úspěšné a hlavně funkční weby, e-shopy a aplikace.
          <br />
          Použitím nejmodernějších technologií a s individuálním přístupem
          dodávám řešení přímo na míru.
        </p>
      </div>
      <div className="grid gap-8 row-gap-8 lg:grid-cols-2 justify-center justify-items-center">
        <div className="sm:text-center">
          <h6 className="mb-2 font-semibold leading-5 text-xl md:text-2xl pb-2">
            Tvorba webových stránek a aplikací
          </h6>
          <p className="max-w-md mb-3 text-gray-900 sm:mx-auto">
            Tvořím rychlé, responzivní (dobře vypadající na mobilu) a funční
            webové stránky, které majitelům přináší užitek.
            <br />S přesahem do webdesignu, psychologie chování uživatelů a s
            empatií cílové skupiny nabízím klientům víc než jen dodání produktu,
            já{" "}
            <span className="p-1 bg-slate-100 shadow-md">
              svými weby žiju
            </span>{" "}
            a za svou prací si stojím.
          </p>
        </div>
        <div className="sm:text-center">
          <h6 className="mb-2 font-semibold leading-5  text-xl md:text-2xl pb-2">
            Úprava stávajících řešení
          </h6>
          <p className="max-w-md mb-3 text-gray-900 sm:mx-auto">
            Nefunguje Váš web jak má? Je pomalý? Zastaralý? Nabízím optimalizaci
            výkonu, renovaci a modernizaci stávajících webových stránek,
            vytvoření{" "}
            <span className="p-1 bg-slate-100 shadow-md">
              moderního designu
            </span>
            , který zaujme zákazníky a posune Vás vpřed.
          </p>
        </div>
        <div className="sm:text-center">
          <h6 className="mb-2 font-semibold leading-5  text-xl md:text-2xl pb-2">
            Úprava a ladění e-shopů
          </h6>
          <p className="max-w-md mb-3 text-gray-900 sm:mx-auto">
            Provozujete e-shop a neplní Vaše očekávání, nebo začínáte?
            <br />
            Rád Vám pomohu s odladěním, nastavením a zlepšením uživatelského
            prožitku z Vašeho e-shopu.
            <br />
            Zkušenosti mám z projektů na platformách
            <span className="p-1 bg-slate-100 shadow-md">shoptet</span> a
            <span className="p-1 bg-slate-100 shadow-md">woocommerce</span>.
          </p>
        </div>
        <div className="sm:text-center">
          <h6 className="mb-2 font-semibold leading-5 text-xl md:text-2xl pb-2">
            Návrh UX / UI
          </h6>
          <p className="max-w-md mb-3 text-gray-900 sm:mx-auto">
            Sleduji{" "}
            <span className="p-1 bg-slate-100 shadow-md">
              nejmodernějsí trendy ve webdesignu
            </span>
            , aby Vaše stránky měly atraktivní vzhled, byly snadno použitelné a
            splňovaly vytyčené cíle.
          </p>
        </div>
        <div className="sm:text-center">
          <h6 className="mb-2 font-semibold leading-5 text-xl md:text-2xl pb-2">
            Konzultace
          </h6>
          <p className="max-w-md mb-3 text-gray-900 sm:mx-auto">
            Potřebujete poradit ohledně tvorby webu, optimalizaci obsahu,
            zlepšení uživatelského rozhraní nebo vylepšením celkového designu
            Vašich stránek?{" "}
            <span className="p-1 bg-slate-100 shadow-md">
              Rád pomohu najít řešení
            </span>
            .
          </p>
        </div>
        <div className="sm:text-center">
          <span className="mb-2 font-semibold leading-5 text-xl md:text-2xl pb-2">
            <Link href="#about_me">
              <p className="bg-green-300 text-lg w-fit my-4 px-4 py-2 rounded-xl shadow-md mx-auto text-gray-900 font-extrabold">
                Začněme spolupráci
              </p>
            </Link>
          </span>
          <p className="max-w-md mb-3 text-gray-900 sm:mx-auto">
            Pojdmě si nezávazně popovídat o Vašich projektech. Najděme společně
            řešení a převeďme Vaše plány a sny v realitu.
          </p>
        </div>
      </div>
    </div>
  );
}
