import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const style="px-5 py-[5px] font-medium text-[#4D4D4D] no-underline hover:text-[#161616] hover:underline hover:font-semibold"
  return (
    <>
      <nav className="flex">

        <NavLink
          end
          to="/host"
          className={({ isActive }) =>` ${style} ${isActive ? "underline font-semibold text-[#161616]" : ""}`} >
          Dashboard
         </NavLink> 

        <NavLink
          end
          to="/host/income"
          className={({ isActive }) =>` ${style} ${isActive ? "underline font-semibold text-[#161616]" : ""}`} >
           Income
         </NavLink>

        <NavLink
          end
           to="/host/vans"
          className={({ isActive }) =>` ${style} ${isActive ? "underline font-semibold text-[#161616]" : ""}`} >
          Vans
         </NavLink>

        <NavLink
          end
           to="/host/reviews"
          className={({ isActive }) =>` ${style} ${isActive ? "underline font-semibold text-[#161616]" : ""}`} >
         Reviews
         </NavLink>

       </nav>

      <Outlet />
    </>
  );
}

export default HostLayout;
