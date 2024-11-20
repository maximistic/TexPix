import Home from './pages/Home'
import BuyCredits from './pages/BuyCredits'
import Generator from './pages/Generator'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buy' element={<BuyCredits />} />
        <Route path='/generator' element={<Generator />} />
      </Routes>
      
    </div>
  )
}

export default App