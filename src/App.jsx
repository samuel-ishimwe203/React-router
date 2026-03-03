import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./pages/Footer";
import Vans from "./pages/Vans";
import VanDetails from "./pages/VanDetails";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full flex flex-col bg-[#e8ded3]">
        <main className="flex-1 w-full">
          <Routes>

            <Route element={<Layout/>}>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/vans" element={<Vans />} />
               <Route path="/vanDetails/:id" element={<VanDetails />} />
            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
