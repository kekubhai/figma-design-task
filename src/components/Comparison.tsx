import { Check, X } from "lucide-react";
import React from "react";
import { useState } from "react";

export default function Comparison() {
  const [isSectionOpen, setIsSectionOpen] = useState(true);

  const features = [
    "Point no one",
    "Point no two this",
    "Point no three this",
    "Point no four this",
    "Point no five this",
  ];

  return (
    <section className="w-full">
      <div
        className="container text-2xl border-blue-300 rounded-lg"
        style={{
          backgroundImage: `url('/bg-gradient-img.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <h2 className="text-4xl font-bold mb-4 mt-2 p-4 text-center">
          Why <span className="text-yellow-400">MoonEX</span> ?
        </h2>

        {/* Collapsible Button for Mobile */}
        <div className="md:hidden flex justify-center mb-4">
          <button
            onClick={() => setIsSectionOpen(!isSectionOpen)}
            className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-4 py-2"
          >
            {isSectionOpen ? "Hide Comparison" : "Show Comparison"}
          </button>
        </div>

        {/* Comparison Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto ${
            isSectionOpen ? "block" : "hidden"
          }`}
        >
          {/* Column Headers */}
          <div className="text-yellow-400 font-bold text-center md:text-left">
            Comparison
          </div>
          <div className="text-center">
            <img
              src="/public/logo.png"
              alt="MoonEX Logo"
              className="h-12 w-12 mx-auto mb-2"
              sizes="20"
            />
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <img
              src="/public/image.png"
              alt="Uniswap"
              className="h-12 w-12 bg-transparent object-cover rounded-full mr-2"
            />
            <span className="text-pink-400 font-mono">Uniswap</span>
          </div>

          {/* Features and Icons */}
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
    </section>
  );
}
