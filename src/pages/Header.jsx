import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-8 py-6 bg-[#f4efe8]">
      <Link to="/" className="font-extrabold text-2xl">
        #VANLIFE
      </Link>

      <nav className="space-x-8 text-base font-medium text-gray-700">
        <Link to="/about" className="hover:text-black">
          About
        </Link>
        <Link to="/vans" className="hover:text-black">
          Vans
        </Link>
      </nav>
    </header>
  )
}