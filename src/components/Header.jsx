import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="dark:text-slate-200">
  <header className="container mx-auto flex w-full items-center justify-between py-4 px-6">
    <Link to="/">
      <div className="w-full text-center text-lg font-bold sm:w-fit sm:text-left">
        <span className="text-blue-600">Ramesh </span>
        <span className="dark:text-slate-100"> Raj </span>
      </div>
    </Link>
    <nav className="hidden bg-white text-base dark:bg-slate-900 sm:block">
      <ul className="flex items-center space-x-2">
        <li className="group relative">
          <Link
            className="block whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="group relative">
          <Link
            className="block whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
            to="#"
          >
            Services
          </Link>
          <ul className="invisible absolute z-30 space-y-2 rounded-lg border border-slate-50 bg-white p-4 opacity-0 shadow-xl transition-opacity delay-75 ease-in-out group-hover:visible group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900">
            <li>
              <Link
                className="undefined block whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                to="/services/web-development"
              >
                Web development
              </Link>
            </li>
            <li>
              <Link
                className="undefined block whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                to="/services/digital-marketing"
              >
                Digital marketing
              </Link>
            </li>
            <li>
              <Link
                className="undefined block whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                to="/services/brand-strategy"
              >
                Brand strategy
              </Link>
            </li>
          </ul>
        </li>
        <li className="group relative">
          <Link
            className="block whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
            to="/about"
          >
            About
          </Link>
        </li>
        <li className="group relative">
          <Link
            className="block whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-900 no-underline transition hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-50"
            to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    <button
      className="block text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 sm:hidden"
      title="Open navigation menu"
    >
      <svg
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        width="1.2em"
        height="1.2em"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
    <nav className="fixed -right-1/2 top-0 z-20 h-full w-1/2 transform overflow-y-auto bg-white py-4 text-base transition dark:bg-slate-900 sm:hidden">
      <ul className="flex flex-col space-y-2">
        <li className="text-right">
          <button className="px-6 py-2 text-slate-400 hover:text-slate-900 dark:hover:text-slate-50">
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14m-4 4l4-4m-4-4l4 4"
              />
            </svg>
          </button>
        </li>
        <li className="group relative w-full overflow-x-visible text-right">
          <Link
            className="mx-4 block whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="group relative w-full overflow-x-visible text-right">
          <Link
            className="mx-4 block whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
            to="/"
          >
            Services
          </Link>
          <ul className="h-0 space-y-2 overflow-y-hidden bg-slate-50 px-4 py-0 transition-all delay-75 ease-in-out group-hover:h-full group-hover:py-4 dark:bg-slate-800">
            <li>
              <Link
                className="undefined block whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                to="/services/web-development"
              >
                Web development
              </Link>
            </li>
            <li>
              <Link
                className="undefined block whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                to="/services/digital-marketing"
              >
                Digital marketing
              </Link>
            </li>
            <li>
              <Link
                className="undefined block whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                to="/services/brand-strategy"
              >
                Brand strategy
              </Link>
            </li>
          </ul>
        </li>
        <li className="group relative w-full overflow-x-visible text-right">
          <Link
            className="mx-4 block whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
            to="/about"
          >
            About
          </Link>
        </li>
        <li className="group relative w-full overflow-x-visible text-right">
          <Link
            className="mx-4 block whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-900 no-underline transition hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-50"
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
</div>
  )
}

export default Header