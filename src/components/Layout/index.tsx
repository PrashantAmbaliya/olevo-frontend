import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="text-white p-4 border-b border-[#E0E0E0]">
        <nav className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="w-30" />
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-[#6C6C6C] text-center py-4 border-t border-[#E0E0E0]">
        <p>© 2025 Ölevo  |  All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
