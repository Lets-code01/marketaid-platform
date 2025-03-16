
import React from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';

const JustDialReviews = () => {
  const features = [
    "Verified JustDial reviews from real accounts",
    "5-star ratings to boost your profile",
    "Detailed feedback tailored to your business",
    "Profile optimization recommendations",
    "Regular reporting on review performance"
  ];

  const benefits = [
    "JustDial is India's leading local search engine with millions of monthly users. Positive reviews on this platform significantly increase your visibility.",
    "Higher ratings on JustDial improve your search positioning, helping potential customers find you more easily.",
    "Authentic positive reviews build trust and credibility for your business in the competitive Indian market."
  ];

  return (
    <ServicePageLayout
      title="JustDial Reviews"
      description="Enhance your JustDial profile with positive customer feedback and 5-star ratings. Our service helps boost your visibility on India's largest local search platform."
      features={features}
      benefits={benefits}
      pricing="₹40 per review (minimum 10 reviews)"
      image="/placeholder.svg"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">How Our JustDial Review Service Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Select Your Package</h3>
              <p className="text-gray-600">Choose how many JustDial reviews you need for your business.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Provide Business Information</h3>
              <p className="text-gray-600">Share details about your services to help us create authentic reviews.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">See Your JustDial Ranking Improve</h3>
              <p className="text-gray-600">Our team posts reviews strategically to maximize your visibility and rating.</p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default JustDialReviews;
