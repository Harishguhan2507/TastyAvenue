import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUtensils,
  FaHeart,
  FaAward,
  FaUsers,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaStar,
  FaLeaf,
  FaSmile
} from 'react-icons/fa';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const teamMembers = [
    {
      name: 'Chef Marco Rossi',
      role: 'Executive Chef',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop&crop=face',
      description: 'With over 15 years of experience in Italian and Mediterranean cuisine, Chef Marco brings authentic flavors to every dish.'
    },
    {
      name: 'Sarah Chen',
      role: 'Head Sommelier',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'Sarah curates our extensive wine collection, ensuring perfect pairings for every culinary experience.'
    },
    {
      name: 'David Thompson',
      role: 'Restaurant Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'David ensures every guest receives exceptional service and creates memorable dining experiences.'
    }
  ];

  const values = [
    {
      icon: <FaHeart className="text-3xl text-red-500" />,
      title: 'Passion for Food',
      description: 'Every dish is crafted with love and dedication to culinary excellence.'
    },
    {
      icon: <FaLeaf className="text-3xl text-green-500" />,
      title: 'Fresh Ingredients',
      description: 'We source the finest, freshest ingredients from local farmers and suppliers.'
    },
    {
      icon: <FaUsers className="text-3xl text-blue-500" />,
      title: 'Community Focus',
      description: 'Building connections and creating memorable experiences for our community.'
    },
    {
      icon: <FaAward className="text-3xl text-yellow-500" />,
      title: 'Quality First',
      description: 'Excellence in every aspect, from ingredients to service to ambiance.'
    }
  ];

  const testimonials = [
    {
      name: 'Emily Johnson',
      rating: 5,
      comment: 'TastyAvenue has become our family\'s favorite restaurant. The food is always exceptional and the service is outstanding.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Rodriguez',
      rating: 5,
      comment: 'The attention to detail and the quality of ingredients is unmatched. Every visit feels special.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Lisa Wang',
      rating: 5,
      comment: 'From the moment you walk in, you feel welcomed. The ambiance and food create perfect memories.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    }
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
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaUtensils className="text-6xl mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About TastyAvenue
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Where culinary passion meets exceptional dining experiences
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Our Story Section */}
      <motion.section
        {...fadeInUp}
        className="py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2018, TastyAvenue began as a dream to create a dining destination
                  that combines authentic flavors with warm hospitality. What started as a small
                  family-owned restaurant has grown into a beloved culinary landmark.
                </p>
                <p>
                  Our journey began when Chef Marco Rossi, a passionate Italian chef with decades
                  of experience, decided to share his love for authentic Mediterranean cuisine with
                  our community. Today, we proudly serve dishes that tell stories of tradition,
                  innovation, and culinary excellence.
                </p>
                <p>
                  Every ingredient is carefully selected, every dish thoughtfully prepared, and
                  every guest warmly welcomed. We believe that great food brings people together,
                  and we're honored to be part of your special moments.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
                alt="Restaurant interior"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4">
                  <FaClock className="text-2xl text-orange-500" />
                  <div>
                    <div className="font-bold text-gray-800">Since 2018</div>
                    <div className="text-sm text-gray-600">Serving Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        {...fadeInUp}
        className="py-16 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Values</h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Meet Our Team Section */}
      <motion.section
        {...fadeInUp}
        className="py-16 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Meet Our Team</h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Restaurant Features */}
      <motion.section
        {...fadeInUp}
        className="py-16 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose TastyAvenue?</h2>
            <p className="text-xl text-gray-600">Experience dining excellence in every detail</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUtensils className="text-2xl text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Authentic Cuisine</h3>
              <p className="text-gray-600">Traditional recipes with modern twists, prepared by expert chefs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-2xl text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">Daily sourced from local farms and trusted suppliers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSmile className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Exceptional Service</h3>
              <p className="text-gray-600">Warm hospitality and attentive service from our dedicated team</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Customer Testimonials */}
      <motion.section
        {...fadeInUp}
        className="py-16 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Guests Say</h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.section
        {...fadeInUp}
        className="py-16 px-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Visit Us Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-3xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-300">123 Food Street<br />Flavor City, FC 12345</p>
            </div>
            <div className="flex flex-col items-center">
              <FaPhone className="text-3xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-300">(555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <FaEnvelope className="text-3xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">hello@tastyavenue.com</p>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Hours of Operation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-md mx-auto">
              <div>
                <p className="font-semibold">Monday - Thursday</p>
                <p className="text-gray-300">11:00 AM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Friday - Saturday</p>
                <p className="text-gray-300">11:00 AM - 11:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Sunday</p>
                <p className="text-gray-300">12:00 PM - 9:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Happy Hour</p>
                <p className="text-gray-300">Daily 4:00 PM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default AboutPage;
