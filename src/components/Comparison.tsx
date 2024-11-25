import { Check, X } from 'lucide-react'

export default function Comparison() {
  const features = [
    "Point no one",
    "Point no two this",
    "Point no two this",
    "Point no two this",
    "Point no two this",
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">
          Why <span className="text-yellow-400">MoonEX</span> ?
        </h2>
        
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="text-gray-400">Comparison</div>
          <div className="text-center">
            <img src="/public/logo.png" alt="" className="h-12 w-111 mx-auto mb-2 " sizes='20' />
            
          </div>
          <div className="flex items-center m-2 ">
            <img src="/public/image.png" alt="Uniswap" className=" px-10 mb-1 w-15 h-12  bg-transparent object-cover rounded-full" 
            />
            <span className='text-pink-400   font-3xl font-mono'>Uniswap</span>
          </div>
          
          {features.map((feature, index) => (
            <>
              <div key={`feature-${index}`} className="text-gray-400 py-4 border-t border-gray-800">
                {feature}
              </div>
              <div className="flex justify-center items-center border-t border-gray-800">
                <Check className="text-green-400" />
              </div>
              <div className="flex justify-center items-center border-t border-gray-800">
                <X className="text-red-400" />
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

