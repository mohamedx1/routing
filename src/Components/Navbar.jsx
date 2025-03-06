import {Link} from "react-router-dom"

// eslint-disable-next-line react/prop-types
function Navbar () {

    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <button

                            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-4"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <Link to="/" className="flex-shrink-0">
                            <span className="text-xl font-bold">Logo</span>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/home" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                    Home
                                </Link>
                                <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                    About
                                </Link>
                                <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                    Services
                                </Link>
                                <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <button

                            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-4"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">Sign In</button>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Navbar

