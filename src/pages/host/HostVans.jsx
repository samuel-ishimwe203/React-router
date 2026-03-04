import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HostVans() {

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const hostVansEl = vans.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="block"
        >
            <div className="flex items-center bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition duration-200">
                
                <img
                    src={van.imageUrl}
                    alt={`photo of ${van.name}`}
                    className="w-28 h-28 object-cover rounded-md"
                />

                <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                        {van.name}
                    </h3>
                    <p className="text-gray-600 font-medium">
                        ${van.price}/day
                    </p>
                </div>

            </div>
        </Link>
    ))

    return (
        <section className="px-6 py-8 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">
                Your listed Vans
            </h1>

            <div>
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEl}
                        </section>
                    ) : (
                        <h2 className="text-lg font-medium text-gray-500">
                            Loading...
                        </h2>
                    )
                }
            </div>
        </section>
    )
}

export default HostVans