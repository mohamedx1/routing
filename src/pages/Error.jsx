
import {Link, useNavigate} from "react-router-dom"

function ErrorPage ({
    status = 500,
    title = "Something went wrong",
    message = "We're sorry, but an unexpected error has occurred.",
}) {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-9xl font-bold text-gray-300">{status}</h1>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">{title}</h2>
            <p className="text-gray-600 mt-4 max-w-md">{message}</p>
            <div className="mt-8 flex gap-4">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md transition-colors"
                >
                    Go Back
                </button>
                <Link
                    to="/"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
                >
                    Go Home
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage

