
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹4,999",
      description: "Essential marketing services for small businesses",
      features: [
        "10 Google Map Reviews",
        "10 JustDial Reviews",
        "Basic SEO Analysis",
        "Social Media Setup",
        "Monthly Performance Report"
      ],
      popular: false,
      path: "/pricing/basic"
    },
    {
      name: "Standard",
      price: "₹9,999",
      description: "Comprehensive marketing for growing businesses",
      features: [
        "25 Google Map Reviews",
        "25 JustDial/Practo Reviews",
        "Complete SEO Package",
        "Social Media Management",
        "Content Creation (2 posts/week)",
        "Email Marketing Setup",
        "Bi-weekly Performance Reports"
      ],
      popular: true,
      path: "/pricing/standard"
    },
    {
      name: "Premium",
      price: "₹19,999",
      description: "Advanced marketing solutions for established brands",
      features: [
        "50 Google Map Reviews",
        "50 JustDial/Practo Reviews",
        "50 Amazon/PlayStore Reviews",
        "Advanced SEO Package",
        "Full Social Media Management",
        "Content Creation (4 posts/week)",
        "Email Marketing Campaigns",
        "Weekly Performance Reports",
        "Dedicated Account Manager"
      ],
      popular: false,
      path: "/pricing/premium"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
              <p className="text-lg text-gray-700 mb-6">
                Choose the plan that's right for your business needs. No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'border-brand-blue shadow-lg' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute top-4 right-4 bg-brand-blue">Most Popular</Badge>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name} Plan</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link to={plan.path}>Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Custom Enterprise Solutions</h2>
              <p className="text-gray-700 mb-6">
                Need a tailored solution for your specific business requirements? Our team can create a custom marketing package just for you.
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Us for Custom Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Can I switch plans later?</h3>
                <p className="text-gray-700">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Do you offer refunds?</h3>
                <p className="text-gray-700">
                  We offer a 7-day money-back guarantee if you're not satisfied with our services.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-700">
                  We accept all major credit cards, UPI, net banking, and bank transfers for your convenience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Is there a long-term contract?</h3>
                <p className="text-gray-700">
                  No, all our plans are month-to-month with no long-term commitment required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
