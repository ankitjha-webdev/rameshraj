import { PrevWork } from "../components/PrevWork"
import { About } from "./About"
// import profile from '../assets/images/profile.jpg'
import profile from '../assets/images/profile.png'
import { SocialButton } from "../components/SocialButton"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <>
       <div className="max-w-max mx-auto">
       <section
        class="container mx-auto flex flex-col items-center px-8 py-36 sm:flex-row-reverse sm:px-12"
      >
        <div class="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16">
          <img
            alt="Hanging out with friends"
            class="rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
            src={profile}
          />
        </div>
        <div class="mr-4 w-full text-center sm:w-1/2 sm:text-left">
          <h1
            className="mb-6 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl"
          >
            {/* Hangout, work or just relax? Got it! */}
            {/* A Multifaceted Leader Advocating for Social Welfare and Wildlife Conservation */}
            A Leader for Social Welfare <br/> &amp; Wildlife Conservation
            {/* A Trailblazing Leader Fostering Social <br/> Welfare and Protecting Wildlife */}
          </h1>
          {/* <h1
      class="mb-4 text-3xl font-bold leading-tight dark:text-dark-50 md:text-4xl"
    >
      Train your mind,
      <br />
      be peaceful
    </h1> */}
          <p class="mb-2 leading-relaxed text-slate-700 dark:text-slate-400">
            {/* We provide indoor &amp; outdoor space with delighted yet affordable foods
            &amp; beverages. */}
            Prominent figure in politics, advocating 
            social welfare and wildlife 
            conservation with exceptional dedication.
          </p>
          <ul
            class="mb-8 flex flex-col items-center space-y-1 dark:text-slate-400 sm:items-start"
          >
            <li class="flex items-end">
              <svg
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                class="mr-2 text-blue-300"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m5 12l5 5L20 7"
                ></path>
              </svg>
              <span>Provide employment for all. 
                {/* Various types of coffee beans */}
                </span>
            </li>
            <li class="flex items-end">
              <svg
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                class="mr-2 text-blue-300"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m5 12l5 5L20 7"
                ></path>
              </svg>
              <span>
              Weekly public court
                {/* Coworking area */}
                </span>
            </li>
            <li class="flex items-end">
              <svg
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                class="mr-2 text-blue-300"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m5 12l5 5L20 7"
                ></path>
              </svg>
              <span>
              Resolve public obstacles within 7 days.
                {/* Meeting room */}
                </span>
            </li>
            <li class="flex items-end">
              <svg
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                class="mr-2 text-blue-300"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m5 12l5 5L20 7"
                ></path>
              </svg>
              <span>
              Free electricity (up to 300 units).
                {/* Meeting room */}
                </span>
            </li>
          </ul>
          {/* <div class="flex flex-col space-y-3 md:flex-row md:space-x-2 md:space-y-0">
            <button
              class="rounded-lg border-0 bg-slate-900 px-6 py-3 text-base text-white shadow-lg shadow-slate-300 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 dark:bg-orange-300 dark:text-black dark:shadow-sm dark:shadow-orange-300 dark:hover:bg-orange-400 sm:py-2"
            >
              Open menu
            </button>
            <button
              class="rounded-lg border-0 bg-white px-6 py-3 text-base text-slate-900 shadow-lg shadow-slate-100 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 dark:bg-slate-700 dark:text-slate-300 dark:shadow-sm dark:shadow-slate-800 dark:hover:bg-slate-600 sm:py-2"
            >
              Explore services
            </button>
          </div> */}
          <SocialButton/>
        </div>
      </section>
      {/* <About profile={profile}/> */}
      <section className="container mx-auto flex flex-col items-center px-12 py-28 sm:flex-row sm:px-12">
        <div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16">
          <img
            alt="Profile"
            className="rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
            src={profile}
          />
        </div>
          {/* <img
            alt="Profile"
            className="mb-10 h-24 w-full pr-16 pl-16 dark:contrast-200 dark:invert sm:mb-0 sm:h-fit sm:w-1/2 sm:pr-24 sm:pl-0"
            src={profile}
          /> */}
          <div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
            <h2 className="mb-4 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl">
              About Me
            </h2>
            <p className="leading-relaxed text-slate-700 dark:text-slate-400">
              Ramesh Raj is a distinguished political strategist,
              esteemed consultant, and accomplished author.
              {/* He embarked on his professional journey as a social media
              activist in the year 2011, subsequently assuming a pivotal
              role in leading the social media and IT division
              of the 'Aam Aadmi Party' (AAP). */}
            </p>
            <p className="leading-relaxed text-slate-700 mt-3 dark:text-slate-400">
              He embarked on his professional journey as a social media
              activist in the year 2011, <br/>
              subsequently assuming a pivotal
              role in <br/> leading the social media and IT division
              of the 'Aam Aadmi Party' (AAP).
            </p>
            <SocialButton/> <br />
            <Link
              className="group relative mx-auto mt-8 inline-block font-semibold text-slate-900 underline decoration-blue-300 decoration-2 underline-offset-8 transition hover:decoration-slate-700 dark:text-slate-200 dark:hover:decoration-slate-200 sm:mx-0"
              to="about"
            >
              Know work!
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
            </Link>
          </div>
        </section>
      <PrevWork/>
       </div>
    </>
  )
}
