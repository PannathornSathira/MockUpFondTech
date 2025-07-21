import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import pico_pnematic from "./components/images/pico_pneumatic_valve_render.png";
import oem_head from "./components/images/OEM_head.png";
import pi_interface from "./components/images/Pi_Interface_V1.png";
import air_purifier from "./components/images/air_purifier.png";
export default function OEMServices() {
  const products = [
    {
      name: "Pico Pneumatic Valve",
      info: "RP2040-based MicroPython controller for 5/2 pneumatic valves with DRV8871 driver, ideal for soft robotics and automation.",
      image: pico_pnematic,
      category: "Lab Equipment",
    },
    {
      name: "Air Purifiers",
      info: "Customizable air purification systems with advanced filtration",
      image: air_purifier,
      category: "Electronics",
    },
    {
      name: "Pi-interface",
      info: "RP2040 controller with display interface, drivers, industrial power, and Python support.",
      image: pi_interface,
      category: "Lab Equipment",
    },
  ];

  const capabilities = [
    {
      title: "Custom Design & Development",
      description:
        "Tailored solutions designed to meet your specific requirements and brand standards.",
      icon: "🎨",
    },
    {
      title: "Quality Manufacturing",
      description:
        "State-of-the-art manufacturing facilities ensuring consistent quality and reliability.",
      icon: "⚙️",
    },
    {
      title: "Supply Chain Management",
      description:
        "End-to-end supply chain solutions from sourcing to delivery.",
      icon: "🚚",
    },
    {
      title: "Technical Support",
      description:
        "Comprehensive technical support throughout the product lifecycle.",
      icon: "🔧",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "Understanding your requirements and specifications",
    },
    {
      step: "02",
      title: "Design",
      description: "Creating custom solutions tailored to your needs",
    },
    {
      step: "03",
      title: "Prototyping",
      description: "Developing and testing prototypes for validation",
    },
    {
      step: "04",
      title: "Manufacturing",
      description: "Full-scale production with quality assurance",
    },
    {
      step: "05",
      title: "Delivery",
      description: "On-time delivery and ongoing support",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Import Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={oem_head}
          alt="OEM Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Product Design and Manufacturing
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Custom manufacturing solutions designed to bring your vision to
              life
            </p>
          </div>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Manufacturing Expertise
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At FondTech, we go beyond traditional production by offering
              in-house product development through our dedicated innovation lab.
              From design to production, we leverage advanced 3D printing
              technologies and can integrate IoT, motor systems, and other smart
              components to create custom solutions tailored to your needs. Our
              end-to-end process ensures precision, functionality, and
              innovation in every product we deliver.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From initial concept to final delivery, we partner with you
              throughout the entire development process, ensuring your vision
              becomes reality with the highest standards of quality and
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive services that cover every aspect of product
              development and manufacturing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              WHAT YOU CAN ORDER FROM US
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our range of products and manufacturing capabilities
              designed for various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.info}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* 
          <div className="text-center">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium">
              See All Products
            </button>
          </div>
          */}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined approach that ensures quality, efficiency, and
              customer satisfaction at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                WHY CHOOSE
                <br />
                <span className="text-teal-600">FONDTECH ?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Advanced Technology Integration
                    </h3>
                    <p className="text-gray-600">
                      Utilize cutting-edge technologies from advanced lab.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600">
                      Rigorous quality control processes ensuring consistent
                      excellence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Customizable Solutions
                    </h3>
                    <p className="text-gray-600">
                      Design and build products tailored to your specific
                      requirements and vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                  alt="Manufacturing Excellence"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Import Footer Component */}
      <Footer />
    </div>
  );
}
