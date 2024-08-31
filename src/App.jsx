import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/navbar/Navbar'
import Herosection from '../components/hero-section/Herosection'
import Aboutme from '../components/about-me/Aboutme'
import Services from '../components/services-section/Services'
import Contributor from '../components/contributor-section/Contributor'
import Portfolio from '../components/portfolio-section/Portfolio'
import Footer from '../components/footer-section/Footer'
import {BrowserRouter} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <>
       <Navbar/>
       <Herosection/>
       <Aboutme/>
       <Services/>
       <Contributor/>
       <Portfolio/>
       <Footer/>
    </>



   </BrowserRouter>
  )
}

export default App
