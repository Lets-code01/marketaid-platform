
import React from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';

const PractoReviews = () => {
  const features = [
    "Authentic patient testimonials",
    "Healthcare-focused review content",
    "Medical expertise highlighted in reviews",
    "5-star ratings to boost your profile",
    "Regular review performance reports"
  ];

  const benefits = [
    "Practo is India's leading healthcare platform. Positive reviews help you stand out among thousands of healthcare providers.",
    "Patients trust other patients' experiences. Positive reviews build credibility for your medical practice.",
    "Higher ratings on Practo directly correlate with increased appointment bookings and patient inquiries."
  ];

  return (
    <ServicePageLayout
      title="Practo Reviews"
      description="Build trust and credibility for your healthcare practice with authentic patient testimonials. Our Practo review service helps medical professionals enhance their online reputation."
      features={features}
      benefits={benefits}
      pricing="₹40 per review (minimum 10 reviews)"
      image="/placeholder.svg"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">How Our Practo Review Service Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Choose Your Package</h3>
              <p className="text-gray-600">Select the number of Practo reviews based on your practice needs.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Share Practice Details</h3>
              <p className="text-gray-600">Provide information about your medical specialties and services.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Watch Your Reputation Grow</h3>
              <p className="text-gray-600">We post authentic-looking patient reviews to boost your Practo profile.</p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default PractoReviews;
