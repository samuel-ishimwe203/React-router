import { Link, useLoaderData, useLocation } from "react-router-dom";
import { getVans } from "../../api";

export async function loader({ params }) {
  return getVans(params.id);
}

export default function VanDetail() {
  const van = useLoaderData();
  const location = useLocation();

  const search = location.state?.search || "";

  return (
    <div className="p-[27px] m-32">
      <Link
        to={`..${search}`}
        relative="path"
        className="block text-black mt-[40px] ml-[26px] pb-10"
      >
        &larr; <span className="hover:underline">Back to all vans</span>
      </Link>

      {van ? (
        <div className="flex flex-col text-[#161616]">
          <img
            src={van.imageUrl}
            alt={van.name}
            className="rounded-[5px] my-[47px]"
          />

          <i
            className={`self-start px-4 py-1 rounded text-white capitalize ${
              van.type === "simple"
                ? "bg-orange-500"
                : van.type === "rugged"
                ? "bg-green-700"
                : "bg-black"
            }`}
          >
            {van.type}
          </i>

          <h2 className="text-[2rem] mb-[10px]">{van.name}</h2>

          <p className="text-[1.25rem] mb-[10px]">
            <span className="font-bold text-[1.5rem]">${van.price}</span>/day
          </p>

          <p>{van.description}</p>

          <button className="bg-[#FF8C38] text-white w-[200px] mt-6 py-3 rounded-md">
            Rent this van
          </button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}