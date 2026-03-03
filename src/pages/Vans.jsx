import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Vans() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  return (
    <section className="w-full px-12 py-16">
      <h1 className="text-4xl font-bold mb-10">Explore our van options</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vans.map(van => (
           <Link  key={van.id}  to={`/vanDetails/${van.id}`}>
            <div className="shadow-lg rounded-lg overflow-hidden">
            <img
              src={van.imageUrl}
              alt={van.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{van.name}</h2>
              <p className="text-gray-600">${van.price}/day</p>

            </div>
             <i className={`van-type ${van.type} selected`}>{van.type}</i>
          </div>
           </Link>
         
        ))}
      </div>
    </section>
  )
}