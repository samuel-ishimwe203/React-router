import { Link,NavLink } from "react-router-dom"
import Urlimge from "../assets/images/pic2.png"

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-8 py-6 bg-[#f4efe8]">
      <Link to="/" className="font-extrabold text-2xl">
        #VANLIFE
      </Link>

      <nav className="space-x-8 text-base font-medium text-gray-700">

          <NavLink to="/host" className={({isActive})=> isActive? "underline font-bold text-[#161616]":"hover:text-black"}>
          Host
        </NavLink>
        <NavLink to="/about" className={({isActive})=>isActive?"underline font-bold text-[#161616]":"hover:text-black"}>
          About
        </NavLink>
        <NavLink to="/vans" className={({isActive})=>isActive?"underline font-bold text-[#161616]":"hover:text-black"}>
          Vans
        </NavLink>

        <Link className="inline-flex items-center">
              <img className="w-[18px] h-[18px]" to="login"src={Urlimge} alt="" />
        </Link>
      </nav>
    </header>
  )
}