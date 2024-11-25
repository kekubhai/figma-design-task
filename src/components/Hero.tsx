import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="inline-block">

    <img src="/bg.png" className="absolute top-0 left-0 h-screen w-screen bg-center bg-contain bg-no-repeat object-cover" alt="Background Image">
      </img>
      <section className="container m-32 pt-32 pb-32 w-screen overflow-hidden relative">
  
      <img
  src="/star-img-1.png"
  className="absolute top-0 left-0 transform translate-x-1/4 z-20"
  alt="Star"
/>

<img
  src="/star-img.png"
  className="absolute top-0 right-0 mr-12 transform translate-y-1/4"
  alt="Star"
/>

<img
  src="/star-img-2.png"
  className="absolute bottom-0 right-0 mb-12 transform -translate-y-1/4"
  alt="Star"
/>
  
  <img
    src="/circles.png"
    className="absolute top-0 left-0 h-screen w-screen bg-center bg-contain bg-no-repeat object-cover z-10"
    alt="Background Circles"
  />


  <img
    src="/bg-gradient-img-1.png"
    className="absolute -top-20 right-12 object-cover z-10"
    sizes="4"
    alt="Gradient Background"
  />

  
  <div className="container mx-auto px-4 relative z-30">
    <div className="max-w-2xl relative">
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
        <Button
          variant="outline"
          className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
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

