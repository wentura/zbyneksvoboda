import Image from "next/image";
import Link from "next/link";
export default function ShortReference() {
  return (
    <div
      className="w-full my-20 bg-slate-100 shadow-xl py-20  scroll-mt-12"
      id="reference"
    >
      <div className="max-w-full mb-10 mx-auto text-center md:mb-12">
        <h2 className="max-w-2xl mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-5xl md:mx-auto">
          Reference a ukázky prací
        </h2>
      </div>

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Webové prezentace{" "}
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Statické webové prezentace založené na moderních designových
              trendech a nejnovějších technologiích, což zaručuje, že vaše
              stránky budou vypadat nejen skvěle, ale také se budou rychle
              načítat a poskytovat optimální uživatelský zážitek.
              <br />
              <br />
              Moje služny zahrnují procesy od návrhu až po spuštění do ostrého
              provozu.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center">
          <div className="p-4 xl:w-1/3 sm:pb-12 pb-24">
            <div className="rounded-lg h-[400px] md:h-[500px]">
              <video
                autoPlay
                controls
                width={600}
                height={600}
                alt="content"
                className="object-cover object-top h-full w-full shadow-xl"
                preload="auto"
                src="/autokempkokorin.mp4"
                loop
                playsInline
                poster="https://res.cloudinary.com/dam7wdzvx/image/upload/v1707475175/zbyneksvoboda/portfolio/autokempkokorin_fl48br.webp"
              >
                <source src="/autokempkokorin.mp4" type="video/mp4" />
              </video>
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              AutokempKokorin.cz{" "}
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Web pro autokemp Kokořín. Plně responzivní, přehledné a rychlé
              webové stránky.
            </p>
            <ul className="pl-4 mt-4 border-l-2">
              <li>Tailwind, Next.js</li>
            </ul>
            {/* <a className="text-indigo-500 inline-flex items-center mt-3">
              více o projektu
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>

          <div className="p-4 xl:w-1/3 sm:pb-12 pb-24">
            <div className="rounded-lg h-[400px] md:h-[500px]">
              <Image
                width={600}
                height={600}
                alt="content"
                className="object-cover object-top h-full w-full shadow-xl"
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1707305025/zbyneksvoboda/portfolio/freedomarboriculture_m5u8id.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Freedomarboriculture.cz
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Webová prezentace odborného arboristického poradenství.
              Jednoduché, rychlé a plně responzivní webové stránky.
            </p>
            <ul className="pl-4 mt-4 border-l-2">
              <li>Kódování vzhledu</li>
              <li>Plně responzivní</li>
              <li>Next.js</li>
              <li>DNS u Netlify</li>
              <li>e-mail u profi.seznam</li>
            </ul>
            {/* <a className="text-indigo-500 inline-flex items-center mt-3">
              více o projektu
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
          <div className="p-4 xl:w-1/3 sm:pb-12 pb-24">
            <div className="rounded-lg h-[400px] md:h-[500px]">
              <Image
                width={600}
                height={600}
                alt="content"
                className="object-cover object-top h-full w-full shadow-xl"
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532482/zbyneksvoboda/portfolio/hara_hif9go.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Harasov.eu
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Webová prezentace letoviska Harasov, podle předlohy{" "}
              <a
                href="http://mowshe.cz/"
                target="_blank"
                className="underline-offset-4 underline"
              >
                mowshe.cz
              </a>
              . Obsahuje vše podstatné a přehledně informuje návštěvníky.
              Editovatelný jídelní lístek je jen pomyslnou třešničkou.
            </p>
            <ul className="pl-4 mt-4 border-l-2">
              <li>Kódování vzhledu</li>
              <li>Plně responzivní</li>
              <li>HTML5, CSS3, JS, Bootstrap, PHP</li>
            </ul>
            {/* <a className="text-indigo-500 inline-flex items-center mt-3">
              více o projektu
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>

          <div className="p-4 xl:w-1/3 sm:pb-12 pb-24">
            <div className="rounded-lg h-[400px] md:h-[500px]">
              <Image
                width={600}
                height={600}
                alt="content"
                className="object-cover object-top h-full w-full shadow-xl"
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532480/zbyneksvoboda/portfolio/koko_v8yq1r.png"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Kokostezky.cz
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Kompletní redisign webu pro MTB / gravel jezdce v lokalitě
              Kokořínského údolí. S důrazem na rychlost webu a jeho přehlednost
              jsme dospěli k podobě, která se stále vylepšuje. Primárním účelem
              je informovat o uzavírkách trailů a sdílení tras.
            </p>
            <ul className="pl-4 mt-4 border-l-2">
              <li>Kompletní zpracování</li>
              <li>Plně responzivní</li>
              <li>HTML5, CSS3, TailwindCss, JS</li>
            </ul>
            {/* <a className="text-indigo-500 inline-flex items-center mt-3">
              více o projektu
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>

          <div className="p-4 xl:w-1/3 sm:pb-12 pb-24">
            <div className="rounded-lg h-[400px] md:h-[500px]">
              <Image
                width={600}
                height={600}
                alt="content"
                className="object-cover object-top h-full w-full shadow-xl"
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532484/zbyneksvoboda/portfolio/zh_zcfi1p.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Zodpovědný hub
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Pro nově vzniklý komunitní prostor, showroom e-shopu{" "}
              <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
                className="underline-offset-4 underline"
              >
                ZodpovednaVyuka.cz
              </a>{" "}
              a přednáškový prostor jsem vytvořil jednoduchou, plně responzivní
              a rychlou prezentaci postavenou na moderních technologiích.
              Některé funkce (automatizace) jsou stále připraveny k nasazení, až
              se celý projekt více rozběhne.
            </p>
            <ul className="pl-4 mt-4 border-l-2">
              <li>Kompletní zpracování</li>
              <li>Plně responzivní</li>
              <li>HTML5, CSS3, TailwindCss, JS, Next.js</li>
            </ul>
            {/* <a className="text-indigo-500 inline-flex items-center mt-3">
              více o projektu
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
        </div>
      </div>

      {/* header eshopy */}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              E-shopy{" "}
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              E-shopová řešení stavím na osvědčených platformách Shoptet a
              Woocommerce, která úpravami doladím pro klienta ke spokojenosti
              jeho i jeho zákazníků.
              <br />
              <br />
              Od návrhu struktury, jednotné vizuální podoby až po automatické
              plnění a hromadné aktualizace produktů.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {/* HEXFIT */}
          <div className="p-4 xl:w-1/3 sm:pb-12 pb-24">
            <div className="rounded-lg h-[400px] md:h-[500px]">
              <Image
                width={600}
                height={600}
                alt="content"
                className="object-cover object-top h-full w-full shadow-xl"
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532480/zbyneksvoboda/portfolio/hexfit_t80dxv.png"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Hexfit.eu <span className="text-xs">(verze 2023)</span>
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Vyladění a odlehčení Shoptet šablony podle přání klientky
              (předlohou je zahraniční e-shop s podobnou tématikou). Přidání
              některých funkcí (upravení zobrazování kategorií, úpravení
              košíku).
            </p>
            <p className="text-base leading-relaxed mt-2 flex justify-end w-full">
              Již neaktuální verze
            </p>
            <ul className="pl-4 mt-4 border-l-2">
              <li>Úprava šablony Samba</li>
              <li>HTML5, CSS3, JavaScript</li>
            </ul>
          </div>

          {/* ZOE */}
          <div className="p-4 xl:w-1/3 sm:pb-12 pb-24">
            <div className="rounded-lg h-[400px] md:h-[500px]">
              <Image
                width={600}
                height={600}
                alt="content"
                className="object-cover object-top h-full w-full shadow-xl"
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532485/zbyneksvoboda/portfolio/zoe_ljgo8f.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Zoe8.eu <span className="text-xs">(verze 2022)</span>
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Úprava šablony s důrazem na vyladění zobrazení detailu produktu.
              Celkové minimalistické pojetí designu, které nechalo vyniknout
              unikátním hračkám.
            </p>
            <p className="text-base leading-relaxed mt-2 flex justify-end w-full">
              Již neaktuální verze
            </p>
            <ul className="pl-4 mt-4 border-l-2">
              <li>Úprava šablony</li>
              <li>Grafický návrh detailu produktu</li>
              <li>HTML5, CSS3, JavaScript</li>
            </ul>
          </div>
          {/* Zodpovedna vyuka */}
          <div className="p-4 xl:w-1/3 sm:pb-12 pb-24">
            <div className="rounded-lg h-[400px] md:h-[500px]">
              <Image
                width={600}
                height={600}
                alt="content"
                className="object-cover object-top h-full w-full shadow-xl"
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532484/zbyneksvoboda/portfolio/zodpovednavyuka_gntjx2.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Zodpovědná Výuka
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Nakódování unikátní šablony pro Shoptet podle návrhu grafika.
            </p>
            <p className="text-base leading-relaxed mt-2">
              Tvorba samostatných webových stránek pro vybrané produkty,
              ostylování doplňků třetích stran, aby graficky pasovaly do
              vizuální podoby e-shopu.
            </p>
            <p className="text-base leading-relaxed mt-2">
              Návrh a správa newsletterových kampaní.
            </p>
            <ul className="pl-4 mt-4 border-l-2">
              <li>Velká úprava šablony Classsic</li>
              <li>HTML5, CSS3, JavaScript</li>
              <li>TailwindCSS na Landing pages</li>
            </ul>
            {/* <Link
              className="text-indigo-500 inline-flex items-center mt-3 font-extrabold underline-offset-4 underline"
              href="/zodpovednavyuka"
            >
              více o projektu
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link> */}
          </div>
          {/* Ergo-products */}
          <div className="p-4 xl:w-1/3 sm:pb-12 pb-24">
            <div className="rounded-lg h-[400px] md:h-[500px]">
              <Image
                width={600}
                height={600}
                alt="content"
                className="object-cover object-top h-full w-full shadow-xl"
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532475/zbyneksvoboda/portfolio/ergo_fhza7f.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Ergo-product.cz
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Vyladění Shoptet Classic šablony se zachováním firemních barev.
              Příprava nových bannerů, vložení videa do popisku kategorie.
              Odlehčení detailu produktu.
            </p>
            <ul className="pl-4 mt-4 border-l-2">
              <li>Drobné úpravy šablony Classsic</li>
              <li>HTML5, CSS3, JavaScript</li>
              <li>Návrh podoby newsletterů</li>
            </ul>
            {/* 
            <a className="text-indigo-500 inline-flex items-center mt-3">
              více o projektu
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>

          <div className="p-4 xl:w-1/3 sm:pb-12 pb-24">
            <div className="rounded-lg h-[400px] md:h-[500px]">
              <Image
                width={600}
                height={600}
                alt="content"
                className="object-cover object-top h-full w-full shadow-xl"
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532475/zbyneksvoboda/portfolio/fly5_u94wwz.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Fly5.cz
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Minimalisticky a čistě pojaté grafické zpracování, nic navíc, co
              by mohlo odpoutávat pozornost návštěvníka od nabízených služeb.
            </p>
            <ul className="pl-4 mt-4 border-l-2">
              <li>Úprava šablony</li>
              <li>Vlastní fotn, barvy</li>
              <li>Minimalistivký vzhled</li>
              <li>Přidání videa do banneru</li>
              <li>Vyladění detailu produktu a průchodu košíkem</li>
              <li>HTML5, CSS3, JS</li>
            </ul>

            {/* <a className="text-indigo-500 inline-flex items-center mt-3">
              více o projektu
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>

          <div className="p-4 xl:w-1/3 sm:pb-12 pb-24">
            <div className="rounded-lg h-[400px] md:h-[500px]">
              <Image
                width={600}
                height={600}
                alt="content"
                className="object-cover object-top h-full w-full shadow-xl"
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532482/zbyneksvoboda/portfolio/kolemkrku2_gs44yl.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Kolem krku
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Postupnými drobnými úpravami jsme pozvedli šablonu Shoptetu opět o
              kousek výš. Kladen velký důraz na unikátní produkty.
            </p>
            <ul className="pl-4 mt-4 border-l-2">
              <li>Úprava zobrazení bannerů</li>
              <li>Vyladění hlavního menu</li>
              <li>Zjednodušení zobrazení kategorie</li>
              <li>Doladění detailu produktů</li>
              <li>Oprava zobrazení filtru produktů</li>
            </ul>
            {/* <div className="bg-white m-4 rounded-2xl drop-shadow-md divide-y-2 divide-solid">
              <div className="text-sm tracking-wide text-gray-800 p-4">
                ... děkujeme za perfektně odvedenou práci. Vše proběhlo přesně
                podle domluvy a velmi rychle...
              </div>
              <div className="text-sm tracking-wide text-gray-800 p-4">
                Jan Bláha, kolem-krku.cz
              </div>
            </div> */}
            {/* <a className="text-indigo-500 inline-flex items-center mt-3">
              více o projektu
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
        </div>
      </div>

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Webové aplikace a skripty
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Postavit řešení na &quot;zelené louce&quot; je výzva, které se
              nazaleknu a celý proces od návrhu až po spuštění výsledného
              projektu si užívám.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 xl:w-1/3 sm:pb-12 pb-24">
            <div className="rounded-lg h-[400px] md:h-[500px]">
              <Image
                width={600}
                height={600}
                alt="content"
                className="object-cover object-top h-full w-full shadow-xl"
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532475/zbyneksvoboda/portfolio/faber_g8luvh.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Faberpoint.eu{" "}
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Udržte si přehled nad velkým množstvím dílů stavebnice Faber od{" "}
              <a
                href="https://www.antonieemma.cz/"
                target="_blank"
                className="underline-offset-4 underline"
              >
                AntonieEmma.cz
              </a>{" "}
              s pomocí aplikace, která Vám ukáže i chybějící díly do vysněné
              dětské prolézačky.
            </p>
            <ul className="pl-4 mt-4 border-l-2">
              <li>Kompletní zpracování</li>
              <li>Plně responzivní</li>
              <li>Registrace uživatelů</li>
              <li>Zasílání seznamů dílů na mail</li>
              <li className="font-bold">
                Přidání chybějícíh dílů přímo do košíku
              </li>
              <li>HTML5, CSS3, Bootstrap, JS, PHP, MySQL</li>
            </ul>
            {/* <a className="text-indigo-500 inline-flex items-center mt-3">
              více o projektu
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>

          <div className="p-4 xl:w-1/3 sm:pb-12 pb-24">
            <div className="rounded-lg h-[400px] md:h-[500px]">
              <Image
                width={600}
                height={600}
                alt="content"
                className="object-cover object-top h-full w-full shadow-xl"
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532483/zbyneksvoboda/portfolio/shaper-form_a6wsw7.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Výpočet velikosti obuvi{" "}
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Ani samostatně žijící formulář (v tomto případě vložený do
              Shoptetu) pro výpočet dle poskytnutých pravidel nebyl problém.
              <br />
              Při realizaci reklamačního formuláře pro{" "}
              <a
                href="https://www.ergo-product.cz/reklamace/"
                target="_blank"
                className="underline-offset-4 underline"
              >
                Ergo-produkt - reklamace
              </a>{" "}
              jsem zapojil i vlastní server pro rozesílání mailů a spracovávání
              přiložených souborů.
            </p>

            <ul className="pl-4 mt-4 border-l-2">
              <li>HTML5, CSS3, JS ...</li>
            </ul>
            {/* <a className="text-indigo-500 inline-flex items-center mt-3">
              více o projektu
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>

          <div className="p-4 xl:w-1/3 sm:pb-12 pb-24">
            <div className="rounded-lg h-[400px] md:h-[500px]">
              <Image
                width={600}
                height={600}
                alt="content"
                className="object-cover object-top h-full w-full shadow-xl"
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532482/zbyneksvoboda/portfolio/machmotors_uxeq9j.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Drobná úprava vyhledávní
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Není malých projektů.
              <br />
              Ostylování vyhledávacího pole je jedním z nich.
            </p>
            {/* <a className="text-indigo-500 inline-flex items-center mt-3">
              více o projektu
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
