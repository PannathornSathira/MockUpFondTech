import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Truck,
  RefreshCw,
  CheckCircle,
  Star,
  ShoppingCart,
  Eye,
  Search,
  FileText,
  Package,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import customed_com from "./components/images/customized_computer.png";
import ar_glases from "./components/images/AR_glasses.png";
import lab_equipment from "./components/images/Lab_equipment.png";

export default function OnlinePlatformPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Products", count: 15 },
    { id: "industrial", name: "Industrial Solutions", count: 6 },
    { id: "food", name: "Food Technology", count: 4 },
    { id: "health", name: "Health Tech", count: 3 },
    { id: "analytics", name: "Data Analytics", count: 2 },
  ];

  const products = [
    {
      id: 1,
      name: "Customized Lab-Grade Computer System",
      category: "computing",
      image: customed_com,
      description:
        "High-performance computing workstation tailored for lab simulations, data processing, and instrument control.",
      features: [
        "Customizable GPU/CPU configurations",
        "Scientific software pre-installed",
        "IoT and sensor integration ready",
        "Reliable thermal management",
      ],
      inStock: true,
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Advanced Technology AR Glasses for Research",
      category: "wearables",
      image: ar_glases,
      description:
        "AR glasses designed for research and educational purposes, ideal for simulation, remote guidance, and immersive learning.",
      features: [
        "Real-time environment overlay",
        "Hands-free documentation",
        "Remote collaboration features",
        "Custom app integration",
      ],
      inStock: true,
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Precision Mechanical Testing Equipment",
      category: "lab-equipment",
      image: lab_equipment,
      description:
        "Industrial-grade mechanical testing instruments used in engineering faculties for tensile, compression, and fatigue testing.",
      features: [
        "Digital force measurement",
        "Automated calibration",
        "Multiple load cell compatibility",
        "Data logging and analysis software",
      ],
      inStock: true,
      rating: 4.7,
      reviews: 67,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-600 text-sm font-medium mb-4">
            Global Import & Procurement Services
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            ADVANCED TECHNOLOGY
            <br />
            <span className="text-teal-600">IMPORT SERVICE</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Can't find cutting-edge technology products in Thailand? We can help
            you in importing and sourcing advanced products from leading
            manufacturers worldwide based on your specific requirements.
          </p>

          {/* Search Bar 
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div> */}
        </div>
      </section>

      {/* Categories and Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter 
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? "bg-teal-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span>{category.name}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.id
                        ? "bg-teal-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div> */}
          {/* How It Works Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  How Our Import Service Works
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Simple, transparent process to get the technology you need
                  from anywhere in the world
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    1. Tell Us What You Need
                  </h3>
                  <p className="text-gray-600">
                    Describe the product or technology you're looking for. We'll
                    research and find the best options globally.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    2. Get Detailed Quote
                  </h3>
                  <p className="text-gray-600">
                    Receive comprehensive quote including product cost,
                    shipping, customs, and our service fee.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Package className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    3. We Handle Everything
                  </h3>
                  <p className="text-gray-600">
                    From ordering to customs clearance, we manage the entire
                    import process for you.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Truck className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    4. Delivered to You
                  </h3>
                  <p className="text-gray-600">
                    Your product arrives at your location, ready to use with
                    full documentation and support.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Can Import For You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We have extensive experience importing cutting-edge technology
              products from leading manufacturers worldwide. Here are some
              examples of what we can source for your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  {!product.inStock && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Out of Stock
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-teal-600 font-medium capitalize">
                      {product.category.replace("_", " ")}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-teal-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* No Products Found Message 
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}*/}
        </div>
      </section>

      {/* Why Choose Our Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose FondTech Products?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Every product is backed by our commitment to quality, innovation,
              and customer success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                Products undergo rigorous testing and come with comprehensive
                warranties
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick shipping and professional installation services
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support</h3>
              <p className="text-gray-600">
                Technical support and maintenance services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect solution for your
            business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contactus">
              <button className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center justify-center">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
