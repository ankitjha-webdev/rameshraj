import React from 'react'
import Header from './components/Header'
import { AppRouter } from './routes/AppRouter'

const App = () => {
  return (
    <>
      <Header/>
      <AppRouter/>
    </>
  )
}

export default App