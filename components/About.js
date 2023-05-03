import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      id="about_me"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <Link
            href="/"
            aria-label="Zbyněk Svoboda"
            title="Zbyněk Svoboda"
            className="inline-block"
          >
            <h2 className="max-w-lg mb-2 text-3xl  text-gray-900 sm:text-5xl sm:leading-none">
              Zbyněk
            </h2>
            <h1 className="max-w-lg pb-2 text-5xl text-gray-900 sm:text-7xl sm:leading-none">
              SVOBODA
            </h1>
          </Link>
          <p className="mb-6 text-gray-900">
            Váš webový vývojář na volné noze.
          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="text-2xl pb-8">Neváhejte se mi ozvat</div>
          <div className="flex items-center space-x-4">
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>
                  <a
                    href="mailto:info@zbyneksvoboda.cz"
                    className="underline font-semibold text-xl underline-offset-4 decoration-gray-400"
                  >
                    info@ZbynekSvoboda.cz
                  </a>
                </span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>
                  <a
                    href="tel:+420773687792"
                    className="underline font-semibold text-xl underline-offset-4 decoration-gray-400"
                  >
                    (+420) 773 68 77 92
                  </a>
                </span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2 sm:mr-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="7" y="3" width="14" height="14" rx="2" />
                  <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
                </svg>
                <span>IČO: 74811002</span>
                <span className="text-gray-500 text-xs">
                  , nejsem plátce DPH
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="object-cover w-80 h-80 lg:w-[400px] lg:h-[400px] rounded-2xl shadow mx-auto"
            src="/img/me2maly.jpg"
            alt="Hexfit"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
