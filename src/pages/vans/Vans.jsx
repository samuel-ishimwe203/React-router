import { useState } from "react";
import { useSearchParams, useLocation, Link ,useLoaderData} from "react-router-dom";
import  {getVans} from "../../api";


export function loader(){
  return getVans()
}



export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError]=useState(null)


  const vans=useLoaderData()

  const location = useLocation();

  

  const filterType = searchParams.get("type");

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      value === null ? newParams.delete(key) : newParams.set(key, value);
      return newParams;
    });
  }

  const search = location.state?.search || "";

  const displayedVans = filterType
    ? vans.filter((van) => van.type === filterType)
    : vans;

  const baseButtonClasses =
    "h-8 px-6 py-1 font-medium rounded-md transition-colors duration-200";



 if(error){
    return <h1>There was an error: {error.message}</h1>
 }

  return (
    <section className="w-full px-12 py-16">
      <h1 className="text-4xl font-bold mb-10">Explore our van options</h1>

      {filterType && (
        <Link
          to={`${search}`}
          relative="path"
          onClick={() => handleFilterChange("type", null)}
          className="block mt-[40px] ml-[26px] pb-10 py-1 font-medium underline text-[#4D4D4D]"
        >
          &larr; <span className="hover:underline">Back to all vans</span>
        </Link>
      )}

      <div className="flex flex-wrap gap-4 mb-10">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`${baseButtonClasses} ${
            filterType === "simple"
              ? "bg-[#E17654] text-[#FFEAD0]"
              : "bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#E17654] hover:text-[#FFEAD0]"
          }`}
        >
          Simple
        </button>

        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`${baseButtonClasses} ${
            filterType === "luxury"
              ? "bg-[#161616] text-[#FFEAD0]"
              : "bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#161616] hover:text-[#FFEAD0]"
          }`}
        >
          Luxury
        </button>

        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`${baseButtonClasses} ${
            filterType === "rugged"
              ? "bg-[#115E59] text-[#FFEAD0]"
              : "bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#115E59] hover:text-[#FFEAD0]"
          }`}
        >
          Rugged
        </button>

        {filterType && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="h-8 px-6 py-1 font-medium underline text-[#4D4D4D]"
          >
            Clear filter
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayedVans.map((van) => (
          <Link
            key={van.id}
            to={van.id}
            state={{ search: `?${searchParams.toString()}` }}
          >
            <div className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
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
          </Link>
        ))}
      </div>
    </section>
  );
}