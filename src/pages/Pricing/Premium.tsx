
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingPremium = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Premium Marketing Plan</h1>
              <p className="text-lg text-gray-700 mb-6">
                Advanced digital marketing solutions for established businesses seeking premium results and dedicated support.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <span className="text-3xl font-bold">₹19,999</span>
                    <span className="text-gray-500">/month</span>
                    <p className="text-gray-600 mt-1">For established businesses and brands</p>
                  </div>
                  <Button size="lg" onClick={() => navigate('/clients')}>
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="text-gray-700 border-t border-gray-200 pt-6 pb-4">
                  The Premium Plan includes all our advanced services for comprehensive digital marketing:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>50 Google Map Reviews</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>50 JustDial/Practo Reviews</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>50 Amazon/PlayStore Reviews</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Advanced SEO Package</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Full Social Media Management</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Content Creation (4 posts/week)</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Email Marketing Campaigns</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Weekly Performance Reports</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Dedicated Account Manager</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Priority Support 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">What's Included in the Premium Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-3">Complete Review Management</h3>
                  <p className="text-gray-700">
                    We'll create a dominant online presence with 50 reviews across Google Maps, JustDial/Practo, and Amazon/PlayStore. These high-quality reviews will establish your brand as a trusted leader in your industry.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-3">Advanced SEO Package</h3>
                  <p className="text-gray-700">
                    Our premium SEO service includes everything in the Complete package plus competitive analysis, advanced link building, local SEO optimization, and AI-powered content strategy to dominate search rankings.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-3">Dedicated Account Manager</h3>
                  <p className="text-gray-700">
                    You'll have a dedicated marketing expert assigned to your account who understands your business needs, provides strategic guidance, and ensures all aspects of your digital marketing are optimized.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg mb-6">Ready to dominate your market with our Premium Plan?</p>
              <Button size="lg" onClick={() => navigate('/clients')}>
                Get Started Now
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Compare With Other Plans</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead>
                  <tr>
                    <th className="py-4 px-6 text-left">Features</th>
                    <th className="py-4 px-6 text-center">Basic</th>
                    <th className="py-4 px-6 text-center">Standard</th>
                    <th className="py-4 px-6 text-center bg-brand-blue/5 font-bold">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-3 px-6">Google Map Reviews</td>
                    <td className="py-3 px-6 text-center">10</td>
                    <td className="py-3 px-6 text-center">25</td>
                    <td className="py-3 px-6 text-center bg-brand-blue/5 font-bold">50</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-6">JustDial/Practo Reviews</td>
                    <td className="py-3 px-6 text-center">10</td>
                    <td className="py-3 px-6 text-center">25</td>
                    <td className="py-3 px-6 text-center bg-brand-blue/5 font-bold">50</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-6">Amazon/PlayStore Reviews</td>
                    <td className="py-3 px-6 text-center">-</td>
                    <td className="py-3 px-6 text-center">-</td>
                    <td className="py-3 px-6 text-center bg-brand-blue/5 font-bold">50</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-6">SEO Services</td>
                    <td className="py-3 px-6 text-center">Basic Analysis</td>
                    <td className="py-3 px-6 text-center">Complete Package</td>
                    <td className="py-3 px-6 text-center bg-brand-blue/5 font-bold">Advanced Package</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-6">Social Media</td>
                    <td className="py-3 px-6 text-center">Setup Only</td>
                    <td className="py-3 px-6 text-center">Management</td>
                    <td className="py-3 px-6 text-center bg-brand-blue/5 font-bold">Full Management</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-6">Monthly Price</td>
                    <td className="py-3 px-6 text-center">₹4,999</td>
                    <td className="py-3 px-6 text-center">₹9,999</td>
                    <td className="py-3 px-6 text-center bg-brand-blue/5 font-bold">₹19,999</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" onClick={() => navigate('/pricing')}>
                View All Plan Details
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPremium;
