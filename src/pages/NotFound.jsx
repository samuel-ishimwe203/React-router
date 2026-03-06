import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="px-6"> {/* padding-inline: 26px → px-6 (24px, closest) */}
      <h1 className="mb-4 text-lg font-semibold">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link 
        to="/" 
        className=" bg-black text-white w-[10%] py-2 px-4 inline-block text-center rounded"
      >
        Return to Home
      </Link>
    </div>
  )
}

export default NotFound