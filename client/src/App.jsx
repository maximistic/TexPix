import Home from './pages/Home'
import BuyCredits from './pages/BuyCredits'
import Generator from './pages/Generator'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'

const App = () => {
  const {showLogin} = useContext(AppContext)

  return (
    <div className='px-4 sm:px-10 md:px14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Navbar />
      {showLogin && <Login />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buy' element={<BuyCredits />} />
        <Route path='/generator' element={<Generator />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App