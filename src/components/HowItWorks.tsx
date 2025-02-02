import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Install & Browse",
      description: "Add our extension to your browser and continue browsing as usual"
    },
    {
      number: "02",
      title: "Copy & Capture",
      description: "Copy interesting text from any webpage - we'll automatically save it"
    },
    {
      number: "03",
      title: "Organize & Connect",
      description: "Watch as your research transforms into an organized, visual knowledge map"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;