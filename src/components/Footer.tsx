import { TwitterLogoIcon } from '@radix-ui/react-icons'
import {  DiscIcon as Discord, RssIcon as Reddit } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Moonex" className="h-8 w-8" />
            <span className="text-xl font-bold">Moonex</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-yellow-400">About Us</a>
            <a href="#" className="hover:text-yellow-400">Roadmap</a>
            <a href="#" className="hover:text-yellow-400">FAQs</a>
            <a href="#" className="hover:text-yellow-400">Contact Us</a>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-400">
              <Discord className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Reddit className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <TwitterLogoIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

