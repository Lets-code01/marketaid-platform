
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6 md:p-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome back, {user?.email}</p>
              </div>
              <Button 
                onClick={logout} 
                variant="outline" 
                className="mt-4 md:mt-0"
              >
                Sign Out
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-medium text-lg mb-2">Your Services</h3>
                <p className="text-gray-600">View and manage your active services</p>
                <Button variant="link" className="mt-4 p-0 h-auto text-brand-blue">
                  View Services →
                </Button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-medium text-lg mb-2">Billing</h3>
                <p className="text-gray-600">Manage your payment methods and invoices</p>
                <Button variant="link" className="mt-4 p-0 h-auto text-brand-blue">
                  View Billing →
                </Button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-medium text-lg mb-2">Account Settings</h3>
                <p className="text-gray-600">Update your profile and preferences</p>
                <Button variant="link" className="mt-4 p-0 h-auto text-brand-blue">
                  View Settings →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
