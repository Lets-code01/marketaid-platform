
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: string;
  ctaText?: string;
  image?: string;
  children?: React.ReactNode;
}

const ServicePageLayout = ({
  title,
  description,
  features,
  benefits,
  pricing,
  ctaText = "Get Started",
  image = "/placeholder.svg",
  children
}: ServicePageLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
                <p className="text-lg text-gray-700 mb-6">{description}</p>
                <div className="space-y-3 mb-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button onClick={() => navigate('/clients')}>
                    {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" onClick={() => navigate('/contact')}>
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img src={image} alt={title} className="max-w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {children}

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Our {title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-brand-blue font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Benefit {index + 1}</h3>
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-6">Our {title} start at {pricing}</p>
            <Button size="lg" onClick={() => navigate('/clients')}>
              Order Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
