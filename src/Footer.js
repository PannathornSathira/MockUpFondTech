import React from "react";
import { Phone, Mail, MapPin, Shield, Truck, RefreshCw } from "lucide-react";
import logo from "./components/images/logoRemovebg.png";
import { useLanguage } from "./LanguageContext";
export default function Footer() {
  const { language } = useLanguage();

  const navFooter = {
    en: {
      OurService: "Our Services",
      platform: "Tech Supply",
      services: "Product Design-Build",
      health: "Biotech Innovation",
      about: "About Us",
      contact: "Contact Us",
      policy: "Our Policy",

      terms: "Terms & Conditions",
    },
    th: {
      OurService: "บริการของเรา",
      platform: "แพลตฟอร์มออนไลน์",
      services: "บริการ OEM",
      health: "โซลูชั่นเฮลธ์เทค",
      about: "เกี่ยวกับเรา",
      contact: "ติดต่อเรา",
      policy: "นโยบายของเรา",

      terms: "ข้อกำหนดและเงื่อนไข",
    },
  };
  const footerContent = {
    en: {
      address1: "Bhiraj Tower at BITEC,Floor 23rd, 4345 Sukhumvit Road",
      address2:
        "Bangna Tai Sub-District, Bangna District, Bangkok 10260 Thailand",
    },
    th: {
      address1:
        "อาคารภิรัช ทาวเวอร์ แอท ไบเทค, ชั้น 23 เลขที่ 4345 ถนน สุขุมวิท",
      address2: "แขวงบางนาใต้ เขตบางนา, กทม. 10260 ",
    },
  };

  const navFooterContent = navFooter[language];
  const navFooterContentAddress = footerContent[language];
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6 bg-gray-600 p-4 rounded-lg text-white">
              <div className="w-10 h-10 rounded-full overflow-hidden ">
                <img
                  src={logo}
                  alt="Fondtech Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold">FondTech</span>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {navFooterContent.ourServices}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="/health"
                  className="hover:text-teal-400 transition-colors"
                >
                  {navFooterContent.health}
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-teal-400 transition-colors"
                >
                  {navFooterContent.services}
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  className="hover:text-teal-400 transition-colors"
                >
                  {navFooterContent.platform}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 ">
              {navFooterContent.contact}
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">fondtech.inno@outlook.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">+66(0)2-017-5269</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="mt-0.5">
                  <MapPin size={16} />
                </div>
                <div className="text-xs">
                  <div>{navFooterContentAddress.address1}</div>
                  <div>{navFooterContentAddress.address2}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Policy */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {navFooterContent.policy}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  {navFooterContent.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Fondtech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
