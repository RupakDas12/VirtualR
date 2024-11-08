import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Price from "./components/Price"
import Testimonial from "./components/Testimonial"
import Workflow from "./components/Workflow"


function App() {


  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto px-30 pt-20"><HeroSection/></div>
    <div className="max-w-6xl mx-auto px-30 pt-20"><FeatureSection/></div>
    <div className="max-w-6xl mx-auto px-30 pt-20"><Workflow/></div>
    <div className="max-w-6xl mx-auto px-30 pt-20"><Price/></div>
    <div className="max-w-6xl mx-auto px-30 pt-20"><Testimonial/></div>
    <div className="max-w-6xl mx-auto px-30 pt-20"><Footer/></div>
    
      
    </>
  )
}

export default App
