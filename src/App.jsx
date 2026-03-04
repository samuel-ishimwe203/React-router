import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans/Vans";
import VanDetails from "./pages/vans/VanDetails";
import Layout from "./components/Layout";
import Dashboard from "./pages/host/Dashboard";
import Reviews from "./pages/host/Reviews";
import Income from "./pages/host/Income";
import HostLayout from "./components/HostLayout";
import HostVansDetails from "./pages/host/HostVansDetails";
import HostVans from "./pages/host/HostVans";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVanPhotoes from "./pages/host/HostVanPhotoes";
import HostVanInfo from "./pages/host/HostVanInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full flex flex-col bg-[#e8ded3]">
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="vans" element={<Vans />} />
              <Route path="vanDetails/:id" element={<VanDetails />} />

              <Route path="host" element={<HostLayout />}>
                 <Route index element={<Dashboard />} />
                 <Route path="income" element={<Income />} />
                 <Route path="reviews" element={<Reviews />} />
                 <Route path="vans" element={<HostVans/>} />  

                <Route path="vans/:id" element={<HostVansDetails/>}>
                       <Route index element={<HostVanInfo/>} />
                       <Route path="pricing" element={<HostVanPricing/>} />
                       <Route path="photos" element={<HostVanPhotoes/>} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
