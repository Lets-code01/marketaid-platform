
import React from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';

const SeoOptimization = () => {
  const features = [
    "Comprehensive keyword research",
    "On-page SEO optimization",
    "Technical SEO audit and fixes",
    "Content strategy development",
    "Backlink building",
    "Monthly performance reports"
  ];

  const benefits = [
    "Improved search engine rankings lead to increased organic traffic and reduced dependency on paid advertising.",
    "Better visibility for relevant search terms brings more qualified leads who are actively looking for your services.",
    "Technical optimization improves user experience, reducing bounce rates and increasing conversion potential."
  ];

  return (
    <ServicePageLayout
      title="SEO Optimization"
      description="Improve your website's visibility and ranking with our comprehensive SEO services. We help businesses achieve sustainable growth through organic search traffic."
      features={features}
      benefits={benefits}
      pricing="₹4,999 per month"
      image="/placeholder.svg"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our SEO Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Initial Audit</h3>
              <p className="text-gray-600">We analyze your website, competitors, and target keywords to establish baseline metrics.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Strategy Development</h3>
              <p className="text-gray-600">We create a customized SEO roadmap based on your specific business needs and goals.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Implementation</h3>
              <p className="text-gray-600">Our team executes the strategy, optimizing content, structure, and technical elements.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Monitor & Refine</h3>
              <p className="text-gray-600">We continuously track progress and adjust strategies to maximize results.</p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default SeoOptimization;
