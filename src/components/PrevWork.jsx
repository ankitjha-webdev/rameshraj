// import React, { useState } from 'react'
import img1 from '../assets/images/IMG_20230506_205240.jpg'
import img2 from '../assets/images/IMG_20230506_102511.jpg'
import img3 from '../assets/images/FB_IMG_1683385390938.jpg'
import img4 from '../assets/images/IMG_20230506_205606.jpg'
import img5 from '../assets/images/IMG_20230506_205503.jpg'
import img6 from '../assets/images/IMG_20230506_205424.jpg'
import { Link } from 'react-router-dom'
export const PrevWork = () => {
    // const [images, setImages] = useState();
  return (
    <>
    {/* <section className="container mx-auto px-12 py-28">
  <h1 className="mb-24 w-full text-center text-4xl font-extrabold dark:text-slate-50 sm:mx-auto sm:mb-20 sm:w-4/5">
    <span className="text-blue-500">Best benefits </span>
    for small and medium businesses
  </h1>
  <div className="flex flex-col space-y-24 sm:flex-row sm:space-y-0 sm:space-x-8">
    <div className="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
      <div className="w-full text-center">
        <img
          alt="Trusted and secured"
          className="mx-auto mb-4 h-16 dark:contrast-200 dark:invert"
          src="/illustrations/undraw_security_on_re_e491.svg"
        />
        <h2 className="mb-2 text-xl font-bold leading-tight dark:text-slate-50 md:text-xl">
          Trusted and secured
        </h2>
        <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
          Each transaction is guarded by advanced and certified security system.
        </p>
      </div>
      <div className="text-center">
        <a
          className="group relative mx-auto inline-block text-sm font-semibold text-slate-900 underline decoration-violet-300 decoration-2 underline-offset-8 transition hover:decoration-slate-700 dark:text-slate-200 dark:hover:decoration-slate-200 sm:m-0"
          href="#"
        >
          Read more
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
    </div>
    <div className="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
      <div className="w-full text-center">
        <img
          alt="Multi layer security"
          className="mx-auto mb-4 h-16 dark:contrast-200 dark:invert"
          src="/illustrations/undraw_fingerprint_re_uf3f.svg"
        />
        <h2 className="mb-2 text-xl font-bold leading-tight dark:text-slate-50 md:text-xl">
          Multi layer security
        </h2>
        <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
          Support fingerprint and face recognition for any transaction. More
          options coming soon.
        </p>
      </div>
      <div className="text-center">
        <a
          className="group relative mx-auto inline-block text-sm font-semibold text-slate-900 underline decoration-violet-300 decoration-2 underline-offset-8 transition hover:decoration-slate-700 dark:text-slate-200 dark:hover:decoration-slate-200 sm:m-0"
          href="#"
        >
          Read more
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
    </div>
    <div className="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
      <div className="w-full text-center">
        <img
          alt="Meaningful insight"
          className="mx-auto mb-4 h-16 dark:contrast-200 dark:invert"
          src="/illustrations/undraw_all_the_data_re_hh4w.svg"
        />
        <h2 className="mb-2 text-xl font-bold leading-tight dark:text-slate-50 md:text-xl">
          Meaningful insight
        </h2>
        <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
          Visualize transactions with multiple chart option to get insight as
          you need.
        </p>
      </div>
      <div className="text-center">
        <a
          className="group relative mx-auto inline-block text-sm font-semibold text-slate-900 underline decoration-violet-300 decoration-2 underline-offset-8 transition hover:decoration-slate-700 dark:text-slate-200 dark:hover:decoration-slate-200 sm:m-0"
          href="#"
        >
          Read more
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
    </div>
  </div>
</section> */}
<section className="animate-fade-down container mx-auto px-8 py-28 sm:px-12 justify-center items-center">

  <h1 className="sm:mb-18 mb-24 w-full text-center text-4xl font-bold dark:text-slate-50 sm:mx-auto sm:w-4/5">
  Work Summary 
  </h1>
  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
    <div className="hover:animate-rotate-y hover:animate-once flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800">
      {/* <svg
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        width="1.2em"
        height="1.2em"
        className="h-8 w-8"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M12 18h.01m-2.838-2.828a4 4 0 0 1 5.656 0m-8.485-2.829a8 8 0 0 1 11.314 0" />
          <path d="M3.515 9.515c4.686-4.687 12.284-4.687 17 0" />
        </g>
      </svg> */}
      <img src={img1} alt={img1} className='rounded '/>
      {/* <div className="mt-3 text-sm font-semibold">Working space</div> */}
    </div>

    <div className="hover:animate-rotate-y hover:animate-once flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800">
       <img src={img2} alt={img2}  className='rounded ' />
      {/* <div className="mt-3 text-sm font-semibold">Affordable price</div> */}
    </div>
    <div className="hover:animate-rotate-y hover:animate-once flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800">
       <img src={img3} alt={img3}  className='rounded ' />
      {/* <div className="mt-3 text-sm font-semibold">Affordable price</div> */}
    </div>

    <div className="hover:animate-rotate-y hover:animate-once flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800">
       <img src={img4} alt={img4} className=' rounded' />
      {/* <div className="mt-3 text-sm font-semibold">High speed internet</div> */}
    </div>
    <div className="hover:animate-rotate-y hover:animate-once flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800">
       <img src={img5} alt={img5} className=' rounded' />
      {/* <div className="mt-3 text-sm font-semibold">High speed internet</div> */}
    </div>
    <div className="hover:animate-rotate-y hover:animate-once flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800">
       <img src={img6} alt={img6} className=' rounded' />
      {/* <div className="mt-3 text-sm font-semibold">High speed internet</div> */}
    </div>

    {/* <div className="flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800">
      <svg
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        width="1.2em"
        height="1.2em"
        className="h-8 w-8"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 14a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm5-1v4m8-12v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5"
        />
      </svg>
      <div className="mt-3 text-sm font-semibold">Smoking area</div>
    </div>

    <div className="flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800">
      <svg
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        width="1.2em"
        height="1.2em"
        className="h-8 w-8"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M20 6v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zM10 16h6" />
          <path d="M11 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0M4 8h3m-3 4h3m-3 4h3" />
        </g>
      </svg>
      <div className="mt-3 text-sm font-semibold">Meeting room</div>
    </div>

    <div className="flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800">
      <svg
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        width="1.2em"
        height="1.2em"
        className="h-8 w-8"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
          <path d="M9 16V8h4a2 2 0 0 1 0 4H9" />
        </g>
      </svg>
      <div className="mt-3 text-sm font-semibold">Huge parking lot</div>
    </div> */}
    
  </div>

<Link to="/memories" target="_blank" className='sm:mx-auto flex flex-col items-center justify-center'>
      <button className="rounded-lg border-0 mx-2 mt-8 bg-blue-400 px-6 py-2  text-base text-white shadow-lg shadow-blue-300 transition     hover:bg-blue-500 hover:shadow-blue-400 dark:shadow-blue-900">
        View More
      </button>
      </Link>
</section>
    </>
  )
}
