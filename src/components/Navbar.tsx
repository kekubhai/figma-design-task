import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="./logo.png" alt="Moonex" className="h-14 w-18" />
        </div>

        {/* Collapsible Button for Mobile */}
        <div className="md:hidden">
          <button
            className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Links Section */}
        <div
          id="navbar"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:items-center gap-4 absolute md:static top-16 left-0 bg-black md:bg-transparent w-full md:w-auto px-4 md:px-0`}
        >
          <a href="#" className="block py-2 md:py-0 hover:text-yellow-400">
            Home
          </a>
          <a href="#" className="block py-2 md:py-0 hover:text-yellow-400">
            About Us
          </a>
          <a href="#" className="block py-2 md:py-0 hover:text-yellow-400">
            Roadmap
          </a>
          <a href="#" className="block py-2 md:py-0 hover:text-yellow-400">
            FAQs
          </a>
          <a href="#" className="block py-2 md:py-0 hover:text-yellow-400">
            Contact Us
          </a>
        </div>

        {/* Connect Wallet Button */}
        <div className="hidden md:block">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full">
            Connect Wallet
          </Button>
        </div>
      </div>

      {/* Mobile "Connect Wallet" Button */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-black px-4 py-2 w-full`}
      >
        <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 rounded-full">
          Connect Wallet
        </Button>
      </div>
    </nav>
  );
}


