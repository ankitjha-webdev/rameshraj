import React from 'react'
import profile from '../assets/images/profile.png'
export const About = () => {
  return (
    <>
    <>
  <section className="container mx-auto flex flex-col items-center px-12 py-28 sm:flex-row">
    <img
      alt="Profile"
      className="mb-10 h-24 w-full pr-16 pl-16 dark:contrast-200 dark:invert sm:mb-0 sm:h-fit sm:w-1/2 sm:pr-24 sm:pl-0"
      src={profile}
    />
    <div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
      <h2 className="mb-4 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl">
        About Me
      </h2>
      <p className="leading-relaxed text-slate-700 dark:text-slate-400">
        Each transaction is guarded by advanced and certified security system.
      </p>
      <a
        className="group relative mx-auto mt-8 inline-block font-semibold text-slate-900 underline decoration-blue-300 decoration-2 underline-offset-8 transition hover:decoration-slate-700 dark:text-slate-200 dark:hover:decoration-slate-200 sm:mx-0"
        href="#"
      >
        View work!
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          width="1.2em"
          height="1.2em"
          className="absolute bottom-0 -right-6 scale-x-0 transition group-hover:scale-x-100"
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
      </a>
    </div>
  </section>

  {/* <section className="container mx-auto flex flex-col items-center px-12 py-28 sm:flex-row-reverse">
    <img
      alt="Security"
      className="mb-10 h-24 w-full pr-16 pl-16 dark:contrast-200 dark:invert sm:mb-0 sm:h-fit sm:w-1/2 sm:pl-24 sm:pr-0"
      src="https://react-tailwind-snippets.vercel.app/illustrations/undraw_security_on_re_e491.svg"
    />
    <div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
      <h2 className="mb-4 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl">
        Multi layer security
      </h2>
      <p className="leading-relaxed text-slate-700 dark:text-slate-400">
        Support fingerprint and face recognition for any transaction. More
        options coming soon.
      </p>
      <a
        className="group relative mx-auto mt-8 inline-block font-semibold text-slate-900 underline decoration-violet-300 decoration-2 underline-offset-8 transition hover:decoration-slate-700 dark:text-slate-200 dark:hover:decoration-slate-200 sm:mx-0"
        href="#"
      >
        Supported authentication
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          width="1.2em"
          height="1.2em"
          className="absolute bottom-0 -right-6 scale-x-0 transition group-hover:scale-x-100"
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
      </a>
    </div>
  </section>
  <section className="container mx-auto flex flex-col items-center px-12 py-28 sm:flex-row">
    <img
      alt="Security"
      className="mb-10 h-24 w-full pr-16 pl-16 dark:contrast-200 dark:invert sm:mb-0 sm:h-fit sm:w-1/2 sm:pr-24 sm:pl-0"
      src="https://react-tailwind-snippets.vercel.app/illustrations/undraw_security_on_re_e491.svg"
    />
    <div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
      <h2 className="mb-4 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl">
        Meaningful insight
      </h2>
      <p className="leading-relaxed text-slate-700 dark:text-slate-400">
        Visualize transactions with multiple chart option to get insight as you
        need.
      </p>
    </div>
  </section> */}
</>

    </>
  )
}
