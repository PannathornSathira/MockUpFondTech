import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLanguage } from "./LanguageContext";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const { language } = useLanguage();

  // Language content object
  const content = {
    en: {
      tagline: "Get In Touch With Our Team",
      heroTitle: "CONTACT",
      heroSubtitle: "US",
      heroDesc:
        "Ready to transform your business with innovative technology solutions? We're here to help you every step of the way.",
      contactInfo: "Contact Information",
      getInTouch: "Get In Touch",
      formTitle: "Send Us a Message",
      formDesc: "Fill out the form below and we'll get back to you.",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      companyLabel: "Company Name",
      phoneLabel: "Phone Number",
      serviceLabel: "Service Interest",
      messageLabel: "Message",
      submitButton: "Send Message",
      submittingButton: "Sending...",
      successMessage: "Thank you for your message! We'll get back to you soon.",
      errorMessage: "Something went wrong. Please try again.",
      namePlaceholder: "Enter your full name",
      emailPlaceholder: "Enter your email address",
      companyPlaceholder: "Enter your company name",
      phonePlaceholder: "Enter your phone number",
      messagePlaceholder: "Tell us about your project or requirements...",
      serviceOptions: [
        "Select a service",
        "Biotech Innovation",
        "Product Design-Build",
        "Tech Supply",
        "General Inquiry",
      ],
      contactDetails: [
        {
          title: "Office Address",
          info: "Bhiraj Tower at BITEC Sukhumvit Road Bangna District Bangkok Thailand",
          icon: "📍",
        },
        {
          title: "Phone",
          info: "+66(0)2-017-5269",
          icon: "📞",
        },
        {
          title: "Email",
          info: "fondtech.inno@outlook.com",
          icon: "✉️",
        },
        {
          title: "Business Hours",
          info: "Monday - Friday: 9:00 AM - 6:00 PM",
          icon: "🕒",
        },
      ],
      whyChooseUs: "Why Choose Fondtech?",
      chooseReasons: [
        {
          title: "Expert Team",
          description:
            "Our skilled professionals bring years of experience in technology innovation.",
          icon: "👥",
        },
        {
          title: "Cutting-edge Solutions",
          description:
            "We utilize the latest technology to deliver superior results.",
          icon: "🚀",
        },
        {
          title: "24/7 Support",
          description: "Round-the-clock support to ensure your success.",
          icon: "🛡️",
        },
      ],
    },
    th: {
      tagline: "ติดต่อทีมงานของเรา",
      heroTitle: "ติดต่อ",
      heroSubtitle: "เรา",
      heroDesc:
        "พร้อมที่จะเปลี่ยนแปลงธุรกิจของคุณด้วยโซลูชั่นเทคโนโลยีที่เป็นนวัตกรรม? เราพร้อมช่วยเหลือคุณในทุกขั้นตอน",
      contactInfo: "ข้อมูลการติดต่อ",
      getInTouch: "ติดต่อเรา",
      formTitle: "ส่งข้อความถึงเรา",
      formDesc: "กรอกแบบฟอร์มด้านล่างและเราจะติดต่อกลับหาคุณ",
      nameLabel: "ชื่อ-นามสกุล",
      emailLabel: "อีเมล",
      companyLabel: "ชื่อบริษัท",
      phoneLabel: "เบอร์โทรศัพท์",
      serviceLabel: "บริการที่สนใจ",
      messageLabel: "ข้อความ",
      submitButton: "ส่งข้อความ",
      submittingButton: "กำลังส่ง...",
      successMessage: "ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับเร็วๆ นี้",
      errorMessage: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
      namePlaceholder: "กรอกชื่อ-นามสกุล",
      emailPlaceholder: "กรอกอีเมลของคุณ",
      companyPlaceholder: "กรอกชื่อบริษัท",
      phonePlaceholder: "กรอกเบอร์โทรศัพท์",
      messagePlaceholder: "บอกเราเกี่ยวกับโปรเจ็กต์หรือความต้องการของคุณ...",
      serviceOptions: [
        "เลือกบริการ",
        "นวัตกรรมไบโอเทค",
        "การออกแบบและสร้างผลิตภัณฑ์",
        "จัดหาเทคโนโลยี",
        "สอบถามทั่วไป",
      ],
      contactDetails: [
        {
          title: "ที่อยู่สำนักงาน",
          info: "123 Innovation Drive, Tech District, กรุงเทพฯ 10110",
          icon: "📍",
        },
        {
          title: "โทรศัพท์",
          info: "+66 (0) 2-123-4567",
          icon: "📞",
        },
        {
          title: "อีเมล",
          info: "fondtech.inno@outlook.com",
          icon: "✉️",
        },
        {
          title: "เวลาทำการ",
          info: "จันทร์ - ศุกร์: 9:00 น. - 18:00 น.",
          icon: "🕒",
        },
      ],
      whyChooseUs: "ทำไมต้องเลือกฟอนด์เทค?",
      chooseReasons: [
        {
          title: "ทีมผู้เชี่ยวชาญ",
          description:
            "ผู้เชี่ยวชาญที่มีประสบการณ์หลายปีในด้านนวัตกรรมเทคโนโลยี",
          icon: "👥",
        },
        {
          title: "โซลูชั่นล้ำสมัย",
          description: "เราใช้เทคโนโลยีล่าสุดเพื่อส่งมอบผลลัพธ์ที่เหนือกว่า",
          icon: "🚀",
        },
        {
          title: "การสนับสนุน 24/7",
          description:
            "การสนับสนุนตลอด 24 ชั่วโมงเพื่อให้แน่ใจว่าคุณจะประสบความสำเร็จ",
          icon: "🛡️",
        },
      ],
    },
  };

  const currentContent = content[language];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // EmailJS configuration
      const serviceID = "";
      const templateID = "";
      const publicKey = "";

      // Email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: "pannathorn.fondtech@gmail.com",
      };

      // Send email
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitMessage(currentContent.successMessage);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setSubmitMessage(currentContent.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Import Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="contact"
        className="bg-gradient-to-r from-gray-50 to-gray-100 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-600 text-sm font-medium mb-4">
            {currentContent.tagline}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-7">
            {currentContent.heroTitle}
            <br />
          </h1>
          <h1 className="text-5xl md:text-8xl font-bold text-teal-600 mb-7">
            {currentContent.heroSubtitle}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {currentContent.heroDesc}
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.contactInfo}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.contactDetails.map((detail, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{detail.icon}</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {detail.title}
                </h3>
                <p className="text-gray-600 text-sm">{detail.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {currentContent.formTitle}
              </h2>
              <p className="text-gray-600 mb-8">{currentContent.formDesc}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.nameLabel}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={currentContent.namePlaceholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.emailLabel}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={currentContent.emailPlaceholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.companyLabel}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder={currentContent.companyPlaceholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={currentContent.phonePlaceholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.serviceLabel}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  >
                    {currentContent.serviceOptions.map((option, index) => (
                      <option key={index} value={index === 0 ? "" : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.messageLabel}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={currentContent.messagePlaceholder}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? currentContent.submittingButton
                    : currentContent.submitButton}
                </button>

                {submitMessage && (
                  <div
                    className={`p-4 rounded-lg text-center ${
                      submitMessage === currentContent.successMessage
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {currentContent.whyChooseUs}
                </h2>

                <div className="space-y-6">
                  {currentContent.chooseReasons.map((reason, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg"
                    >
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-xl">{reason.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2">
                            {reason.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder 
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl text-gray-400 mb-2 block">📍</span>
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">
                    Map integration would go here
                  </p>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Import Footer Component */}
      <Footer />
    </div>
  );
}
