import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <>
    <footer className="mt-28 bg-slate-50 dark:bg-black">
  <div className="container mx-auto flex flex-col items-start space-y-12 px-8 pb-8 pt-12 md:flex-row md:space-y-0 md:space-x-12 md:px-12">
    <div className="flex w-full flex-col space-y-4 text-center md:w-2/5 md:text-left">
    <div className="w-full text-center text-lg font-bold sm:w-fit sm:text-left">
        <span className="text-blue-600">Ramesh </span>
        <span className="dark:text-slate-100"> Raj </span>
      </div>
      <p className="text-sm text-slate-600">
      Prominent figure in politics, advocating social welfare and wildlife conservation with exceptional dedication.
      </p>
    </div>
    <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
      <div className="text-sm font-semibold">Links</div>
      <ul className="text-sm">
        <li className="pt-3">
          <Link
            className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
            to="/about"
          >
            About
          </Link>
        </li>
        <li className="pt-3">
          <Link
            className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
            to="/contact"
          >
           Contact
          </Link>
        </li>
        <li className="pt-3">
          <Link
            className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
            to="/memories"
          >
           Gallery
          </Link>
        </li>
        {/* <li className="pt-3">
          <a
            className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Terms of Service
          </a>
        </li>
        <li className="pt-3">
          <a
            className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Privacy Policy
          </a>
        </li>
        <li className="pt-3">
          <a
            className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Cookie Policy
          </a>
        </li> */}
      </ul>
    </div>
    <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
      <div className="text-sm font-semibold">Social</div>
      <ul className="text-sm">
        <li className="pt-3">
         <Link
            className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
            to="https://www.youtube.com/@snakerescuemuz"
            rel="noopener noreferrer"
            target="_blank"
          >
            Youtube
          </Link>
        </li>
        <li className="pt-3">
          <Link
            className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
            to="https://www.facebook.com/rameshraj.aap"
            rel="noopener noreferrer"
            target="_blank"
          >
            Facebook
          </Link>
        </li>
        <li className="pt-3">
          <Link
            className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
            to="https://twitter.com/snake_rescue"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </Link>
        </li>
        {/* <li className="pt-3">
          <a
            className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Invoice Factoring
          </a>
        </li> */}
      </ul>
    </div>
    {/* <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
      <div className="text-sm font-semibold text-slate-600">Partnership</div>
      <ul className="text-sm">
        <li className="pt-3">
          <a
            className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Loan Partner
          </a>
        </li>
        <li className="pt-3">
          <a
            className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Affiliate
          </a>
        </li>
        <li className="pt-3">
          <a
            className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Brand Guideline
          </a>
        </li>
      </ul>
    </div> */}
  </div>
  <div className="container mx-auto border-t pb-12 border-slate-200 p-8 text-center text-sm text-slate-600 dark:border-slate-900 md:flex-row md:px-12">
  &#169; 2023 Ramesh Raj. All rights reserved. | <span> Developed by <a className="text-blue-500 font-semibold" href="http://www.ankitkumar.tech" target="_blank" rel="noreferrer">@Ankit Kumar</a> </span>
  </div>
</footer>
    </>
  )
}

export default Footer
