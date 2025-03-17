
import React from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';

const PlayStoreReviews = () => {
  const features = [
    "5-star app ratings",
    "Detailed user feedback",
    "Focused on app features",
    "Strategic posting schedule",
    "Regular rating improvement reports"
  ];

  const benefits = [
    "Higher-rated apps get more visibility in the Google Play Store, directly impacting download numbers.",
    "Apps with more positive reviews have higher conversion rates, turning browsers into users.",
    "Positive feedback helps establish your app's credibility and encourages users to try your application."
  ];

  return (
    <ServicePageLayout
      title="Play Store App Reviews"
      description="Improve your app's ranking and downloads with positive user reviews. Our Play Store review service helps boost your app's visibility and credibility."
      features={features}
      benefits={benefits}
      pricing="₹40 per review (minimum 10 reviews)"
      image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" // Technology-related image
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">How Our Play Store Review Service Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Select Your Package</h3>
              <p className="text-gray-600">Choose how many Play Store reviews you need for your app.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Share App Details</h3>
              <p className="text-gray-600">Provide information about your app features and functionality.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">See Your App Rating Improve</h3>
              <p className="text-gray-600">We post authentic-looking reviews strategically to boost your app rating.</p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default PlayStoreReviews;
