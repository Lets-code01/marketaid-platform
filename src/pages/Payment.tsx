
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle } from "lucide-react";

// In a real app, this would be replaced with actual Razorpay integration
const PaymentPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [paymentComplete, setPaymentComplete] = useState(false);

  useEffect(() => {
    // Simulate loading the payment gateway
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Simulate Razorpay initialization
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
      
      // In a real implementation, you would initialize Razorpay here
      // For this demo, we'll just show a mock interface
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handlePayNow = () => {
    // Simulate payment processing
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setPaymentComplete(true);
      
      toast({
        title: "Payment successful!",
        description: "Your transaction has been completed successfully.",
      });
    }, 2000);
  };

  const handleContinue = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {loading ? (
              <Card>
                <CardHeader className="text-center">
                  <CardTitle>Processing Your Payment</CardTitle>
                  <CardDescription>Please wait while we connect to the payment gateway</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
                </CardContent>
              </Card>
            ) : paymentComplete ? (
              <Card>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                  <CardTitle>Payment Successful!</CardTitle>
                  <CardDescription>Your transaction has been completed</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-500">Transaction ID: RZPY12345678</p>
                    <p className="text-sm text-gray-500">Amount: ₹4,799.00</p>
                    <p className="text-sm text-gray-500">Date: {new Date().toLocaleString()}</p>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    An invoice has been sent to your email address. Thank you for your purchase!
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={handleContinue}>
                    Continue to Homepage
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Razorpay Checkout</CardTitle>
                    <img src="/placeholder.svg" alt="Razorpay" className="h-8" />
                  </div>
                  <CardDescription>Secure payment gateway</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm font-medium mb-1">Amount to Pay</p>
                      <p className="text-2xl font-bold">₹4,799.00</p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Payment Method</p>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="border rounded-md p-2 text-center text-sm cursor-pointer hover:bg-gray-50">
                          UPI
                        </div>
                        <div className="border rounded-md p-2 text-center text-sm cursor-pointer hover:bg-gray-50">
                          Card
                        </div>
                        <div className="border rounded-md p-2 text-center text-sm cursor-pointer hover:bg-gray-50">
                          NetBanking
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">UPI ID</p>
                      <div className="flex">
                        <input 
                          type="text" 
                          placeholder="Enter UPI ID" 
                          className="flex-grow border rounded-l-md px-3 py-2 text-sm" 
                        />
                        <button className="bg-gray-100 border border-l-0 rounded-r-md px-3 py-2 text-sm">
                          Verify
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col space-y-2">
                  <Button className="w-full" onClick={handlePayNow}>
                    Pay Now
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    By clicking Pay Now, you agree to the <a href="#" className="text-brand-blue">Terms & Conditions</a>
                  </p>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
