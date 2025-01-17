import React from "react"
import { Outlet } from "react-router-dom"

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="text-white py-[12px] md:py-[16px] border-b border-[#E0E0E0]">
        <nav className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="w-24 md:w-30" />
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-[#6C6C6C] text-center py-[12px] md:py-[16px] border-t border-[#E0E0E0]">
        <p className="content">© 2025 Ölevo | All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Layout
