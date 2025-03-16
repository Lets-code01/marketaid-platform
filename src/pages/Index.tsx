
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Star, Users, TrendingUp, Award, BadgeCheck } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-1/2 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Elevate Your Digital Presence with{" "}
                  <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                    Digi Sanchaar
                  </span>
                </h1>
                <p className="text-lg mb-8 text-gray-700 max-w-xl">
                  Boost your business with targeted marketing strategies and authentic online reviews that build trust and increase conversions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="bg-brand-blue hover:bg-blue-600">
                    <Link to="/clients">
                      For Clients <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                    <Link to="/students">
                      For Students <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 animate-fade-in">
                <img 
                  src="/placeholder.svg" 
                  alt="Digital Marketing" 
                  className="rounded-lg shadow-xl"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive suite of digital marketing services to help your business thrive in the online world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 card-hover animate-slide-up">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Review Management</h3>
                <p className="text-gray-600 mb-4">
                  Boost your online reputation with authentic reviews across Google Maps, JustDial, Practo, Amazon, and Play Store.
                </p>
                <Link to="/services/reviews" className="text-brand-blue hover:text-blue-700 inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              {/* Service Card 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 card-hover animate-slide-up">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Improve your search engine rankings with our comprehensive SEO strategies tailored to your business needs.
                </p>
                <Link to="/services/seo-optimization" className="text-brand-purple hover:text-purple-700 inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              {/* Service Card 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 card-hover animate-slide-up">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-brand-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Social Media Marketing</h3>
                <p className="text-gray-600 mb-4">
                  Engage with your audience and build brand loyalty through effective social media campaigns and content.
                </p>
                <Link to="/services/social-media-marketing" className="text-brand-pink hover:text-pink-700 inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Digi Sanchaar?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What sets us apart from other marketing agencies in the industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start animate-slide-up">
                <div className="mr-4 bg-blue-100 p-3 rounded-full">
                  <BadgeCheck className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Authentic Reviews</h3>
                  <p className="text-gray-600">
                    We provide genuine reviews from real users to build authentic trust in your brand and services.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start animate-slide-up">
                <div className="mr-4 bg-purple-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
                  <p className="text-gray-600">
                    Our team consists of marketing professionals with years of experience across various industries.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start animate-slide-up">
                <div className="mr-4 bg-green-100 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Results-Driven Approach</h3>
                  <p className="text-gray-600">
                    We focus on delivering measurable results that directly impact your business growth and ROI.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start animate-slide-up">
                <div className="mr-4 bg-pink-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-brand-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Student Community</h3>
                  <p className="text-gray-600">
                    We empower students to earn while they learn, creating a win-win ecosystem for all stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-purple text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to Transform Your Online Presence?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
              Join thousands of satisfied clients who have boosted their business with our services.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
              <Button size="lg" variant="secondary" asChild className="bg-white text-brand-purple hover:bg-gray-100">
                <Link to="/clients">For Businesses</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-brand-purple">
                <Link to="/students">For Students</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
