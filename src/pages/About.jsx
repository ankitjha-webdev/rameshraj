import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../assets/images/profile.png'
export const About = () => {
  // console.log(profile);
  return (
    <>
      <>
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
            {/* <p className="leading-relaxed text-slate-700 dark:text-slate-400">
              Ramesh Raj is a distinguished political strategist,
              esteemed consultant, and accomplished author.
              He embarked on his professional journey as a social media
              activist in the year 2011, subsequently assuming a pivotal
              role in leading the social media and IT division
              of the 'Aam Aadmi Party' (AAP).
            </p>
            <p className="leading-relaxed text-slate-700 dark:text-slate-400">
              He embarked on his professional journey as a social media
              activist in the year 2011, <br/>
              subsequently assuming a pivotal
              role in <br/> leading the social media and IT division
              of the 'Aam Aadmi Party' (AAP).
            </p> */}
            <p className="leading-relaxed text-slate-700 dark:text-slate-400">
              Ramesh Raj is a distinguished political strategist, esteemed consultant, and accomplished author. He embarked on his professional journey as a social media activist in the year 2011, subsequently assuming a pivotal role in leading the social media and IT division of the 'Aam Aadmi Party' (AAP). The party emerged as a prominent entity from the momentous 'India Against Corruption' movement. Prior to the formation of AAP in 2012, Ramesh Raj actively contributed to the Anna Hazare movement, and he has since maintained a steadfast affiliation with the Aam Aadmi Party. Presently, he holds the esteemed position of overseeing the Sakra Block of Muzaffarpur district in Bihar state, wherein he tirelessly champions the voices and aspirations of the citizens. In addition to his political pursuits, Mr. Ramesh is a passionate advocate for wildlife conservation, having valiantly rescued and released over 3,000 snakes into their natural habitats. This noble endeavor has garnered him considerable recognition in the public sphere. Mr. Ramesh consistently stands as a vocal proponent for the marginalized and vulnerable, promptly responding to appeals for assistance. His notable charitable endeavors are extensively documented on his YouTube channel.
<br/>
<span className='text-blue-300 font-bold'>✓</span> His principal objective revolves around the provision of gainful employment opportunities for every individual.<br/>
<span className='text-blue-300 font-bold'>✓</span> A public servant is obligated to convene a public court on a weekly basis.<br/>
<span className='text-blue-300 font-bold'>✓</span> The expeditious resolution of any obstacles encountered by the public in their interactions with governmental institutions should be ensured within a timeframe of seven days.<br/>
<span className='text-blue-300 font-bold'>✓</span> The allocation of free electricity up to 300 units is imperative.<br/>
<span className='text-blue-300 font-bold'>✓</span> Private school fees ought to be regulated within the range of 500 to 1000.<br/>
<span className='text-blue-300 font-bold'>✓</span> Unrestricted access to free education must be extended to all children until they complete their graduation.<br/>
<span className='text-blue-300 font-bold'>✓</span> The bestowal of complimentary copies/books for students enrolled in government schools/colleges should be facilitated.<br/>
<span className='text-blue-300 font-bold'>✓</span> Adequate medical treatment of up to 10 lakhs in any hospital should be guaranteed.<br/>
<span className='text-blue-300 font-bold'>✓</span> Efficient home delivery of ration supplies is to be implemented.<br/>
<span className='text-blue-300 font-bold'>✓</span> The issuance of caste reservation/EWS/SC/ST certificates should be expedited within a maximum period of one week.<br/>
<span className='text-blue-300 font-bold'>✓</span> Provision of reservation facilities based on the financial status of individuals is deemed essential.<br/>
<span className='text-blue-300 font-bold'>✓</span> Every Panchayat should be equipped with a designated complaint box, assuring complete confidentiality to the complainant, and guaranteeing the completion of requested work within seven days.<br/>
<span className='text-blue-300 font-bold'>✓</span> Government schools should be equipped with educational amenities on par with those offered by private schools.





            </p>
            <Link
              className="group relative mx-auto mt-8 inline-block font-semibold text-slate-900 underline decoration-blue-300 decoration-2 underline-offset-8 transition hover:decoration-slate-700 dark:text-slate-200 dark:hover:decoration-slate-200 sm:mx-0"
              to="about"
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
            </Link>
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
