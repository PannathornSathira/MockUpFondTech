import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Stethoscope, Brain, Award } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import health_care_img from "./components/images/healthcare_tech.jpg";
import mock2 from "./components/images/mockR&D2.png";
import consiousBedroom from "./components/images/consious_bedroom.png";
import asanaMat from "./components/images/asanaMat.png";
import mpec from "./components/images/MPec.png";
export default function HealthTechSolutionsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const healthTechProducts = [
    {
      id: 1,
      name: "Conscious Bedroom",
      category: "Patient Monitoring",
      developmentYear: "2024",
      image: consiousBedroom,
      description:
        "AI-powered personalized sleep monitoring system developed by FondTech. Utilizes non-contact sensors, advanced AI, and privacy-preserved data processing to improve sleep quality and overall well-being.",
      keyFeatures: [
        "Sleep apnea and cycle detection",
        "Insomnia pattern recognition",
        "Privacy-preserved data processing",
        "Smart bed integration",
        "Personalized AI recommendations",
        "Non-contact biometric sensors",
      ],
      technicalSpecs: {
        "Detection Accuracy": "High-precision sleep disorder detection",
        Sensors:
          "Non-contact sensors and IoT sensors integrated into smart bed",
        Connectivity: "Bluetooth, Wi-Fi",
        Integration: "Supports smart home systems",
        Privacy: "Local AI processing for enhanced privacy",
      },
      developmentHighlights: [
        "In-house development by FondTech engineering and medical team with many partners",
        "AI-driven analysis for personalized sleep insights",
        "Focus on non-intrusive, user-friendly technology",
        "Backed by research partnerships with leading institutions",
      ],
      price: "Contact for Pricing",
      status: "Prototype / Pilot Stage",
    },
    {
      id: 2,
      name: "Seizure Detection",
      category: "Neurological Monitoring",
      developmentYear: "2024",
      image: mock2,
      description:
        "AI-powered seizure detection software developed by FondTech. Designed to analyze EEG signals and automatically detect seizure patterns using advanced preprocessing and machine learning to support clinical specialists and reduce workload.",
      keyFeatures: [
        "Advanced noise-reducing EEG preprocessing",
        "Machine learning for imbalanced seizure data classification",
        "Feature engineering for interpretable results",
        "High detection accuracy and recall",
        "Significant reduction in specialists’ workload",
      ],
      technicalSpecs: {
        Accuracy: "97.12% average accuracy",
        Recall: "93.00% recall",
        Interpretability: "Feature-based model design for explainability",
        Usability: "Optimized for clinical use with reduced noise",
        WorkloadReduction:
          "Reduces specialist workload by an average of 96.45%",
      },
      developmentHighlights: [
        "Explainable AI approach to support clinical trust",
        "Collaborations with hospitals and research institutions",
      ],
      price: "Contact for Pricing",
      status: "Prototype / Pilot Stage",
    },
    {
      id: 3,
      name: "Pressure Sensing Asana Mat",
      category: "Wellness Technology",
      developmentYear: "2024",
      image: asanaMat,
      description:
        "AI-powered yoga mat developed by FondTech to enhance mindful practice. Integrates high-resolution pressure sensors, personalized AI recommendations, and smart connectivity to improve alignment, safety, and awareness in every session.",
      keyFeatures: [
        "Pressure-based pose recognition",
        "Real-time quality and alignment monitoring",
        "Personalized yoga journey with AI guidance",
        "Smart device connectivity and integration",
        "Privacy-focused data handling",
      ],
      technicalSpecs: {
        Sensors: "High-resolution, non-contact pressure sensors",
        Connectivity: "Bluetooth, Smart device compatible",
        AI: "Personalized pose correction and session guidance",
        Monitoring: "Real-time tracking of balance and alignment",
        Privacy: "Local data processing for user confidentiality",
      },
      developmentHighlights: [
        "Designed for safe and mindful yoga practice",
        "Supports better posture and reduces injury risks",
        "In-house algorithm for real-time posture feedback",
        "Developed in collaboration with academic and wellness partners",
      ],
      price: "Contact for Pricing",
      status: "Prototype / Pilot Stage",
    },
    {
      id: 4,
      name: "MSpec - Spectral Preprocessing Environment",
      category: "Scientific Software / Chemometrics",
      developmentYear: "2024",
      image: mpec,
      description:
        "MATLAB-based spectral preprocessing and analysis environment developed for high-throughput evaluation of preprocessing methods in spectroscopic data modeling. MSpec enables rapid comparison of hundreds of preprocessing schemes to optimize model performance.",
      keyFeatures: [
        "Savitzky–Golay smoothing with automated parameter tuning",
        "Baseline correction and noise reduction",
        "Support for OSC/NAS filtering techniques",
        "Automated enumeration of preprocessing pipelines",
        "Performance visualization with RMSEP analysis",
      ],
      technicalSpecs: {
        Language: "MATLAB",
        Methods: "PLSR, SG smoothing, OSC/NAS filtering",
        EvaluationMetric: "RMSEP (Root Mean Square Error of Prediction)",
        Integration: "Modular and extendable MATLAB scripts",
        Usability: "Script-based interface with visual analysis outputs",
      },
      developmentHighlights: [
        "Supports data-driven selection of spectral preprocessing techniques",
        "Improves robustness of calibration models in spectral analysis workflows",
      ],
      price: "Contact for Pricing",
      status: "Available",
    },
  ];

  const developmentCapabilities = [
    {
      title: "In-House R&D Lab",
      description:
        "State-of-the-art research facility with biomedical หpecialist and software developers",
      icon: <Brain className="w-8 h-8" />,
    },
    {
      title: "Clinical Partnerships",
      description:
        "Collaborations with leading hospitals, medical institutions, and government agencies for product validation",
      icon: <Stethoscope className="w-8 h-8" />,
    },
    {
      title: "Regulatory Expertise",
      description: "International medical certification experience",
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Advanced algorithms for predictive complex data and diagnostic assistance",
      icon: <Brain className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${health_care_img})`,
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <p className="text-teal-400 text-sm font-medium mb-4">
              Developed In-House by FondTech
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              BIOTECH
              <br />
              <span className="text-teal-400">INNOVATION</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl leading-relaxed opacity-90">
              Revolutionary biotechnology innovations designed, developed, and
              manufactured by our expert engineering team.
            </p>
          </div>
        </div>
      </section>

      {/* Development Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Designed & Built by FondTech
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Every biotechnology is born from our commitment to innovation. Our
              multidisciplinary team of engineers, designers, and medical
              professionals work together to create breakthrough cutting-age
              technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-600">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Proprietary biotechnology developed through years of research,
              clinical testing, and iterative design
            </p>
          </div>

          <div className="space-y-12">
            {healthTechProducts.map((product, index) => (
              <div
                key={product.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Developed {product.developmentYear}
                    </div>
                    <div
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                        product.status === "Available"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-500 text-white"
                      }`}
                    >
                      {product.status}
                    </div>
                  </div>
                </div>

                <div
                  className={
                    index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                  }
                >
                  <div className="mb-4">
                    <span className="text-teal-600 text-sm font-medium">
                      {product.category}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {product.keyFeatures
                        .slice(0, 4)
                        .map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Development Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {product.developmentHighlights.map(
                        (highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start">
                            <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() =>
                        setSelectedProduct(
                          selectedProduct === product.id ? null : product.id
                        )
                      }
                      className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
                    >
                      View Technical Specs
                    </button>
                    <button className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                      Request Demo
                    </button>
                  </div>

                  {selectedProduct === product.id && (
                    <div className="mt-6 bg-gray-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Technical Specifications:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(product.technicalSpecs).map(
                          ([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="font-medium text-gray-700">
                                {key}:
                              </span>
                              <span className="text-gray-600">{value}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From concept to clinical deployment, every product follows our
              rigorous development methodology
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Research</h3>
              <p className="text-gray-600">
                Extensive market research and clinical needs assessment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">
                Prototyping and iterative design with medical professionals
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-600">
                Clinical trials and regulatory compliance validation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deploy</h3>
              <p className="text-gray-600">
                Manufacturing, quality assurance, and market launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner with FondTech
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Experience the difference of working with advanced technology that's
            designed specifically for your needs by our expert engineering team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contactus">
              <button className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg">
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
