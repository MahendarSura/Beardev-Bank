import React from "react";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <ul>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded cursor-pointer">Dashboard</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded cursor-pointer">Courses</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded cursor-pointer">Peer Review</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
