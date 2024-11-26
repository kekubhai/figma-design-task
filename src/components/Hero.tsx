import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative inline-block w-full py-20 mt-30 mb-32">
      
      <img 
        src="/bg.png" 
        className="absolute top-0 left-0 w-full h-screen  bg-center bg-cover bg-no-repeat object-cover" 
        alt="Background Image" 
      />

      <section className="relative container mx-auto px-4 pt-24 md:pt-32 pb-24 md:pb-32 overflow-hidden">

        <img
          src="/star-img-1.png"
          className="absolute top-0 left-0 w-16 md:w-auto transform translate-x-1/4 z-20"
          alt="Star"
        />

        <img
          src="/star-img.png"
          className="absolute top-0 right-0 w-16 md:w-auto mr-4 md:mr-12 transform translate-y-1/4"
          alt="Star"
        />

        <img
          src="/star-img-2.png"
          className="absolute bottom-0 right-0 w-16 md:w-auto mb-4 md:mb-12 transform -translate-y-1/4"
          alt="Star"
        />
  
        {/* Circles Background */}
        <img
          src="/circles.png"
          className="absolute top-0 left-0 w-full h-screen bg-center bg-contain bg-no-repeat object-cover z-10"
          alt="Background Circles"
        />

       
        <img
          src="/bg-gradient-img-1.png"
          className="absolute -top-10 md:-top-20 right-0 md:right-12 w-48 md:w-auto object-cover z-10"
          alt="Gradient Background"
        />

      
        <div className="relative z-30">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Trusted Multi-Chain
              <br />
              <span className="text-yellow-400">DEX</span> Platform
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8">
              Trade, earn, and own crypto on the all-in-one multi-chain DEX
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full w-full sm:w-auto">
                Connect Wallet
              </Button>
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 w-full sm:w-auto"
              >
                Trade Crypto
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

