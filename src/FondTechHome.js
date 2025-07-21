import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import fondtech_exp from "./components/images/fondtech_exp.png";
import coding_img from "./components/images/coding.jpg";
import neuro_tech from "./components/images/neuro_tech.jpg";
import industrial_lab from "./components/images/Industrial_lab.jpg";
import { useLanguage } from "./LanguageContext";

export default function FondTechHome() {
  const [activeService, setActiveService] = useState(null);
  const { language } = useLanguage(); // Get language from context

  // Language content object
  const content = {
    en: {
      tagline: "Connecting Technology and Innovation",
      heroTitle: "PIONEERING TECH",
      heroSubtitle: "SOLUTIONS",
      whatWeSell: "WHAT WE HAVE",
      seeMore: "See More",
      ourServices: "Our Services",
      servicesDesc:
        "Comprehensive technology solutions designed to transform your business operations and drive innovation across industries.",
      experienceTitle: "EXPERIENCE THE FONDTECH",
      experienceSubtitle: "DIFFERENCE",
      experienceDesc:
        "At Fondtech, we combine cutting-edge technology with advance research from top universities to deliver solutions that transform businesses. Our innovative approach ensures that every client receives personalized service and measurable results.",
      aboutUs: "About Us",
      services: [
        {
          id: 1,
          title: "Biotech Innovations",
          description: "Next-generation software and hardware development",
          icon: "🧬",
          details:
            "As a technology-driven startup, we specialize in developing cutting-edge biotech solutions that combine software and hardware to tackle real-world challenges in health, environment, and industry.",
        },
        {
          id: 2,
          title: "Product Design-Build ",
          description: "Custom hardware and product manufacturing",
          icon: "🛠️",
          details:
            "Our in-house lab provides OEM services, allowing clients to collaborate with us on the design and production of their own technology products—such as air purifiers and more—with full support from concept to prototype.",
        },
        {
          id: 3,
          title: "Tech Supply",
          description: "Import and distribution of specialized tech solutions",
          icon: "📦",
          details:
            "We source and import high-tech and specialized products from global partners, delivering unique solutions to meet specific customer needs—even those that are rare or hard to find in the market.",
        },
      ],
      products: [
        {
          name: "Industrial Equipment Laboratory",
          info: "Expertise in mechanical systems, hardware testing, and prototyping.",
        },
        {
          name: "Software & AI Lab",
          info: "Home to our in-house software, data analytics, and AI innovations.",
        },
        {
          name: "Health & Neuro Tech",
          info: "Specialized in healthcare technology, with a focus on neurology and integrated solutions.",
        },
      ],
    },
    th: {
      tagline: "เชื่อมต่อเทคโนโลยีและนวัตกรรม",
      heroTitle: "เทคโนโลยีชั้นนำ",
      heroSubtitle: "โซลูชั่น",
      whatWeSell: "สินค้าของเรา",
      seeMore: "ดูเพิ่มเติม",
      ourServices: "บริการของเรา",
      servicesDesc:
        "โซลูชั่นเทคโนโลยีที่ครอบคลุม ออกแบบมาเพื่อเปลี่ยนแปลงการดำเนินงานธุรกิจของคุณและขับเคลื่อนนวัตกรรมในทุกอุตสาหกรรม",
      experienceTitle: "สัมผัสประสบการณ์",
      experienceSubtitle: "ฟอนด์เทค",
      experienceDesc:
        "ที่ Fondtech เราผสมผสานเทคโนโลยีล้ำสมัยกับความเชี่ยวชาญในเทคโนโลยี่ เพื่อส่งมอบโซลูชั่นที่เปลี่ยนแปลงธุรกิจ แนวทางที่เป็นนวัตกรรมของเราทำให้ลูกค้าทุกรายได้รับบริการที่เป็นส่วนตัวและผลลัพธ์ที่วัดผลได้",
      aboutUs: "เกี่ยวกับเรา",
      services: [
        {
          id: 1,
          title: "แพลตฟอร์มออนไลน์",
          description: "โซลูชั่นดิจิทัลล้าสมัยสำหรับธุรกิจสมัยใหม่",
          icon: "🌐",
          details:
            "แพลตฟอร์มออนไลน์ที่ครอบคลุมของเราเชื่อมต่อธุรกิจกับโซลูชั่นเทคโนโลยีที่เป็นนวัตกรรม ปรับปรุงการดำเนินงานและยกระดับประสบการณ์ลูกค้า",
        },
        {
          id: 2,
          title: "บริการ OEM",
          description: "โซลูชั่นการผลิตอุปกรณ์ต้นฉบับ",
          icon: "⚙️",
          details:
            "บริการผลิตแบบกำหนดเองตามข้อกำหนดของคุณ รับประกันคุณภาพและความน่าเชื่อถือในทุกผลิตภัณฑ์ที่เราส่งมอบ",
        },
        {
          id: 3,
          title: "โซลูชั่นเฮลธ์เทค",
          description: "นวัตกรรมเทคโนโลยีสุขภาพที่ปฏิวัติวงการ",
          icon: "🏥",
          details:
            "โซลูชั่นเทคโนโลยีสุขภาพขั้นสูงที่ปรับปรุงผลลัพธ์ของผู้ป่วยและปรับปรุงการดำเนินงานด้านสุขภาพผ่านเครื่องมือดิจิทัลที่เป็นนวัตกรรม",
        },
      ],
      products: [
        {
          name: "Industrial Equipment Laboratory",
          info: "เชี่ยวชาญด้านระบบกลไก การทดสอบฮาร์ดแวร์ และการสร้างต้นแบบ",
        },
        {
          name: "Software & AI Lab",
          info: "ศูนย์รวมซอฟต์แวร์ ข้อมูล และนวัตกรรม AI ที่พัฒนาขึ้นเองภายใน",
        },
        {
          name: "Health & Neuro Tech",
          info: "เชี่ยวชาญด้านเทคโนโลยีเพื่อสุขภาพ โดยเฉพาะในสาขาประสาทวิทยาและระบบแบบบูรณาการ",
        },
      ],
    },
  };

  const currentContent = content[language];

  const products = [
    {
      name: currentContent.products[0].name,
      info: currentContent.products[0].info,
      image: industrial_lab,
    },
    {
      name: currentContent.products[1].name,
      info: currentContent.products[1].info,
      image: coding_img,
    },
    {
      name: currentContent.products[2].name,
      info: currentContent.products[2].info,
      image: neuro_tech,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Import Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-gray-50 to-gray-100 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-600 text-sm font-medium mb-4">
            {currentContent.tagline}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-7 ">
            {currentContent.heroTitle}
            <br />

            <div className="text-teal-600 mt-5">
              {currentContent.heroSubtitle}
            </div>
          </h1>
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-12">
              {currentContent.whatWeSell}
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{product.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.ourServices}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {currentContent.servicesDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button
                  onClick={() =>
                    setActiveService(
                      activeService === service.id ? null : service.id
                    )
                  }
                  className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
                >
                  {currentContent.seeMore}
                </button>
                {activeService === service.id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 text-sm">{service.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {currentContent.experienceTitle}
                <br />
                <span className="text-teal-600">
                  {currentContent.experienceSubtitle}
                </span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {currentContent.experienceDesc}
              </p>
              <Link to="/about">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                  {currentContent.aboutUs}
                </button>
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={fondtech_exp}
                  alt="Fondtech Experiences"
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
