import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full bg-slate-100 shadow-xl">
      <div className="flex flex-wrap max-w-full lg:max-w-screen-xl px-4 md:py-0 mx-auto max-h-[700px] overflow-y-hidden bg-slate-100">
        <div className="my-12 lg:max-w-md xl:max-w-lg mx-auto md:mx-4 lg:mx-0">
          <div className="mx-auto">
            <div className="mb-4 lg:mt-24 lg:pl-8">
              <div>
                <p className="inline-block mb-0 text-base text-gray-900">
                  konzultant a tvůrce webů
                </p>
              </div>
              <h2 className="max-w-lg mb-2 text-3xl  text-gray-900 sm:text-5xl sm:leading-none">
                Zbyněk
              </h2>
              <h1 className="max-w-lg pb-20 text-5xl text-gray-900 sm:text-7xl sm:leading-none">
                SVOBODA
              </h1>
              <p className="md:text-base text-gray-700 text-md max-w-xl">
                Jsem webový vývojář na volné noze.
              </p>
              <Link href="#about_me">
                <p className="bg-green-300 text-lg w-fit my-4 px-4 py-2 rounded-xl shadow-md">
                  Jsem Vám k dispozici
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex mr-0 lg:ml-0 justify-center md:w-1/2 relative rotate-0 lg:rotate-6 mt-[-800px] overflow-hidden">
          <div className="scroll-parent hidden md:flex ">
            <div className="scroll-element">
              <Image
                src="/img/portfolio/hara.jpg"
                alt=""
                width="400"
                height="600"
                className="w-[390px] h-[520px] lg:w-[600px] lg:h-[800px]"
              />
              <Image
                src="/img/portfolio/hexfit.png"
                alt=""
                width="400"
                height="600"
                className="w-[390px] h-[520px] lg:w-[600px] lg:h-[800px]"
              />
              <Image
                src="/img/portfolio/koko.png"
                alt=""
                width="400"
                height="600"
                className="w-[390px] h-[520px] lg:w-[600px] lg:h-[800px]"
              />
              <Image
                src="/img/portfolio/zoe.png"
                alt=""
                width="400"
                height="600"
                className="w-[390px] h-[520px] lg:w-[600px] lg:h-[800px]"
              />
              <Image
                src="/img/portfolio/zv.jpg"
                alt=""
                width="400"
                height="600"
                className="w-[390px] h-[520px] lg:w-[600px] lg:h-[800px]"
              />
              <Image
                src="/img/portfolio/doom.png"
                alt=""
                width="400"
                height="600"
                className="w-[390px] h-[520px] lg:w-[600px] lg:h-[800px]"
              />
              <Image
                src="/img/portfolio/ae.png"
                alt=""
                width="400"
                height="600"
                className="w-[390px] h-[520px] lg:w-[600px] lg:h-[800px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
