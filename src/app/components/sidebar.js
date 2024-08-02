"use client";
import { useActiveSection } from '../ActiveSectionContext';

export default function Sidebar() {
  const { setActiveSection } = useActiveSection();

  const links = [
    { section: 'dashboard', label: 'Dashboard' },
    { section: 'requisition', label: 'Requisition' },
    { section: 'vendor-selection', label: 'Vendor Selection' },
    { section: 'purchase-order', label: 'Purchase Order' },
    { section: 'fund-requisition', label: 'Fund Requisition' },
    { section: 'overseas-purchase', label: 'Overseas Purchase' }
  ];

  return (
    <aside className="bg-gray-200 w-64 h-full fixed top-0 left-0 pt-16 pb-16">
      <nav className="p-6">
        <ul className="space-y-4">
          {links.map(link => (
            <li key={link.section}>
              <div
                onClick={() => {
                  console.log(`Clicking on ${link.section}`);
                  setActiveSection(link.section);
                }}
                className="block px-4 py-4 rounded transition duration-200 cursor-pointer font-bold hover:bg-gray-300 active:bg-gray-400"
              >
                {link.label}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
