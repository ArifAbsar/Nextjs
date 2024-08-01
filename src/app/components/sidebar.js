// components/Sidebar.js
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="bg-gray-200 w-64 h-full fixed top-0 left-0 pt-16 pb-16"> {/* Adjusted padding for header and footer */}
      <nav className="p-6">
        <ul className="space-y-4">
          <li>
            <Link href="#">
              <div className="block px-4 py-4 rounded transition duration-200 hover:bg-gray-300 active:bg-gray-400 cursor-pointer font-bold">Dashboard</div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="block px-4 py-4 rounded transition duration-200 hover:bg-gray-300 active:bg-gray-400 cursor-pointer font-bold">Requisition</div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="block px-4 py-4 rounded transition duration-200 hover:bg-gray-300 active:bg-gray-400 cursor-pointer font-bold">Vendor Selection</div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="block px-4 py-4 rounded transition duration-200 hover:bg-gray-300 active:bg-gray-400 cursor-pointer font-bold">Purchase Order</div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="block px-4 py-4 rounded transition duration-200 hover:bg-gray-300 active:bg-gray-400 cursor-pointer font-bold">Fund Requisition</div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="block px-4 py-4 rounded transition duration-200 hover:bg-gray-300 active:bg-gray-400 cursor-pointer font-bold">Overseas Purchase</div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
