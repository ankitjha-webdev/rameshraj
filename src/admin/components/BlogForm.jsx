import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { Outlet } from 'react-router-dom';



const BlogForm = () => {
   
    const editor = useRef(null);
	const [content, setContent] = useState('');

    const config={
        placeholder:"Start typing...",
    }

  return(
    <>
<form className='max-w-screen-2xl mx-auto px-20 md:px-8 mt-4'>
  <div className="space-y-12">
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-2xl font-semibold leading-7 text-gray-900">Publish Blog</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">Enter your fucking Blog</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label for="username" className="block text-lg font-medium leading-6 text-gray-900">Blog Title</label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
              <input type="text" name="username" id="username" autocomplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter your blog title"/>
            </div>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="country" class="block text-lg font-medium leading-6 text-gray-900">Country</label>
          <div class="mt-2">
            <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label for="about" className="block text-lg font-medium leading-6 text-gray-900">Description</label>
          <div className="mt-2">
            {/* <textarea id="about" name="about" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea> */}

            
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
		    />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">Write your Blog</p>
        </div>
      </div>
    </div>

  </div>

  <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
</form>
<Outlet/>
    </>
  ) 
};

export default BlogForm;