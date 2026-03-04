import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const filterType = searchParams.get("type");
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayedVan = filterType
    ? vans.filter((van) => van.type === filterType)
    : vans;
  const displayedvanMap = displayedVan.map((van) => (
    <Link key={van.id} to={`/vanDetails/${van.id}`}>
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
  ));

  return (
    <section className="w-full px-12 py-16">
      <h1 className="text-4xl font-bold mb-10">Explore our van options</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-wrap">
          <Link
            to="?type=simple"
            className="h-8 px-6 py-1 font-medium rounded-md bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#E17654] hover:text-[#FFEAD0] transition-colors duration-200"
          >
            Simple
          </Link>

          <Link
            to="?type=luxury"
            className="h-8 px-6 py-1 font-medium rounded-md bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#161616] hover:text-[#FFEAD0] transition-colors duration-200 ml-4"
          >
            Luxury
          </Link>

          <Link
            to="?type=rugged"
            className="h-8 px-6 py-1 font-medium rounded-md bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#115E59] hover:text-[#FFEAD0] transition-colors duration-200 ml-4"
          >
            Rugged
          </Link>

          <Link
            to="."
            className="h-8 px-6 py-1 font-medium rounded-md bg-transparent text-[#4D4D4D] underline ml-[-5] transition-colors duration-200"
          >
            Clear filter
          </Link>
        </div>

        {displayedvanMap}
      </div>
    </section>
  );
}
