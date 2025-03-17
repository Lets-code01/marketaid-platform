
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import Clients from "./pages/Clients";
import Students from "./pages/Students";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import PricingBasic from "./pages/Pricing/Basic";
import PricingStandard from "./pages/Pricing/Standard";
import PricingPremium from "./pages/Pricing/Premium";
import Services from "./pages/Services";
import GoogleMapReviews from "./pages/Services/GoogleMapReviews";
import JustDialReviews from "./pages/Services/JustDialReviews";
import PractoReviews from "./pages/Services/PractoReviews";
import AmazonReviews from "./pages/Services/AmazonReviews";
import PlayStoreReviews from "./pages/Services/PlayStoreReviews";
import SeoOptimization from "./pages/Services/SeoOptimization";
import SocialMediaMarketing from "./pages/Services/SocialMediaMarketing";
import EmailMarketing from "./pages/Services/EmailMarketing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            {/* Alternate routes with hyphens */}
            <Route path="/sign-up" element={<Navigate to="/signup" replace />} />
            <Route path="/sign-in" element={<Navigate to="/signin" replace />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/checkout" element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            } />
            <Route path="/payment" element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            } />
            
            {/* Public Routes */}
            <Route path="/clients" element={<Clients />} />
            <Route path="/students" element={<Students />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pricing/basic" element={<PricingBasic />} />
            <Route path="/pricing/standard" element={<PricingStandard />} />
            <Route path="/pricing/premium" element={<PricingPremium />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/google-reviews" element={<GoogleMapReviews />} />
            <Route path="/services/justdial-reviews" element={<JustDialReviews />} />
            <Route path="/services/practo-reviews" element={<PractoReviews />} />
            <Route path="/services/amazon-reviews" element={<AmazonReviews />} />
            <Route path="/services/playstore-reviews" element={<PlayStoreReviews />} />
            <Route path="/services/seo-optimization" element={<SeoOptimization />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/email-marketing" element={<EmailMarketing />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
