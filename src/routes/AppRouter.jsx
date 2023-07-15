import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Index } from '../admin/Index'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Memories } from '../components/Memories'
import { Internalerror } from '../pages/error/servererror/Internalerror'
import { Notfound } from '../pages/error/notfound/Notfound'
import Analytics from "../admin/pages/Analytics";
import Authentication from "../admin/pages/Authentication";
import Build from "../admin/pages/Build";
import Settings from "../admin/pages/Settings";
import Stroage from "../admin/pages/Stroage";

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
        
            <Route path='/admin' element={<Index/>}>
                <Route path="authentication" element={<Authentication />} />
                <Route path="stroage" element={<Stroage />} />
                <Route path="settings" element={<Settings />} />
                <Route path="build/:bID" element={<Build />} />
                <Route path="analytics/:aID" element={<Analytics />} />
            </Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/memories' element={<Memories/>}></Route>
            <Route path='/internalerror' element={<Internalerror/>}></Route>
            <Route path='/notfound' element={<Notfound/>}></Route>
            <Route path='*' element={<Navigate to={'/notfound'} />}></Route>
        </Routes>
    </>
  )
}
