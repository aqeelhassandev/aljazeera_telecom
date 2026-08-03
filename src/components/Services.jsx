import React from 'react';

const services = [
  {
    title: 'High-Speed Fiber Internet',
    description: 'Get reliable, high-speed fiber connection for your home and business with unlimited data options.',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Enterprise VoIP Solutions',
    description: 'Secure, clear, and feature-rich digital telephony system built for modern business communication.',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Cloud Networking & VPN',
    description: 'Connect your offices and remote workforce securely with our state-of-the-art virtual private networks.',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Managed Cyber Security',
    description: 'Protect your operational infrastructure against digital threats with continuous network monitoring.',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-zinc-950 py-24 sm:py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold uppercase tracking-wider text-blue-500">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tailored Telecom Solutions
          </p>
          <p className="mt-6 text-lg text-zinc-400">
            Discover how we can transform your digital infrastructure with custom, reliable, and high-performance communication systems.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 hover:bg-zinc-900 hover:scale-[1.03] transition-all duration-300 shadow-lg"
              >
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-white">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-zinc-800/80 border border-zinc-700/50">
                    {service.icon}
                  </div>
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
