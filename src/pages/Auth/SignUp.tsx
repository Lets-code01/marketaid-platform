
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUp as ClerkSignUp } from "@clerk/clerk-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SignUp = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignUpSuccess = () => {
    toast({
      title: "Account created",
      description: "You've successfully signed up!",
    });
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Join Digi Sanchaar</h1>
            <p className="text-gray-600 mt-2">Create your account</p>
          </div>
          
          <ClerkSignUp 
            path="/sign-up"
            routing="path"
            signInUrl="/sign-in"
            appearance={{
              elements: {
                rootBox: "mx-auto w-full",
                card: "shadow-md rounded-lg bg-white p-6",
                headerTitle: "text-xl font-bold text-center",
                headerSubtitle: "text-sm text-gray-500 text-center",
                socialButtonsBlockButton: "border rounded-md p-2 text-center flex justify-center items-center gap-2 w-full transition hover:bg-gray-50",
                formFieldLabel: "block text-sm font-medium text-gray-700 mb-1",
                formFieldInput: "w-full p-2 border border-gray-300 rounded-md",
                formButtonPrimary: "mt-4 w-full bg-brand-blue hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors",
                footerActionText: "text-sm",
                footerActionLink: "text-brand-blue hover:text-blue-600 font-medium"
              }
            }}
            afterSignUpUrl="/dashboard"
          />
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/sign-in" className="text-brand-blue hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
