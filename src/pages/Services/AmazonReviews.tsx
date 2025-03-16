
import React from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';

const AmazonReviews = () => {
  const features = [
    "Verified purchase reviews",
    "Detailed product feedback",
    "Photo reviews available",
    "Gradual posting for authenticity",
    "Product listing optimization tips"
  ];

  const benefits = [
    "93% of consumers say online reviews impact their purchasing decisions. Amazon reviews directly influence your product's conversion rate.",
    "Products with more reviews rank higher in Amazon search results, increasing visibility and sales potential.",
    "Positive reviews build trust and credibility for your products, reducing purchase hesitation for new customers."
  ];

  return (
    <ServicePageLayout
      title="Amazon Product Reviews"
      description="Increase your product credibility and sales with authentic Amazon reviews. Our service helps boost your product visibility and improve conversion rates."
      features={features}
      benefits={benefits}
      pricing="₹40 per review (minimum 10 reviews)"
      image="/placeholder.svg"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">How Our Amazon Review Service Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Select Your Package</h3>
              <p className="text-gray-600">Choose the number of Amazon reviews based on your product needs.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Share Product Details</h3>
              <p className="text-gray-600">Provide your product ASIN/URL and key features to highlight in reviews.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Watch Your Sales Improve</h3>
              <p className="text-gray-600">We post authentic reviews gradually to maintain credibility and boost sales.</p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default AmazonReviews;
