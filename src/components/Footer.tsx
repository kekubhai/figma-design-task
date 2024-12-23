import { TwitterLogoIcon } from '@radix-ui/react-icons'

import { FaTelegram } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa"
export default function Footer() {
  return (
    <footer className="bg-slate-950 border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Moonex" className="h-18 w-18" />

          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-yellow-400">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400">Disclaimer</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-yellow-400">Support</a>
              <a href="#" className="hover:text-yellow-400">Community</a>
              <a href="#" className="hover:text-yellow-400">Blog</a>
            </div>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-yellow-400">About Us</a>
            <a href="#" className="hover:text-yellow-400">Roadmap</a>
            <a href="#" className="hover:text-yellow-400">FAQs</a>
            <a href="#" className="hover:text-yellow-400">Contact Us</a>
          </div>
          
          <div className=" gap-4">
          <h2 className="text-4xl  font-bold  mt-2 p-4">
          Contact <span className="text-yellow-400 ">Us</span> 
        </h2>
        <div className='flex   align-centre space-x-4  justify-center'>

            <a href="#" className="hover:text-yellow-400">
              <FaTelegram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaRedditAlien className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <TwitterLogoIcon className="w-6 h-6" />
            </a>
        </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

