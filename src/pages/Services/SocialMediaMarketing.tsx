
import React from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';

const SocialMediaMarketing = () => {
  const features = [
    "Profile setup and optimization",
    "Content calendar development",
    "Regular posting schedule",
    "Community management",
    "Engagement strategies",
    "Performance analytics"
  ];

  const benefits = [
    "Regular, high-quality content increases brand awareness and keeps your audience engaged with your business.",
    "Strategic social media presence helps build community around your brand, fostering loyalty and repeat business.",
    "Data-driven approach ensures your social media efforts translate to measurable business results and ROI."
  ];

  return (
    <ServicePageLayout
      title="Social Media Marketing"
      description="Engage your audience across multiple social media platforms with our strategic marketing services. We help businesses build brand awareness and community through effective social presence."
      features={features}
      benefits={benefits}
      pricing="₹3,499 per month"
      image="/placeholder.svg"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Social Media Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="h-16 flex items-center justify-center mx-auto mb-4">
                <img src="/placeholder.svg" alt="Facebook" className="h-12" />
              </div>
              <h3 className="text-lg font-semibold">Facebook</h3>
            </div>
            <div className="text-center p-6">
              <div className="h-16 flex items-center justify-center mx-auto mb-4">
                <img src="/placeholder.svg" alt="Instagram" className="h-12" />
              </div>
              <h3 className="text-lg font-semibold">Instagram</h3>
            </div>
            <div className="text-center p-6">
              <div className="h-16 flex items-center justify-center mx-auto mb-4">
                <img src="/placeholder.svg" alt="LinkedIn" className="h-12" />
              </div>
              <h3 className="text-lg font-semibold">LinkedIn</h3>
            </div>
            <div className="text-center p-6">
              <div className="h-16 flex items-center justify-center mx-auto mb-4">
                <img src="/placeholder.svg" alt="Twitter" className="h-12" />
              </div>
              <h3 className="text-lg font-semibold">Twitter</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Social Media Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Strategy Development</h3>
              <p className="text-gray-600">We research your audience and competitors to craft a tailored social media strategy.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Content Creation</h3>
              <p className="text-gray-600">Our team develops engaging posts, graphics, and videos tailored to each platform.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-brand-blue">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Management & Analysis</h3>
              <p className="text-gray-600">We handle posting, community engagement, and provide detailed performance reports.</p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default SocialMediaMarketing;
