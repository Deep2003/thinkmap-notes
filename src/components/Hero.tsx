import React from 'react';
import { Brain, Copy, Network } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center gradient-bg text-white px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 node floating" style={{animationDelay: '0s'}} />
        <div className="absolute top-1/3 right-1/3 node floating" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-1/3 left-1/3 node floating" style={{animationDelay: '1s'}} />
        <div className="absolute node-connection w-32 rotate-45" style={{top: '30%', left: '30%'}} />
        <div className="absolute node-connection w-40 -rotate-45" style={{top: '35%', right: '35%'}} />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8 flex flex-col items-center">
          <img src="/mangrove-logo.png" alt="Mangrove Logo" className="w-24 h-24 mb-4" />
          <h1 className="text-6xl font-bold mb-2">Mangrove</h1>
        </div>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Transform your browsing experience with AI-powered notes and visual tab organization
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
          Add to Browser
        </button>
      </div>
    </div>
  );
};

export default Hero;