function RightSidebar () {
    return (
        <aside className="bg-gray-100  min-h-screen p-4">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-2">
                <li className="bg-white p-3 rounded shadow">
                    <p className="text-sm">User John Doe logged in</p>
                    <span className="text-xs text-gray-500">2 minutes ago</span>
                </li>
                <li className="bg-white p-3 rounded shadow">
                    <p className="text-sm">New order received #1234</p>
                    <span className="text-xs text-gray-500">15 minutes ago</span>
                </li>
                <li className="bg-white p-3 rounded shadow">
                    <p className="text-sm">Server backup completed</p>
                    <span className="text-xs text-gray-500">1 hour ago</span>
                </li>
            </ul>
        </aside>
    )
}

export default RightSidebar

