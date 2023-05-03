import Image from "next/image";
export default function Logos() {
  return (
    <div className="hidden md:flex px-4 my-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 gap-4 row-gap-3 sm:grid-cols-4 lg:grid-cols-6">
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-24 sm:h-24">
          <Image
            src="/img/logos/doom.png"
            alt="doomentia"
            width="200"
            height="100"
            className="invert"
          />
        </div>

        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-24 sm:h-24">
          <Image
            src="/img/logos/ae-logo.jpg"
            alt="AntonieEmma"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-32 sm:h-24">
          <Image
            src="/img/logos/ep.jpg"
            alt="doomentia"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
        {/* <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-22 sm:h-24">
          <Image
            src="/img/logos/fly5.png"
            alt="doomentia"
            width="200"
            height="100"
            // className="invert"
          />
          &nbsp;&nbsp;Fly5
        </div> */}
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-28 sm:h-24">
          <Image
            src="/img/logos/hara_logo.png"
            alt="Harasov"
            width="200"
            height="100"
            className="invert"
          />
        </div>
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-24 sm:h-24">
          <Image
            src="/img/logos/hexfit.png"
            alt="doomentia"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-24 sm:h-24">
          <Image
            src="/img/logos/kk.jpeg"
            alt="doomentia"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-24 sm:h-24">
          <Image
            src="/img/logos/koko.jpg"
            alt="doomentia"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
        <div className="flex items-center justify-center w-12 h-10 mx-auto mb-4 sm:w-40 sm:h-24">
          <Image
            src="/img/logos/zv.png"
            alt="doomentia"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
        <div className="flex items-center justify-center w-12 h-10 mx-auto mb-4 sm:w-16 sm:h-24">
          <Image
            src="/img/logos/zoe.png"
            alt="doomentia"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
        <div className="flex items-center justify-center w-12 h-10 mx-auto mb-4 sm:w-32 sm:h-24">
          <Image
            src="/img/logos/krakatit.png"
            alt="doomentia"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
        <div className="flex items-center justify-center w-12 h-10 mx-auto mb-4 sm:w-26 sm:h-24">
          <Image
            src="/img/logos/fly5.png"
            alt="doomentia"
            width="200"
            height="100"
            // className="invert"
          />
          &nbsp;&nbsp;Fly5
        </div>
        <div className="flex items-center justify-center w-12 h-10 mx-auto mb-4 sm:w-40 sm:h-24">
          <Image
            src="/img/logos/zh.png"
            alt="doomentia"
            width="200"
            height="100"
            // className="invert"
          />
        </div>
      </div>
    </div>
  );
}
