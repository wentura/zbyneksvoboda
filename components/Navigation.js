import Link from "next/link";
import React, { useState } from "react";
// casesensitive?
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  console.log("toggleMenu");
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="navbar w-full sticky top-0 bg-white">
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            href="/"
            aria-label="Zbyněk SVOBODA"
            title="Zbyněk SVOBODA"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
              Zbyněk SVOBODA
            </span>
          </Link>
          <ul className="lg:flex items-center hidden space-x-8">
            <li>
              <Link
                href="#s_cim_vam_pomohu"
                aria-label="S čím vám pomohu"
                title="S čím vám pomohu"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                S čím vám pomohu
              </Link>
            </li>

            <li>
              <Link
                href="#reference"
                aria-label="Reference"
                title="Reference"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Reference
              </Link>
            </li>

            <li>
              <Link
                href="#jak_pracuji"
                aria-label="Spolupráce"
                title="Spolupráce"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Spolupráce
              </Link>
            </li>

            <li>
              <Link
                href="#recenze"
                aria-label="Recenze"
                title="Recenze"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Recenze
              </Link>
            </li>

            <li>
              <Link
                href="#cenik"
                aria-label="Ceník"
                title="Ceník"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Ceník
              </Link>
            </li>

            <li>
              <Link
                href="#about_me"
                aria-label="Kontakt"
                title="Kontakt"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Kontakt
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              type="button"
              className="p-4 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 z-50 bg-white"
              onClick={toggleMenu}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            <nav
              className={`${
                isOpen ? "block" : "hidden"
              } absolute top-0 left-0 right-0 px-0 pt-0 pb-4 z-50 zNavi`}
            >
              <div className="px-1 py-2 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div></div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={toggleMenu}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav className="text-center pb-8">
                  <ul className="space-y-4">
                    <Link
                      href="/"
                      onClick={toggleMenu}
                      aria-label="Zbyněk SVOBODA"
                      title="Zbyněk SVOBODA"
                      className="inline-flex items-center"
                    >
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                        Zbyněk SVOBODA
                      </span>
                    </Link>
                    <li>
                      <Link
                        onClick={toggleMenu}
                        href="#s_cim_vam_pomohu"
                        aria-label="S čím vám pomohu"
                        title="S čím vám pomohu"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        S čím vám pomohu
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={toggleMenu}
                        href="#reference"
                        aria-label="Reference"
                        title="Reference"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Reference
                      </Link>
                    </li>

                    {/* <li>
                      <Link
                        onClick={toggleMenu}
                        href="#jak_pracuji"
                        aria-label="Spolupráce"
                        title="Spolupráce"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Spolupráce
                      </Link>
                    </li> */}

                    <li>
                      <Link
                        onClick={toggleMenu}
                        href="#recenze"
                        aria-label="Recenze"
                        title="Recenze"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Recenze
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={toggleMenu}
                        href="#cenik"
                        aria-label="Ceník"
                        title="Ceník"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Ceník
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={toggleMenu}
                        href="#about_me"
                        aria-label="Kontakt"
                        title="Kontakt"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
