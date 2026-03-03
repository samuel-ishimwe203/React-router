import aboutImg from "../assets/images/pic1.png"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="w-full">

      <img
        src={aboutImg}
        alt=""
        className="w-full h-96 object-cover"
      />

      <section className="px-12 py-16 max-w-5xl">
        <h1 className="text-4xl font-bold mb-6">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Our mission is to enliven your road trip with the perfect travel van rental.
          Our vans are recertified before each trip to ensure your travel plans
          go off without a hitch.
        </p>

        <p className="text-lg text-gray-700">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on four wheels.
        </p>
      </section>

      <section className="bg-[#f7c98b] w-full py-20 px-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>

          <Link
            to="/vans"
            className="inline-block bg-black text-white px-8 py-4 rounded-md text-lg"
          >
            Explore our vans
          </Link>
        </div>
      </section>

    </div>
  )
}