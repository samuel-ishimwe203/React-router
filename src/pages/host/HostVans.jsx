
import { Link, useLoaderData } from 'react-router-dom'

import { getHostVans} from '../../api'

export function loader({params}){

    return getHostVans(params.id) 

}


function HostVans() {

    const vans= useLoaderData()
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
               
                        <section>
                            {hostVansEl}
                        </section>
               
            </div>
        </section>
    )
}

export default HostVans