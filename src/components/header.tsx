import { useState } from "react";

export default function HeaderNav() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="relative z-20 w-full border-b border-slate-700 bg-slate-900/95 shadow-lg shadow-black/30 backdrop-blur-sm">
        <div className="mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-center justify-between font-medium text-white"
            role="navigation"
          >
            {/* Brand */}
            <a
              href="#"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg font-semibold text-emerald-400 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="m9 15l-2.968 2.968A2.362 2.362 0 0 1 2 16.298V15l1.357-6.784A4 4 0 0 1 7.279 5h9.442a4 4 0 0 1 3.922 3.216L22 15v1.297a2.362 2.362 0 0 1-4.032 1.67L15 15z" />
                  <path d="m9 5l1 2h4l1-2" />
                </g>
              </svg>
              <span className="select-none">DEV</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0"
                  : ""
              }`}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
                />
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
                />
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
                />
              </div>
            </button>

            {/* Navigation links */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-slate-900/95 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-center lg:overflow-visible lg:bg-transparent lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  href="#about"
                  className="flex items-center gap-2 py-4 px-8 text-white transition-colors duration-300 hover:text-emerald-400 focus:text-emerald-400 focus:outline-none"
                >
                  About
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  href="#contact"
                  className="flex items-center gap-2 py-4 px-8 text-white transition-colors duration-300 hover:text-emerald-400 focus:text-emerald-400 focus:outline-none"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Dark button "Let’s talk" */}
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded bg-emerald-600 px-5 py-2 text-sm font-medium text-white shadow transition hover:bg-emerald-500 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              >
                Let’s talk
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
