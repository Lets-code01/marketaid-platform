
import React from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';

const GoogleMapReviews = () => {
  const features = [
    "Authentic 5-star reviews from real accounts",
    "Boost your Google Maps visibility",
    "Improve local SEO rankings",
    "Enhance business credibility",
    "Detailed customized review content"
  ];

  const benefits = [
    "90% of consumers read online reviews before visiting a business. Having positive Google reviews can significantly influence potential customers' decisions.",
    "Google uses review signals (quantity, velocity, diversity) as ranking factors. More positive reviews help improve your local search ranking.",
    "Positive reviews build trust and credibility for your business, especially for new customers who haven't interacted with your brand before."
  ];

  return (
    <ServicePageLayout
      title="Google Map Reviews"
      description="Boost your business visibility with authentic Google reviews from real users. Our service helps you build a stellar online reputation and improve your local SEO rankings."
      features={features}
      benefits={benefits}
      pricing="₹40 per review (minimum 10 reviews)"
      image="/placeholder.svg"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">How Our Google Map Reviews Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Choose Your Package</h3>
              <p className="text-gray-600">Select the number of reviews you need for your business (minimum 10).</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Share Your Business Details</h3>
              <p className="text-gray-600">Provide information about your business to help us create authentic reviews.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Watch Your Reputation Grow</h3>
              <p className="text-gray-600">We'll post the reviews gradually to maintain authenticity and maximize impact.</p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default GoogleMapReviews;
