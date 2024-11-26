import { Check, X } from "lucide-react";
import React, { useState } from "react";

export default function Comparison() {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const features = [
    "1. Point no one",
    "2. Point no two this",
    "3. Point no three this",
    "4. Point no four this",
    "5. Point no five this",
  ];

  return (
    <section className="w-full">
      <div 
        className="container px-4 py-8 text-2xl border-blue-300 rounded-lg"
        style={{
          backgroundImage: `url('/bg-gradient-img.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          Why <span className="text-yellow-400">MoonEX</span> ?
        </h2>
        
      
        <div className="block md:hidden text-center mb-4">
          <button
            onClick={() => setIsSectionOpen(!isSectionOpen)}
            className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-4 py-2 w-full max-w-xs"
          >
            {isSectionOpen ? "Hide Comparison" : "Show Comparison"}
          </button>
        </div>
        

        <div 
          className={`
            ${isSectionOpen ? 'block' : 'hidden'} md:block
            grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto
          `}
        >
        
          <div className="hidden md:flex justify-around items-center col-span-2">
            <img
              src="/logo.png"
              alt="MoonEX Logo"
              className="h-12 mr-33 w-15 mx-auto"
            />
            <div className="flex items-center">
              <img
                src="/image.png"
                alt="Uniswap"
                className="h-12 w-12 bg-transparent object-cover rounded-full mr-2"
              />
              <span className="text-pink-400 font-mono">Uniswap</span>
            </div>
          </div>

        
          <div className="md:hidden">
            {features.map((feature, index) => (
              <div 
                key={`mobile-feature-${index}`} 
                className="bg-gray-800 rounded-lg mb-2 p-4"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{feature}</span>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <span className="mr-2 text-green-400">MoonEX</span>
                      <Check className="text-green-400" />
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 text-red-400">Uniswap</span>
                      <X className="text-red-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        
          <div className="hidden md:grid md:grid-cols-3 md:col-span-2">
            {features.map((feature, index) => (
              <React.Fragment key={`feature-${index}`}>
                <div className="text-gray-400 py-4 border-t border-gray-800 text-center md:text-left">
                  {feature}
                </div>
                <div className="flex justify-center items-center border-t border-gray-800">
                  <Check className="text-green-400" />
                </div>
                <div className="flex justify-center items-center border-t border-gray-800">
                  <X className="text-red-400" />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
