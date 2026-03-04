import React, { useState, useEffect } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link
        to=".."
        relative="path"
        className="block text-black mt-[60px] ml-[26px]"
      >
        &larr; <span className="hover:underline">Back to all vans</span>
      </Link>

      <div className="bg-white p-6 mx-[26px] my-[30px]">
        <div className="flex items-center">
          <img
            src={currentVan.imageUrl}
            className="h-[160px] rounded-[5px] mr-5"
          />

          <div>
            <i
              className={`
                                px-[14px] py-[7px]
                                text-[#4D4D4D]
                                bg-[#FFEAD0]
                                rounded-[5px]
                                font-medium
                                text-sm
                                ${currentVan.type === "simple" ? "hover:bg-[#E17654] hover:text-[#FFEAD0]" : ""}
                                ${currentVan.type === "rugged" ? "hover:bg-[#115E59] hover:text-[#FFEAD0]" : ""}
                                ${currentVan.type === "luxury" ? "hover:bg-[#161616] hover:text-[#FFEAD0]" : ""}
                            `}
            >
              {currentVan.type}
            </i>

            <h3 className="mt-6 mb-[5px] text-[26px] font-bold">
              {currentVan.name}
            </h3>

            <h4 className="text-[20px] m-0">${currentVan.price}/day</h4>
          </div>
        </div>
      </div>

    
       <Outlet/>
    </section>
  );
}
