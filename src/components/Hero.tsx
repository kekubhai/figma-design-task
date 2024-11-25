import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      
      <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse" />
      <div className="absolute bottom-40 right-40 w-2 h-2 bg-white rounded-full animate-pulse" />
      
     
      <div className="absolute top-20 right-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Trusted Multi-Chain
            <br />
            <span className="text-yellow-400">DEX</span> Platform
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className="flex gap-4">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full">
              Connect Wallet
            </Button>
            <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
              Trade Crypto
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

