import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPaperPlane,
  FaQuestionCircle,
  FaUtensils,
  FaParking,
  FaWifi,
} from "react-icons/fa";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    guests: "1",
    date: "",
    time: "",
  });

  const [activeTab, setActiveTab] = useState("contact");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      guests: "1",
      date: "",
      time: "",
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const faqs = [
    {
      question: "Do you accept reservations?",
      answer:
        "Yes, we recommend making a reservation, especially for dinner service and weekends. You can call us directly or use our online form.",
    },
    {
      question: "What are your operating hours?",
      answer:
        "We're open Monday-Thursday 11AM-10PM, Friday-Saturday 11AM-11PM, and Sunday 12PM-9PM. Happy hour is daily from 4PM-6PM.",
    },
    {
      question: "Do you have parking available?",
      answer:
        "Yes, we offer complimentary valet parking and street parking is available nearby. Our location is easily accessible by public transportation.",
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer:
        "Absolutely! Our chefs are happy to accommodate vegetarian, vegan, gluten-free, and other dietary needs. Please let us know when making your reservation.",
    },
    {
      question: "Can I host private events?",
      answer:
        "Yes, we offer private dining options for parties of 20 or more. Contact us for menu options and availability.",
    },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-orange-500" />,
      title: "Address",
      details: ["123 Food Street", "Flavor City, FC 12345"],
      link: "https://maps.google.com",
    },
    {
      icon: <FaPhone className="text-2xl text-orange-500" />,
      title: "Phone",
      details: ["(555) 123-4567"],
      link: "tel:+15551234567",
    },
    {
      icon: <FaEnvelope className="text-2xl text-orange-500" />,
      title: "Email",
      details: ["hello@tastyavenue.com"],
      link: "mailto:hello@tastyavenue.com",
    },
    {
      icon: <FaClock className="text-2xl text-orange-500" />,
      title: "Hours",
      details: ["Mon-Thu: 11AM-10PM", "Fri-Sat: 11AM-11PM", "Sun: 12PM-9PM"],
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaPaperPlane className="text-6xl mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              We'd love to hear from you! Reach out for reservations, inquiries,
              or just to say hello.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div {...fadeInUp} className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center">
            {["contact", "reservation", "faq"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 font-medium capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? "text-orange-500 border-b-2 border-orange-500 bg-orange-50"
                    : "text-gray-600 hover:text-orange-500 hover:bg-gray-50"
                }`}
              >
                {tab === "faq" ? "FAQ" : tab}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Tab */}
      {activeTab === "contact" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-16 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="mt-1">{info.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600">
                            {info.link ? (
                              <a
                                href={info.link}
                                className="hover:text-orange-500 transition-colors"
                                target={
                                  info.title === "Address"
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  info.title === "Address"
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    {[
                      {
                        icon: <FaFacebookF />,
                        color: "hover:bg-blue-600",
                        bg: "bg-blue-500",
                      },
                      {
                        icon: <FaTwitter />,
                        color: "hover:bg-blue-400",
                        bg: "bg-blue-400",
                      },
                      {
                        icon: <FaInstagram />,
                        color: "hover:bg-pink-500",
                        bg: "bg-pink-500",
                      },
                      {
                        icon: <FaYoutube />,
                        color: "hover:bg-red-500",
                        bg: "bg-red-500",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 ${social.bg} text-white rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Restaurant Features */}
                <div className="mt-8 p-6 bg-orange-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Restaurant Features
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <FaParking className="text-orange-500" />
                      <span className="text-sm">Free Parking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaWifi className="text-orange-500" />
                      <span className="text-sm">Free WiFi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUtensils className="text-orange-500" />
                      <span className="text-sm">Full Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaQuestionCircle className="text-orange-500" />
                      <span className="text-sm">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="reservation">Reservation</option>
                        <option value="feedback">Feedback</option>
                        <option value="catering">Catering</option>
                        <option value="private-event">Private Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Reservation Tab */}
      {activeTab === "reservation" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-16 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Make a Reservation
              </h2>
              <p className="text-xl text-gray-600">
                Book your table for an unforgettable dining experience
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num.toString()}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                      <option value="8+">8+ Guests</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="14:30">2:30 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
                    placeholder="Any special dietary requirements, celebrations, or seating preferences..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  Request Reservation
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      )}

      {/* FAQ Tab */}
      {activeTab === "faq" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-16 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Find answers to common questions about dining with us
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-3">
                      <FaQuestionCircle className="text-orange-500 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed ml-7">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Still have questions? We're here to help!
              </p>
              <button
                onClick={() => setActiveTab("contact")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default ContactPage;
