import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetails from "./pages/VanDetails";
import Layout from "./components/Layout";
import Dashboard from"./pages/host/Dashboard"
import Reviews from"./pages/host/Reviews"
import Income from"./pages/host/Income"
import HostLayout from "./components/HostLayout";

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

               

                 <Route element={<HostLayout/>} >
                   <Route path="/host" element={<Dashboard />} />
                   <Route path="/host/income" element={<Income/>}/>
                   <Route path="/host/reviews" element={<Reviews/>}/>
                 </Route>  
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
