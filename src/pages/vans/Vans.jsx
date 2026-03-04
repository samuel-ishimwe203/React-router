import { useEffect, useState } from "react";
import { useSearchParams,Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filterType = searchParams.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayedVan = filterType ? vans.filter((van) => van.type === filterType) : vans;
  const baseClasses = "h-8 px-6 py-1 font-medium rounded-md transition-colors duration-200";

  return (
    <section className="w-full px-12 py-16">

      

      <h1 className="text-4xl font-bold mb-10">Explore our van options</h1>

       

      <div className="flex flex-wrap gap-4 mb-10">
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className={`${baseClasses}
            ${
              filterType === "simple"
                ? "bg-[#E17654] text-[#FFEAD0]"
                : "bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#E17654] hover:text-[#FFEAD0]"
            }`}
        >
          Simple
        </button>

        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className={`${baseClasses}
            ${
              filterType === "luxury"
                ? "bg-[#161616] text-[#FFEAD0]"
                : "bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#161616] hover:text-[#FFEAD0]"
            }`}
        >
          Luxury
        </button>

        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className={`${baseClasses}
            ${
              filterType === "rugged"
                ? "bg-[#115E59] text-[#FFEAD0]"
                : "bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#115E59] hover:text-[#FFEAD0]"
            }`}
        >
          Rugged
        </button>

        {filterType && (
          <button
            onClick={() => setSearchParams({})}
            className="h-8 px-6 py-1 font-medium underline text-[#4D4D4D]"
          >
            Clear filter
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayedVan.map((van) => (
          <div key={van.id} className="shadow-lg rounded-lg overflow-hidden">
            <img
              src={van.imageUrl}
              alt={van.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{van.name}</h2>
              <p className="text-gray-600">${van.price}/day</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
