import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import planning_img from "./components/images/planning.jpg";
import working_img from "./components/images/working_office.jpg";
import job_meeting_img from "./components/images/job-meeting.jpg";
import team_img from "./components/images/team.jpg";
export default function AboutUs() {
  const stats = [
    { number: "500+", label: "Publications" },
    { number: "10+", label: "Partners" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  const values = [
    {
      icon: "💡",
      title: "Innovation",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions that drive your business forward.",
    },
    {
      icon: "❤️",
      title: "Quality",
      description:
        "Excellence is our standard. Every solution we deliver meets the highest quality benchmarks.",
    },
    {
      icon: "👥",
      title: "Partnership",
      description:
        "We believe in building lasting relationships with our clients through trust and collaboration.",
    },
    {
      icon: "🌍",
      title: "Impact",
      description:
        "Our solutions create meaningful change that transforms businesses and improves lives.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Import Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            ABOUT <span className="text-teal-600">US</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are pioneers in technology innovation, dedicated to transforming
            businesses through cutting-edge solutions and unwavering commitment
            to excellence.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={working_img}
          alt="Our team at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Building the Future Together
            </h2>
            <p className="text-lg">Innovation • Excellence • Partnership</p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-teal-100 text-teal-600 px-6 py-3 rounded-full inline-block mb-6">
                <h2 className="text-xl font-bold">Who We Are</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded with a vision to bridge the gap between technology and
                business success, Fondtech has grown into a trusted partner for
                companies seeking innovative solutions. We specialize in
                technology supply, product design&build, and biotech innovations
                that drive measurable results.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our team of experts combines deep technical knowledge with
                industry insights to deliver solutions that not only meet
                today's challenges but anticipate tomorrow's opportunities.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={team_img}
                  alt="Team collaboration"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Goal Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Vision */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-gray-100 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To be the leader in technology innovation, creating solutions
                that transform industries and improve lives. We envision a
                future where technology seamlessly integrates with human needs
                to create extraordinary outcomes.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our vision drives us to continuously evolve, adapt, and pioneer
                new frontiers in digital transformation and technological
                advancement.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src={job_meeting_img}
                  alt="Innovation and vision"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Our Goal */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src={planning_img}
                  alt="Achieving goals"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Goal
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To deliver exceptional technology solutions that exceed client
                expectations while maintaining the highest standards of quality,
                innovation, and service. We aim to be the trusted partner that
                businesses turn to for their most critical technology
                challenges.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every project we undertake is an opportunity to demonstrate our
                commitment to excellence and our dedication to driving
                meaningful business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company
              culture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Shall we begin?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with innovative technology
            solutions? Let's start the conversation today.
          </p>
          <Link to="/contactus">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      {/* Import Footer Component */}
      <Footer />
    </div>
  );
}
