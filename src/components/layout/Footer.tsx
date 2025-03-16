
import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                Digi Sanchaar
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              A true marketing agency helping businesses grow through innovative digital strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/google-reviews" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Google Map Reviews
                </Link>
              </li>
              <li>
                <Link to="/services/justdial-reviews" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Just Dial Reviews
                </Link>
              </li>
              <li>
                <Link to="/services/practo-reviews" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Practo Reviews
                </Link>
              </li>
              <li>
                <Link to="/services/amazon-reviews" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Amazon Reviews
                </Link>
              </li>
              <li>
                <Link to="/services/playstore-reviews" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Play Store Reviews
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/students" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Join as Student
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-brand-blue shrink-0" />
                <span className="text-gray-600">
                  123 Marketing Street, Digital City, India 400001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-brand-blue shrink-0" />
                <span className="text-gray-600">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-brand-blue shrink-0" />
                <span className="text-gray-600">info@digisanchaar.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Digi Sanchaar. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-600 hover:text-brand-blue text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-gray-600 hover:text-brand-blue text-sm">
              Terms & Conditions
            </Link>
            <Link to="/refund-policy" className="text-gray-600 hover:text-brand-blue text-sm">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
