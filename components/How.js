import Image from "next/image";
import Link from "next/link";

export default function How() {
  return (
    <div
      className="hidden md:flex w-full my-20 bg-slate-100 shadow-xl py-20 scroll-mt-32	"
      id="jak_pracuji"
    >
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-full mb-10 mx-auto text-center md:mb-12">
          <h2 className="max-w-2xl mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-5xl md:mx-auto">
            Jak probíhá spolupráce?
          </h2>
        </div>
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
          <div className="lg:py-6 lg:pr-16">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <h4 className="mb-2 text-lg font-bold">Seznámení s...</h4>
                <p className="text-gray-700">
                  Důkladné seznámení se s myšlenkou, projektem a cíly, kterých
                  se má dosáhnout.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <h4 className="mb-2 text-lg font-bold">Kdo, co, kdy...</h4>
                <p className="text-gray-700">
                  Návrh řešení a předběžná kalkulace doby realizace a ceny.
                </p>
              </div>
            </div>
            {/* <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <h4 className="mb-2 text-lg font-bold">Fáze 1</h4>
                <p className="text-gray-700">
                  Rozdělení projektu na menší logické části, odsouhlasení řešení
                  i rozsahu prací a následná 
                </p>
              </div>
            </div> */}
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <h4 className="mb-2 text-lg font-bold">Tvorba</h4>
                <p className="text-gray-700">
                  Samotná práce na projektu, včetně informování o průběhu prací
                  (pracovní verze viditelná pro klienty)
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <h4 className="mb-2 text-lg font-bold">Testování a ladění</h4>
                <p className="text-gray-700">
                  Finální testování a ladění projektu. Společně si projdeme celý
                  projekt a najdeme mušky, které následně vychytám.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <h4 className="mb-2 text-lg font-bold">Finále</h4>
                <p className="text-gray-700">
                  Dokončení a předání projektu, nasazení do ostrého provozu.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-6 text-gray-600"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polyline
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        points="6,12 10,16 18,8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <h4 className="mb-2 text-lg font-bold">
                  Spokojenost a další spolupráce
                </h4>
                <p className="text-gray-700" />
              </div>
            </div>
            <div className="pt-12">
              Spolupracuji s dalšími specialisty z jiných oblastí, kteří pro Vás
              mohou zpracovat navazující úkony,{" "}
              <span className="text-xs text-gray-800">
                jako např. analýzu Google Analytics, on-line marketing, SEO
                optimalizaci a další
              </span>
              .
            </div>
            <div className="pt-12">
              Po dokončení projektu se jej snažím nadále rozvíjet a
              modernizovat.
              <br />S většinou svých klientů udržuji dlouhodobou spolupráci.
            </div>
            <div className="pt-12">
              <Link href="#about_me">
                <p className="bg-green-300 text-lg w-fit my-4 px-4 py-2 rounded-xl shadow-md mx-auto text-gray-900 font-extrabold zs-shadow">
                  Pusťme se společně do práce
                </p>
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              className="inset-0 object-cover object-bottom w-full shadow-xl h-full lg:absolute lg:h-full opacity-75 rounded-2xl"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685532355/zbyneksvoboda/webdev_lmubur.webp"
              alt=""
              width="1280"
              height="720"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
