import { useState } from 'react'
import { DataProvider } from './components/dataprovider/Dataprovider'
import APIfetch from './components/apifetch/APIfetch'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Skills from './components/skill/Skills'
import Projects from './components/projects/Projects'
import Timeline from './components/timeline/Timeline'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import FooterBottom from './components/footer/FooterBottom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='w-full h-auto bg-bodyColor text-lightText px-4' >
     
      <div className='max-w-screen-2xl mx-auto'>
      
      <DataProvider>
      <Navbar/>
      <APIfetch />
      <Hero/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Timeline/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <FooterBottom/>
    </DataProvider>
 </div>
 </div>
    </>
  )
}

export default App
