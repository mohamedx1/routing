import axios from "axios";
import {useEffect, useState} from "react"

function Home () {
    const [posts, setPosts] = useState([]);
    const [errorM, setError] = useState(null);

    async function getPosts () {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data)
            }).catch((error) => {
                setError(error.message)
            })
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="bg-white shadow rounded-lg p-6">
            {errorM ? <h1 className="text-3xl font-bold text-gray-900 mb-4"> {errorM} </h1> :
                <><h1 className="text-3xl font-bold text-gray-900 mb-4">  Welcome to Our Website  </h1><p className="text-xl text-gray-600 mb-8">Discover amazing content and services.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.length != 0 ? posts.map((post, index) => (
                        <div key={post.id} className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
                            <p className="mt-1 text-sm text-gray-600">{post.body}</p>
                        </div>
                    )) : <h1 className="text-6xl text-amber-400">Loading...</h1>}
                </div></>}
        </div>

    )
}

export default Home

