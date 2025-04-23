import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import AboutSection from './Components/AboutSection'
import SkillsSection from './Components/SkillSections'
import ProjectsSection from './Components/Projcts'
import ContactSection from './Components/ConatactUS'
import Footer from './Components/FooterSection'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
        <Routes>
          {/* <Route path='/projects' element={<ProjectsSection/>}/> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
