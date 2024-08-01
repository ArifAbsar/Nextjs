// components/Header.js
export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 fixed w-full z-10 top-0 left-0">
      <div className="flex justify-between items-center px-4 ml-64">
        <div className="text-xl font-bold">CATO</div>
        <nav>
          <span className="px-3">Primary Apps</span>
          <span className="px-3">Secondary Apps</span>
          <span className="px-3">Accounting</span>
        </nav>
        <div className="text-sm">admin</div>
      </div>
    </header>
  );
}
