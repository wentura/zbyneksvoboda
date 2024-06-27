import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full sm:bg-slate-100 shadow-xl">
      <div className="relative flex flex-wrap max-w-full justify-between md:justify-start lg:max-w-screen-2xl px-4 md:py-0 mx-auto max-h-96 md:max-h-[700px] overflow-hidden">
        <div className="w-full my-12 lg:max-w-xl xl:max-w-2xl mx-0 md:mx-4 lg:mx-0">
          <div className="mx-auto">
            <div className="relative mb-4 lg:mt-16 p-8 bg-slate-100/70 backdrop-blur-sm rounded-2xl z-20">
              <p className="inline-block mb-0 text-lg font-bold md:font-normal text-gray-900  pt-12">
                tvořím
              </p>
              {/* <h2 className="max-w-lg mb-2 text-2xl font-black text-gray-900 sm:text-4xl sm:leading-none">
                Zbyněk Svoboda
              </h2> */}
              <h1 className="max-w-xl md:pb-20 text-3xl font-extrabold text-gray-900 sm:text-5xl md:text-7xl sm:leading-none uppercase leading-10">
                rychlé,
                <br />
                přehledné&nbsp;a
                <br />
                moderní weby <br className="block md:hidden" />
              </h1>

              {/* <Link href="#about_me">
                <p className="bg-green-300 text-lg w-fit mb-8 px-4 py-2 rounded-xl shadow-md mx-auto md:mx-0 text-gray-900 font-extrabold zs-shadow">
                  Jsem Vám k dispozici
                </p>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="flex mr-0 lg:ml-0 justify-center w-full md:w-1/2 rotate-6 mt-[-1200px] md:mt-[-800px] overflow-x-hidden">
          <div className="scroll-parent flex ">
            <div className="scroll-element">
              <Image
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532482/zbyneksvoboda/portfolio/hara_hif9go.webp"
                alt=""
                width="600"
                height="800"
                className="w-[600px] lg:h-[800px]"
              />
              <Image
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1707305025/zbyneksvoboda/portfolio/freedomarboriculture_m5u8id.webp"
                alt=""
                width="600"
                height="600"
                className="w-[600px] h-[600px]"
              />
              {/* <Image
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532480/zbyneksvoboda/portfolio/hexfit_t80dxv.png"
                alt=""
                width="600"
                height="800"
                className="w-[600px] lh-[800px]"
              /> */}
              <Image
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532480/zbyneksvoboda/portfolio/koko_v8yq1r.png"
                alt=""
                width="600"
                height="800"
                className="w-[600px] h-[800px]"
              />
              <Image
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532485/zbyneksvoboda/portfolio/zoe_ljgo8f.webp"
                alt=""
                width="600"
                height="800"
                className="w-[600px] h-[800px]"
              />
              <Image
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532484/zbyneksvoboda/portfolio/zodpovednavyuka_gntjx2.webp"
                alt=""
                width="600"
                height="800"
                className="w-[600px] h-[800px]"
              />
              <Image
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532474/zbyneksvoboda/portfolio/doom_fgikav.webp"
                alt=""
                width="600"
                height="800"
                className="w-[600px] h-[800px]"
              />
              <Image
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532474/zbyneksvoboda/portfolio/ae_dcvvpa.webp"
                alt=""
                width="600"
                height="800"
                className="w-[600px] h-[800px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
