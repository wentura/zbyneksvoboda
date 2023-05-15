import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  let prescription = {
    prescriptionDate: new Date(), // Today
    prescriptionExpirationDate: 23, // Days to add
  };

  let date = new Date(
    new Date(prescription.prescriptionDate).setDate(
      prescription.prescriptionDate.getDate() +
        prescription.prescriptionExpirationDate
    )
  ).toLocaleDateString("cs-CZ");
  // let den = date.getMonth;

  return (
    <div className="w-full sm:bg-slate-100 shadow-xl">
      <div className="relative flex flex-wrap max-w-full justify-between md:justify-start lg:max-w-screen-xl px-4 md:py-0 mx-auto max-h-96 md:max-h-[700px] overflow-y-hidden ">
        <div className="my-12 lg:max-w-md xl:max-w-lg mx-0 md:mx-4 lg:mx-0 ">
          <div className="mx-auto">
            <div className="relative mb-4 lg:mt-16 p-12 md:p-12 lg:p-12 bg-slate-100/70 backdrop-blur-sm  rounded-2xl z-20">
              <div>
                <p className="inline-block mb-0 text-base font-bold md:font-normal text-gray-900">
                  konzultant a tvůrce webů
                </p>
              </div>
              <h2 className="max-w-lg mb-2 text-3xl  text-gray-900 sm:text-5xl sm:leading-none">
                Zbyněk
              </h2>
              <h1 className="max-w-lg pb-4 md:pb-20 text-5xl text-gray-900 sm:text-7xl sm:leading-none">
                SVOBODA
              </h1>
              <p className="hidden md:flex md:text-base text-gray-700 text-md max-w-xl">
                Jsem webový vývojář na volné noze.
              </p>
              <Link href="#about_me">
                <p className="bg-green-300 text-lg w-fit my-4 px-4 py-2 rounded-xl shadow-md mx-auto md:mx-0 text-gray-900 font-extrabold">
                  Jsem Vám k dispozici
                </p>
              </Link>
              <p className="text-sm">
                {/* Začněme dnes, ale pracovat na Vašem projektu mohu až {date} */}
              </p>
            </div>
          </div>
        </div>
        <div className="flex mr-0 lg:ml-0 justify-center w-full md:w-1/2 rotate-6 mt-[-1200px] md:mt-[-800px] overflow-hidden">
          <div className="scroll-parent flex ">
            <div className="scroll-element">
              <Image
                src="/img/portfolio/hara.jpg"
                alt=""
                width="600"
                height="800"
                className="w-[600px] lg:h-[800px]"
              />
              <Image
                src="/img/portfolio/hexfit.png"
                alt=""
                width="600"
                height="800"
                className="w-[600px] lh-[800px]"
              />
              <Image
                src="/img/portfolio/koko.png"
                alt=""
                width="600"
                height="800"
                className="w-[600px] lh-[800px]"
              />
              <Image
                src="/img/portfolio/zoe.png"
                alt=""
                width="600"
                height="800"
                className="w-[600px] lh-[800px]"
              />
              <Image
                src="/img/portfolio/zv.jpg"
                alt=""
                width="600"
                height="800"
                className="w-[600px] lh-[800px]"
              />
              <Image
                src="/img/portfolio/doom.png"
                alt=""
                width="600"
                height="800"
                className="w-[600px] lh-[800px]"
              />
              <Image
                src="/img/portfolio/ae.png"
                alt=""
                width="600"
                height="800"
                className="w-[600px] lh-[800px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
