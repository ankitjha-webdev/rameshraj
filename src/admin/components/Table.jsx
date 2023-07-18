import { Link } from "react-router-dom";

export const Table = () => {

  const tableItems = [
    {
        author: "Liam James",
        blogTitle: "liamjames@example.com",
        postedDate: "Software engineer",
    },
    {
        author: "Liam James",
        blogTitle: "liamjames@example.com",
        postedDate: "Software engineer",
    },
    {
        author: "Liam James",
        blogTitle: "liamjames@example.com",
        postedDate: "Software engineer",
    },
    {
        author: "Liam James",
        blogTitle: "liamjames@example.com",
        postedDate: "Software engineer",
    },
    {
        author: "Liam James",
        blogTitle: "liamjames@example.com",
        postedDate: "Software engineer",
    },
   
]


  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        Recent Blogs
                    </h3>
                    {/* <p className="text-gray-600 mt-2">
                        
                    </p> */}
                </div>
                <div className="mt-3 md:mt-0">
                    <Link
                        to = "publish"
                        className="rounded-lg border-0 mx-2 mt-8 bg-blue-400 px-6 py-2  text-base text-white shadow-lg shadow-blue-300 transition     hover:bg-blue-500 hover:shadow-blue-400 dark:shadow-blue-900"
                    >
                       Publish Blog
                    </Link>
                </div>
            </div>
            <div className="mt-4 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-base text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Blog Title</th>
                            <th className="py-3 px-6">Author</th>
                            <th className="py-3 px-6">Posted Date</th>
                            <th className="py-3 px-6"></th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.blogTitle}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.author}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.postedDate}</td>
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Edit
                                        </a>
                                        <button href="javascript:void()" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}