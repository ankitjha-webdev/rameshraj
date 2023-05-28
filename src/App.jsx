import Header from './components/Header'
import { AppRouter } from './routes/AppRouter'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <AppRouter/>
      <Footer/>
    </>
  )
}

export default App