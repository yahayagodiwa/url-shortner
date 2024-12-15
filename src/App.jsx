import NavBar from "./components/NavBar"
import { Hero } from "./components/Hero"
import Stats from "./components/Stats"
import Footer from "./components/Footer"
import Main from "./components/MainApi"


function App() {
  

  return (
    <>
     <NavBar />
     <Hero />
     <div className="bg-[#bfbfbf]">
     <Main />
     <Stats />
     </div>
    <Footer />
    </>
  )
}

export default App
