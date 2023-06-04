import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Memories } from '../components/Memories'
import { Internalerror } from '../pages/error/servererror/Internalerror'
import { Notfound } from '../pages/error/notfound/Notfound'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
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
