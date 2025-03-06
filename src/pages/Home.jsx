import {useEffect, useState} from "react"

function Home () {

    const [count, setCount] = useState(0)

    function Mounting () {
        console.log("Mounting")
    }


    function updating () {
        console.log("updating")
    }


    useEffect(() => {
        Mounting()
    }, [])


    useEffect(() => {
        updating()
    }, [count])


    return (
        <div className="bg-white shadow rounded-lg p-6">
            <button onClick={() => {setCount(2)}}>++++</button>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Our Website {count}</h1>
            <p className="text-xl text-gray-600 mb-8">Discover amazing content and services.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900">Feature 1</h3>
                    <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900">Feature 2</h3>
                    <p className="mt-1 text-sm text-gray-600">
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900">Feature 3</h3>
                    <p className="mt-1 text-sm text-gray-600">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home

