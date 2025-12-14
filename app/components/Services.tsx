import React from 'react';
import { Code, Layout, Smartphone } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      title: "Web Design",
      description: "Cozy, charming websites that feel like home.",
      icon: <Layout className="h-8 w-8 text-rose-500" />,
      color: "bg-rose-50", // Soft Pink Background
    },
    {
      title: "Development",
      description: "Fast and smooth, like butter on toast.",
      icon: <Code className="h-8 w-8 text-violet-500" />,
      color: "bg-violet-50", // Soft Purple Background
    },
    {
      title: "Mobile Friendly",
      description: "Looks perfect on your phone, tablet, or watch.",
      icon: <Smartphone className="h-8 w-8 text-orange-500" />,
      color: "bg-orange-50", // Soft Orange Background
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-gray-400 uppercase">
            What I Do
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-800 sm:text-4xl">
            My Superpowers ✨
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className={`group p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${service.color}`}
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;