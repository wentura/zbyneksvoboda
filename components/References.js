import Image from "next/image";
import Link from "next/link";
export default function References() {
  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20  scroll-mt-6	"
      id="recenze"
    >
      <div className="max-w-full mb-10 mx-auto text-center md:mb-12">
        <h2 className="max-w-2xl mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-5xl md:mx-auto">
          Řekli o mé práci...
        </h2>
      </div>
      <div className="grid gap-16 mx-auto sm:grid-cols-1 lg:grid-cols-2 lg:max-w-screen-lg">
        <div>
          <Image
            className="object-cover w-24 h-24 rounded-full shadow-xl mx-auto"
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532509/zbyneksvoboda/ref/frankova_aegcwj.webp"
            alt="Hexfit"
            width={300}
            height={300}
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold mx-auto">Kristýna Franková</p>
            <p className="mb-4 text-xs text-gray-800 mx-auto">Hexfit.eu</p>
            <p className="text-sm tracking-wide text-gray-800">
              Spolupráci s panem Svobodou vřele doporučuji, veškerá má přání
              ohledně úprav designu byla obratem splněna.
              <br />
              Oceňuji rychlost a kvalitu odvedené práce a přátelskou a rychlou
              komunikaci.
              <br />
              Vše bylo jasně a srozumitelně vysvětleno a společně jsme pozvedli
              design eshopu o několik levelů výš a zlepšili některé funkce.
            </p>
          </div>
        </div>
        <div>
          <Image
            className="object-cover w-24 h-24 rounded-full shadow-xl mx-auto"
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532509/zbyneksvoboda/ref/3_itfy9q.webp"
            alt="Kolem Krku"
            width={300}
            height={300}
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold mx-auto">Jan Bláha</p>
            <p className="mb-4 text-xs text-gray-800 mx-auto">Kolem-krku.cz</p>
            <p className="text-sm tracking-wide text-gray-800">
              Vážený pane Svobodo,
              <br />
              ještě jednou děkujeme za perfektně odvedenou práci při úpravě webu
              kolem-krku.cz. Vše proběhlo přesně podle domluvy a velmi rychle.
              <br />
              Web vypadá perfektně. Mockrát děkujeme za Vaši práci a ochotu. Moc
              rádi Vás doporučíme dále!
            </p>
          </div>
        </div>
        <div>
          <Image
            className="object-cover w-24 h-24 rounded-full shadow-xl mx-auto invert"
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532414/zbyneksvoboda/logos/doom_gdkhes.webp"
            alt="Hexfit"
            width={300}
            height={300}
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold mx-auto">Petr Kolář</p>
            <p className="mb-4 text-xs text-gray-800 mx-auto">Doomentia.com</p>
            <p className="text-sm tracking-wide text-gray-800">
              Zbyňku, díky moc. Super práce. Zůstaňme v kontaktu na další práce.
            </p>
          </div>
        </div>
        <div>
          <Image
            className="object-cover w-24 h-24 rounded-full shadow-xl mx-auto"
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532509/zbyneksvoboda/ref/stepan_maly_cfcxvj.webp"
            alt="AntonieEmma"
            width={300}
            height={300}
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold mx-auto">Štěpán Malý</p>
            <p className="mb-4 text-xs text-gray-800 mx-auto">
              AntonieEmma.cz, Zoe8.eu
            </p>
            <p className="text-sm tracking-wide text-gray-800">
              Super, naprostá m<span className="text-gray-300">r</span>da!
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
