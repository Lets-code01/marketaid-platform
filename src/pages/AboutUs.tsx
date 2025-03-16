
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in digital marketing, Rajesh founded Digi Sanchaar to help businesses thrive in the digital landscape.",
      image: "/placeholder.svg"
    },
    {
      name: "Priya Sharma",
      role: "Marketing Director",
      bio: "Priya brings 10+ years of experience in building marketing strategies for companies across various industries.",
      image: "/placeholder.svg"
    },
    {
      name: "Amit Patel",
      role: "Tech Lead",
      bio: "Amit oversees all technical aspects of our services, ensuring seamless implementation and maximum effectiveness.",
      image: "/placeholder.svg"
    },
    {
      name: "Neha Singh",
      role: "Client Success Manager",
      bio: "Neha works directly with our clients to ensure they achieve their business goals through our marketing services.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About Digi Sanchaar</h1>
              <p className="text-lg text-gray-700 mb-6">
                We help businesses build their digital presence and grow through strategic marketing solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Digi Sanchaar was founded in 2018 with a simple mission: to help businesses of all sizes succeed in the increasingly competitive digital landscape. We recognized that many companies struggled to navigate the complex world of online marketing, reviews, and reputation management.
                </p>
                <p className="text-gray-700 mb-4">
                  Our founder, Rajesh Kumar, assembled a team of digital marketing experts with diverse backgrounds to create a comprehensive suite of services designed to meet the unique needs of each client.
                </p>
                <p className="text-gray-700">
                  Today, we've helped over 500 businesses across India improve their online presence, increase their customer base, and achieve sustainable growth through our tailored digital marketing solutions.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Digi Sanchaar team" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Mission & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To empower businesses with effective digital marketing strategies that drive growth, build reputation, and create lasting customer relationships.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  To become India's most trusted digital marketing partner, known for our integrity, results-driven approach, and exceptional client service.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Transparency in all client relationships</li>
                  <li>• Integrity in our business practices</li>
                  <li>• Innovation in our marketing strategies</li>
                  <li>• Excellence in service delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-brand-blue mb-3">{member.role}</p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help your business grow through effective digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
