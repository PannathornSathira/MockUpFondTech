import React from "react";
import logo from "./components/images/logoRemovebg.png";
import { useLanguage } from "./LanguageContext";
import { Link } from "react-router-dom";
export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  // Navigation content for different languages
  const navContent = {
    en: {
      home: "Home",
      platform: "Tech Supply",
      services: "Product Design-Build",
      health: "Biotech Innovation",
      about: "About Us",
      contact: "Contact Us",
    },
    th: {
      home: "หน้าหลัก",
      platform: "แพลตฟอร์มออนไลน์",
      services: "บริการ OEM",
      health: "โซลูชั่นเฮลธ์เทค",
      about: "เกี่ยวกับเรา",
      contact: "ติดต่อเรา",
    },
  };

  const currentContent = navContent[language];

  return (
    <header className="bg-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={logo}
                alt="Fondtech Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">FondTech</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {currentContent.home}
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {currentContent.services}
            </a>
            <a
              href="/health"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {currentContent.health}
            </a>
            <a
              href="/platform"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {currentContent.platform}
            </a>

            <a
              href="/about"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {currentContent.about}
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-lg transition-colors font-medium flex items-center gap-2"
            >
              <span className="text-sm">🌐</span>
              <span className="text-sm">
                {language === "en" ? "ไทย" : "ENG"}
              </span>
            </button>
            <Link to="/contactus">
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                {currentContent.contact}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
