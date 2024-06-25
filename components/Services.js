import Link from "next/link";

export default function Services() {
  return (
    <div
      className="px-4 my-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-4 lg:py-20 scroll-mt-32	"
      id="s_cim_vam_pomohu"
    >
      <div className="max-w-full mb-12 mx-auto md:text-center md:mb-24">
        <h2 className="max-w-2xl mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-5xl md:mx-auto text-center">
          Tvořím weby a webové aplikace
        </h2>
        <p className="text-base text-gray-900 md:text-xl">
          Používám moderní technologie, přístupy a s individuálním přístupem
          dodávám řešení přímo na míru vám i vašim klientům.
        </p>
      </div>
      <div className="grid gap-8 row-gap-8 lg:grid-cols-2 justify-center justify-items-center">
        <div className="sm:text-center w-full">
          <h6 className="mb-2 font-semibold leading-5 text-xl md:text-2xl pb-2">
            Tvorba webových stránek a aplikací
          </h6>
          <p className="max-w-md mb-3 text-gray-900 sm:mx-auto  leading-7 text-left">
            Rychlé, responzivní a funkční webové stránky. S důrazem na cíle a
            použitelnost.
          </p>
        </div>
        <div className="sm:text-center w-full">
          <h6 className="mb-2 font-semibold leading-5 text-xl md:text-2xl pb-2">
            Tvorba a vyladění e-shopů
          </h6>
          <p className="max-w-md mb-3 text-gray-900 sm:mx-auto  leading-7 text-left">
            Zaujmout a nenásilnou formou z návštěvníka udělat věrného zákazníka.
            To je můj cíl.
          </p>
          <p className="max-w-md mb-3 text-gray-900 sm:mx-auto  leading-7 text-left">
            Specializuji se na platformy shoptet a woocommerce.
          </p>
        </div>
        <div className="sm:text-center w-full">
          <h6 className="mb-2 font-semibold leading-5 text-xl md:text-2xl pb-2">
            Návrh UX / UI
          </h6>
          <p className="max-w-md mb-3 text-gray-900 sm:mx-auto leading-7  text-left">
            Sleduji moderní trendy ve webdesignu, pro atraktivní vzhled, snadnou
            použitelnost a plnění vytyčených cílů.
          </p>
        </div>

        <div className="sm:text-center w-full">
          <span className="mb-2 font-semibold leading-5 text-xl md:text-2xl pb-2">
            <Link href="#about_me">
              <p className="bg-green-300 text-lg w-fit my-4 px-4 py-2 rounded-xl shadow-md mx-auto text-gray-900 font-extrabold zs-shadow">
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
