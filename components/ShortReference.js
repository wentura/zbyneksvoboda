import Image from "next/image";
export default function ShortReference() {
  return (
    <div
      className="w-full my-20 bg-slate-100 shadow-xl py-20  scroll-mt-12"
      id="reference"
    >
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-4 lg:py-20">
        <div className="max-w-full mb-10 mx-auto text-center md:mb-12">
          <h2 className="max-w-2xl mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-5xl md:mx-auto">
            Reference a ukázky prací
          </h2>
        </div>
        <div className="max-w-4xl mx-auto lg:max-w-screen-xl flex flex-wrap  justify-between my-4 py-4 md:py-12">
          <div className="h-full w-full md:w-2/3 mx-auto md:mx-0 px-2 lg:px-8">
            <h3 className="mb-6 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none text-center lg:pt-12">
              Harasov.eu
            </h3>
            <p className="text-base text-gray-900 pb-4">
              Webová prezentace pro Harasov, který nabízí nadstandardní služby
              jak v ubytování, tak i v restauraterství.
              <br />S panem Kamilem připravujeme další webové stánky pro jeho
              rozmanité aktivity.
            </p>
            <ul className="ps-2 md:ps-12 text-base text-gray-900 pb-4">
              <li>Statická webová stránka</li>
              <li>Plně responzivní</li>
              <li>
                Grafika od{" "}
                <a
                  href="http://mowshe.cz/"
                  target="_blank"
                  className="underline underline-offset-2 decoration-1 decoration-gray-400"
                >
                  mowshe.cz
                </a>
              </li>
              <li>Funkce editovatelného jídelního lístku</li>
            </ul>
            <p className="text-base text-gray-900 pb-8">
              <a
                href="http://www.harasov.eu"
                target="_blank"
                className="underline underline-offset-2 decoration-1 decoration-gray-400"
              >
                Harasov.eu
              </a>
            </p>
          </div>
          <div className="h-full w-3/4 md:w-1/3 mx-auto	flex justify-center md:rotate-6">
            <Image
              src="/img/portfolio/hara.jpg"
              alt=""
              width="600"
              height="800"
              className="shadow-md  max-h-96 w-auto justify-self-end"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto lg:max-w-screen-xl flex flex-wrap  justify-between my-4 py-4 md:py-12 md:flex-row-reverse">
          <div className="h-full w-full md:w-2/3 mx-auto md:mx-0 px-2 lg:px-8">
            <h3 className="mb-6 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none text-center lg:pt-12">
              Hexfit.eu{" "}
            </h3>
            <p className="text-base text-gray-900 pb-4">
              Odlehčení a zjednodušení celé Shoptet šablony, aby vyhovovala
              klientce a jejímu záměru. Předlohou byl zahraniční e-shop s
              podobnou tématikou.
            </p>
            <ul className="ps-2 md:ps-12 text-base text-gray-900 pb-4">
              <li>Upravená Shoptet šablona</li>
              <li>Skrývání částí webu, aby jsem celek odlehčil.</li>
            </ul>
            <p className="text-base text-gray-900 pb-8">
              <a
                href="https://www.hexfit.eu/"
                target="_blank"
                className="underline underline-offset-2 decoration-1 decoration-gray-400"
              >
                Hexfit.eu
              </a>
            </p>
          </div>
          <div className="h-full w-3/4 md:w-1/3 mx-auto	flex justify-center md:-rotate-6">
            <Image
              src="/img/portfolio/hexfit.png"
              alt=""
              width="600"
              height="800"
              className="shadow-md max-h-96 w-auto justify-self-start"
            />
          </div>
        </div>{" "}
        <div className="max-w-4xl mx-auto lg:max-w-screen-xl flex flex-wrap  justify-between my-4 py-4 md:py-12">
          <div className="h-full w-full md:w-2/3 mx-auto md:mx-0 px-2 lg:px-8">
            <h3 className="mb-6 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none text-center lg:pt-12">
              AntonieEmma.cz
            </h3>
            <p className="text-base text-gray-900 pb-4">
              E-shop českého výrobce dětských pohybových hraček.
              <br />
              Doprovodný projekt{" "}
              <a
                href="https://faberpoint.eu/"
                target="_blank"
                className="underline underline-offset-2 decoration-1 decoration-gray-400"
              >
                Faberpoint.eu
              </a>
              , kde si naklikáte vlastní sklad a vysněné prolézačky.
              <br />
              Na jeden klik vše do košíku.
            </p>
            <ul className="ps-2 md:ps-12 text-base text-gray-900 pb-4">
              <li>Úprava Shoptet šablony.</li>
              <li>
                Vyladění detailů, zjednodušení a zpřehlednení celého vzhledu
                e-shopu.
              </li>
              <li>Nastavení newsletterů</li>
              <li>Funkce přidání celého seznamu položek do košíku</li>
            </ul>
            <p className="text-base text-gray-900 pb-8">
              <a
                href="https://www.antonieemma.cz/"
                target="_blank"
                className="underline underline-offset-2 decoration-1 decoration-gray-400"
              >
                AntonieEmma.cz{" "}
              </a>
            </p>
          </div>
          <div className="h-full w-3/4 md:w-1/3 mx-auto	flex justify-center md:rotate-6">
            <Image
              src="/img/portfolio/ae.png"
              alt=""
              width="600"
              height="800"
              className="shadow-md  max-h-96 w-auto justify-self-end"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto lg:max-w-screen-xl flex flex-wrap  justify-between my-4 py-4 md:py-12 md:flex-row-reverse">
          <div className="h-full w-full md:w-2/3 mx-auto md:mx-0 px-2 lg:px-8">
            <h3 className="mb-6 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none text-center lg:pt-12">
              ZodpovědnáVýuka.cz
            </h3>
            <p className="text-base text-gray-900 pb-4">
              Vyladěný Shoptet, k nepoznání upravená šablona. S paní Kateřinou
              spolupracuji i na dalších projektech, z posledních je to{" "}
              <a
                href="https://zodpovednyhub.cz/"
                target="_blank"
                className="underline underline-offset-2 decoration-1 decoration-gray-400"
              >
                ZodpovědnýHub.cz
              </a>
            </p>
            <ul className="ps-2 md:ps-12 text-base text-gray-900 pb-4">
              <li>Úprava Shoptet šablony</li>
              <li>Úprava chování Shoptetu, přidávání a skrývání částí webu</li>
              <li>
                Samostatné stánky pro vybrané produkty, doplňkové funkce k
                produktům, zvukové ukázky
              </li>
            </ul>
            <p className="text-base text-gray-900 pb-8">
              <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
                className="underline underline-offset-2 decoration-1 decoration-gray-400"
              >
                ZodpovednaVyuka.cz
              </a>
            </p>
          </div>
          <div className="h-full w-3/4 md:w-1/3 mx-auto	flex justify-center md:-rotate-6">
            <Image
              src="/img/portfolio/zv.jpg"
              alt=""
              width="600"
              height="800"
              className="shadow-md max-h-96 w-auto justify-self-start"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
