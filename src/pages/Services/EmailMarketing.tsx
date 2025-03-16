
import React from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';

const EmailMarketing = () => {
  const features = [
    "Email template design",
    "Audience segmentation",
    "Campaign strategy development",
    "A/B testing",
    "Automated workflow setup",
    "Performance analytics"
  ];

  const benefits = [
    "Email marketing offers the highest ROI of any digital marketing channel, with an average return of $42 for every $1 spent.",
    "Segmented, targeted emails help nurture leads and move prospects through your sales funnel effectively.",
    "Automated campaigns save time while maintaining regular communication with your audience."
  ];

  return (
    <ServicePageLayout
      title="Email Marketing Campaign"
      description="Connect directly with your customers through strategic email campaigns. Our email marketing services help businesses generate leads, nurture prospects, and drive conversions."
      features={features}
      benefits={benefits}
      pricing="₹3,999 per month"
      image="/placeholder.svg"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Email Marketing Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Strategy & Planning</h3>
              <p className="text-gray-600">We develop an email strategy aligned with your business goals and target audience.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Creation & Testing</h3>
              <p className="text-gray-600">Our team designs engaging templates and writes compelling content optimized for conversions.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Deployment & Analysis</h3>
              <p className="text-gray-600">We manage campaign sending and provide detailed performance metrics and insights.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Types of Email Campaigns We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Welcome Series</h3>
              <p className="text-gray-600">Introduce new subscribers to your brand with a strategic sequence of emails.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Promotional Campaigns</h3>
              <p className="text-gray-600">Announce special offers, discounts, and promotions to drive sales.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Newsletters</h3>
              <p className="text-gray-600">Keep your audience informed with regular updates about your business.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Abandoned Cart Recovery</h3>
              <p className="text-gray-600">Recapture lost sales by reminding customers of items left in their cart.</p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default EmailMarketing;
