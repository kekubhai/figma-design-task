import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="./logo.png" alt="Moonex" className="h-14 w-18" />

        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">About Us</a>
          <a href="#" className="hover:text-yellow-400">Roadmap</a>
          <a href="#" className="hover:text-yellow-400">FAQs</a>
          <a href="#" className="hover:text-yellow-400">Contact Us</a>
        </div>

        <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
          Connect Wallet
        </Button>
      </div>
    </nav>
  )
}

