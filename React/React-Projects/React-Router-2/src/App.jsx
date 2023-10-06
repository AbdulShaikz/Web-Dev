import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='bg-slate-800 h-screen text-white'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
