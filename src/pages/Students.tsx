import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Clock, DollarSign, Star, Award, Users, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Students = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted successfully!",
      description: "We'll redirect you to the payment page.",
    });
    
    // Navigate to payment page after 1.5 seconds and pass the registration amount
    setTimeout(() => {
      navigate("/payment", { state: { amount: 249 } });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Earn While You Learn
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  Join our community of students earning passive income by working just 2-3 hours daily from their phones.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">Average Monthly Earning: ₹8,000 - ₹15,000</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-brand-blue mr-2" />
                    <span className="font-medium">Just 2-3 hours daily commitment</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/placeholder.svg" 
                  alt="Students earning" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-brand-blue" />
                  </div>
                  <CardTitle>1. Register & Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Complete the registration process with a one-time fee of ₹249 and get access to our training materials.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-brand-purple" />
                  </div>
                  <CardTitle>2. Join Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Join our exclusive WhatsApp group where you'll receive daily tasks and ongoing support.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>3. Earn Money</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Complete simple tasks on your phone and start earning money directly into your bank account.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Success Stories from Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="italic text-gray-600 mb-4">
                    "I was skeptical at first, but after joining I'm able to earn ₹10,000 monthly working part-time while completing my studies."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Ananya Singh</p>
                      <p className="text-sm text-gray-500">BBA Student, Delhi</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="italic text-gray-600 mb-4">
                    "This platform has allowed me to pay my college fees without depending on my parents. The team is very supportive."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Rohan Mehta</p>
                      <p className="text-sm text-gray-500">Engineering Student, Mumbai</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="italic text-gray-600 mb-4">
                    "I'm a housewife pursuing my degree, and this opportunity has given me financial independence while managing my studies."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Divya Sharma</p>
                      <p className="text-sm text-gray-500">B.A. Student, Jaipur</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-2 text-center">Register Now</h2>
              <p className="text-center text-gray-600 mb-8">Start your journey to financial independence today</p>
              
              <Card>
                <CardHeader>
                  <CardTitle>Student Registration</CardTitle>
                  <CardDescription>One-time registration fee: ₹249</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Enter your full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Enter your phone number" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="college">College/University</Label>
                        <Input id="college" placeholder="Enter your college name" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <Label htmlFor="reason">Why do you want to join?</Label>
                      <Textarea 
                        id="reason" 
                        placeholder="Tell us why you're interested in joining our platform"
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-6">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the <a href="#" className="text-brand-blue hover:underline">Terms & Conditions</a>
                      </Label>
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Register & Proceed to Payment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-gradient-to-r from-brand-blue to-brand-purple text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Why Join Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Passive Income</h3>
                <p className="text-white text-opacity-80">
                  Earn money consistently with minimal effort
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
                <p className="text-white text-opacity-80">
                  Work whenever it's convenient for you
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
                <p className="text-white text-opacity-80">
                  Learn valuable marketing and communication skills
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Recognition</h3>
                <p className="text-white text-opacity-80">
                  Get rewarded for your performance and growth
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

export default Students;
