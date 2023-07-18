import { Table } from "../components/Table";

const Blogs = () => {

  const stats = [
    {
        data: "35K",
        title: "Total Blogs"
    },
    {
        data: "40+",
        title: "Total Category"
    },
    {
        data: "30M+",
        title: "Latest Blog"
    },
    {
        data: "30M+",
        title: "Total Visit"
    },
]
  return (
    <>
      {/* <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-60 overflow-hidden rounded-md bg-slate-500 lg:aspect-none group-hover:opacity-75 lg:h-40">
              <div className="flex flex-col gap-2 text-center py-11">
                  <h1 className="text-white text-xl">Total Publised Blogs</h1>
                  <span className="text-white text-xl">32</span>
              </div>
          </div>
        </div>
        <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-60 overflow-hidden rounded-md bg-slate-500 lg:aspect-none group-hover:opacity-75 lg:h-40">
          <div className="flex flex-col gap-2 text-center py-11">
                  <h1 className="text-white text-xl">Total Publised Blogs</h1>
                  <span className="text-white text-xl">32</span>
              </div>
          </div>
        </div>
        <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-60 overflow-hidden rounded-md bg-slate-500 lg:aspect-none group-hover:opacity-75 lg:h-40">
          <div className="flex flex-col gap-2 text-center py-11">
                  <h1 className="text-white text-xl">Total Publised Blogs</h1>
                  <span className="text-white text-xl">32</span>
              </div>
          </div>
        </div>
        <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-60 overflow-hidden rounded-md bg-slate-500 lg:aspect-none group-hover:opacity-75 lg:h-40">
          <div className="flex flex-col gap-2 text-center py-11">
                  <h1 className="text-white text-xl">Total Publised Blogs</h1>
                  <span className="text-white text-xl">32</span>
              </div>
          </div>
        </div>
  
      </div> */}
      <section className="py-7 bg-slate-100">
            <div className="max-w-screen-xl px-8">
                <div className="mt-1">
                    <ul className="flex flex-col gap-4 items-center sm:flex-row">
                        {  
                            stats.map((item, idx) => (
                                <li key={idx} className="w-full text-center rounded-lg  sm:w-auto border-0 bg-blue-400 px-12 py-4  text-base text-white shadow-lg shadow-blue-300 transition     hover:bg-blue-500 hover:shadow-blue-400 dark:shadow-blue-900">
                                    <h4 className="text-4xl text-white font-semibold">{item.data}</h4>
                                    <p className="mt-3 text-slate-600 font-bold">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
      <div className="mt-6">
             <Table/>
      </div>
     
    </>
  )
};

export default Blogs;
