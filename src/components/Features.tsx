import React from 'react';
import { Brain, Copy, Network } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Copy className="w-8 h-8 mb-4 text-primary" />,
      title: "Smart Text Capture",
      description: "Automatically save and organize text you copy while browsing"
    },
    {
      icon: <Brain className="w-8 h-8 mb-4 text-primary" />,
      title: "AI-Generated Notes",
      description: "Transform captured information into structured, meaningful notes"
    },
    {
      icon: <Network className="w-8 h-8 mb-4 text-primary" />,
      title: "Visual Tab Mapping",
      description: "See your browsing journey in an intuitive, connected graph"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;