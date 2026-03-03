import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="p-[27px] m-32">
      {van ? (
        <div className="flex flex-col text-[#161616]">
          <img
            src={van.imageUrl}
            alt={van.name}
            className="rounded-[5px] my-[47px]"
          />

          <i className={`van-type ${van.type} selected self-start`}>
            {van.type}
          </i>

          <h2 className="text-[2rem] mb-[10px]">{van.name}</h2>

          <p className="text-[1.25rem] mb-[10px]">
            <span className="font-bold text-[1.5rem]">${van.price}</span>
            /day
          </p>

          <p>{van.description}</p>

          <button className="bg-[#FF8C38] text-white w-[10%] mt-6 py-3 rounded-md">
            Rent this van
          </button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
