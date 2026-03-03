import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Vans from "./pages/Vans"
import VanDetails from "./pages/VanDetails"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full flex flex-col bg-[#e8ded3]">

        <Header />

        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vanDetails/:id" element={<VanDetails/>}/>
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App