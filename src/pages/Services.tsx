
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      title: "Google Map Reviews",
      description: "Boost your local SEO with positive reviews",
      link: "/services/google-reviews",
      image: "/placeholder.svg"
    },
    {
      title: "Just Dial Reviews",
      description: "Enhance visibility on India's largest local search",
      link: "/services/justdial-reviews",
      image: "/placeholder.svg"
    },
    {
      title: "Practo Reviews",
      description: "Build trust for your healthcare practice",
      link: "/services/practo-reviews",
      image: "/placeholder.svg"
    },
    {
      title: "Amazon Reviews",
      description: "Improve product visibility and sales",
      link: "/services/amazon-reviews",
      image: "/placeholder.svg"
    },
    {
      title: "Play Store Reviews",
      description: "Boost app downloads with positive ratings",
      link: "/services/playstore-reviews",
      image: "/placeholder.svg"
    },
    {
      title: "SEO Optimization",
      description: "Comprehensive SEO services for better rankings",
      link: "/services/seo-optimization",
      image: "/placeholder.svg"
    },
    {
      title: "Social Media Marketing",
      description: "Engage audiences across platforms",
      link: "/services/social-media-marketing",
      image: "/placeholder.svg"
    },
    {
      title: "Email Marketing",
      description: "Convert leads with targeted campaigns",
      link: "/services/email-marketing",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Marketing Services</h1>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl">
              Enhance your online presence and grow your business with our comprehensive suite of digital marketing services.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <img src={service.image} alt={service.title} className="h-32 w-auto object-contain" />
                  </div>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to={service.link}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-3">Need a Custom Solution?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Contact our team to discuss your specific marketing needs
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
