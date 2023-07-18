import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Index } from '../admin/Index'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Memories } from '../components/Memories'
import { Internalerror } from '../pages/error/servererror/Internalerror'
import { Notfound } from '../pages/error/notfound/Notfound'
import Analytics from "../admin/pages/Analytics";
import Blogs from "../admin/pages/Blogs";
import Build from "../admin/pages/Build";
import Settings from "../admin/pages/Settings";
import UploadVideos from "../admin/pages/UploadVideos";
import Dashboard from "../admin/pages/Dashboard";
import BlogForm from '../admin/components/BlogForm'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/admin' element={<Index />}></Route>
          <Route path="dashboard" element={<Dashboard />} ></Route>
          <Route path="blogs" element={<Blogs />} ></Route>
      
          <Route path="publish" element={<BlogForm />} ></Route>
        <Route path="uploadVideos" element={<UploadVideos />} ></Route>
        <Route path="settings" element={<Settings />} ></Route>
      </Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/memories' element={<Memories />}></Route>
      <Route path='/internalerror' element={<Internalerror />}></Route>
      <Route path='/notfound' element={<Notfound />}></Route>
      <Route path='*' element={<Navigate to={'/notfound'} />}></Route>
    </Routes >
    </>
  )
}
