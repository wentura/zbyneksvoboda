import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 lg:flex-row">
        <p className="text-sm text-gray-600">© 2024 Zbyněk Svoboda</p>
        {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </Link>
          </li>
        </ul> */}
        <img
          referrerPolicy="no-referrer-when-downgrade"
          src="http://matomo.zbyneksvoboda.cz/matomo.php?idsite=1&amp;rec=1"
          className="border-0"
          alt=""
          width={0}
          height={0}
        />
      </div>
    </div>
  );
}
