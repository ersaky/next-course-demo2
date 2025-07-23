import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7">
      <nav className="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
        <div className="lg:col-span-3 flex items-center">
          <a
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
            href="/"
          >
            <Image
              className="dark:invert"
              src="/images/logo.png"
              alt="BTK Logo"
              width={150}
              height={28}
              priority
            />
          </a>

          <div className="ms-1 sm:ms-2"></div>
        </div>

        <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
          <button
            type="button"
            className="cursor-pointer size-9.5 relative flex justify-center items-center rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-white"
          >
            <span className="sr-only">Search</span>
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </button>

          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-black text-white hover:bg-gray-800 focus:outline-hidden focus:bg-gray-800 transition disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            Giriş Yap
          </button>
        </div>

        <div className="hs-collapse overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6"></div>
      </nav>
    </header>
  );
}
