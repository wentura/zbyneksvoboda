import Link from "next/link";

export default function Services() {
  return (
    <div
      className="px-4 mx-auto my-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-4 lg:py-20 scroll-mt-32 "
      id="s_cim_vam_pomohu"
    >
      <div className="max-w-full mx-auto mb-12 md:text-center md:mb-24">
        <h2 className="max-w-2xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-left text-gray-900 sm:text-center sm:text-4xl md:text-5xl md:mx-auto">
          Tvořím weby a <br className="block sm:hidden" />
          webové aplikace
        </h2>
        <p className="text-base text-gray-900 md:text-xl">
          Používám moderní technologie, přístupy a s individuálním přístupem
          dodávám řešení přímo na míru vám i vašim klientům.
        </p>
      </div>
      <div className="grid justify-center gap-8 row-gap-8 lg:grid-cols-2 justify-items-center">
        <div className="w-full sm:text-center">
          <h6 className="pb-2 mb-2 text-xl font-semibold leading-5 md:text-2xl">
            Tvorba webových stránek a aplikací
          </h6>
          <p className="max-w-md mb-3 leading-7 text-left text-gray-900 sm:mx-auto">
            Rychlé, responzivní a funkční webové stránky. S důrazem na cíle a
            použitelnost.
          </p>
        </div>
        <div className="w-full sm:text-center">
          <h6 className="pb-2 mb-2 text-xl font-semibold leading-5 md:text-2xl">
            Tvorba a vyladění e-shopů
          </h6>
          <p className="max-w-md mb-3 leading-7 text-left text-gray-900 sm:mx-auto">
            Zaujmout a nenásilnou formou z návštěvníka udělat věrného zákazníka.
            To je můj cíl.
          </p>
          <p className="max-w-md mb-3 leading-7 text-left text-gray-900 sm:mx-auto">
            Specializuji se na platformy shoptet a woocommerce.
          </p>
        </div>
        <div className="w-full sm:text-center">
          <h6 className="pb-2 mb-2 text-xl font-semibold leading-5 md:text-2xl">
            Návrh UX / UI
          </h6>
          <p className="max-w-md mb-3 leading-7 text-left text-gray-900 sm:mx-auto">
            Sleduji moderní trendy ve webdesignu, pro atraktivní vzhled, snadnou
            použitelnost a plnění vytyčených cílů.
          </p>
        </div>

        <div className="w-full sm:text-center">
          <span className="pb-2 mb-2 text-xl font-semibold leading-5 md:text-2xl">
            <Link href="#about_me">
              <p className="px-4 py-2 mx-auto my-4 text-lg font-extrabold text-gray-900 bg-green-300 shadow-md w-fit rounded-xl zs-shadow">
                Začněme spolupráci
              </p>
            </Link>
          </span>
          {/* <p className="max-w-md mb-3 text-gray-900 sm:mx-auto">
            Najděme společně řešení pro Vaše plány.
          </p> */}
        </div>
      </div>
    </div>
  );
}
