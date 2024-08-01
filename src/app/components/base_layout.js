// components/Layout.js
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen ml-64">
        <Header />
        <main className="flex-1 container mx-auto p-4 mt-16 mb-16"> {/* Adjusted margin for header and footer */}
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
