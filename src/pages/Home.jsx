import heroImg from "../assets/images/pic1.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative min-h-screen w-full flex items-center">
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-white px-12 max-w-3xl">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          You got the travel plans, we got the travel vans.
        </h1>

        <p className="text-lg mb-10">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van for your perfect road trip.
        </p>

        <Link
          to="/vans"
          className="inline-block bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-md font-semibold text-lg"
        >
          Find your van
        </Link>
      </div>
    </section>
  );
}
