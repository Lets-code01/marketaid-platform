
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Star, Check, Plus, Minus } from "lucide-react";

// Service type definition
interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  priceUnit?: string;
  minQuantity?: number;
  image: string;
  features?: string[];
  category: "review" | "marketing";
}

// Cart item type
interface CartItem extends Service {
  quantity: number;
}

const Clients = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sample services data
  const services: Service[] = [
    {
      id: "google-reviews",
      title: "Google Map Reviews",
      description: "Boost your business visibility with authentic Google reviews",
      price: 40,
      priceUnit: "per review",
      minQuantity: 10,
      image: "/placeholder.svg",
      features: ["Verified accounts", "Detailed reviews", "Fast delivery", "100% satisfaction"],
      category: "review"
    },
    {
      id: "justdial-reviews",
      title: "JustDial Reviews",
      description: "Enhance your JustDial profile with positive customer feedback",
      price: 40,
      priceUnit: "per review",
      minQuantity: 10,
      image: "/placeholder.svg",
      features: ["5-star ratings", "Custom review text", "Profile optimization"],
      category: "review"
    },
    {
      id: "practo-reviews",
      title: "Practo Reviews",
      description: "Ideal for medical professionals to build trust with patients",
      price: 40,
      priceUnit: "per review",
      minQuantity: 10,
      image: "/placeholder.svg",
      features: ["Healthcare focused", "Patient testimonials", "Medical expertise"],
      category: "review"
    },
    {
      id: "amazon-reviews",
      title: "Amazon Product Reviews",
      description: "Increase product credibility with detailed customer reviews",
      price: 40,
      priceUnit: "per review",
      minQuantity: 10,
      image: "/placeholder.svg",
      features: ["Verified purchases", "Product images", "Detailed feedback"],
      category: "review"
    },
    {
      id: "playstore-reviews",
      title: "Play Store App Reviews",
      description: "Improve your app's ranking with positive user reviews",
      price: 40,
      priceUnit: "per review",
      minQuantity: 10,
      image: "/placeholder.svg",
      features: ["App rating boost", "Download increase", "User testimonials"],
      category: "review"
    },
    {
      id: "seo-package",
      title: "SEO Optimization Package",
      description: "Comprehensive SEO strategy to improve your search rankings",
      price: 4999,
      image: "/placeholder.svg",
      features: ["Keyword research", "On-page SEO", "Backlink building", "Monthly reports"],
      category: "marketing"
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      description: "Engage your audience across multiple social media platforms",
      price: 3499,
      image: "/placeholder.svg",
      features: ["Profile setup", "Content calendar", "Community management", "Analytics"],
      category: "marketing"
    },
    {
      id: "email-marketing",
      title: "Email Marketing Campaign",
      description: "Connect directly with your customers through strategic email campaigns",
      price: 3999,
      image: "/placeholder.svg",
      features: ["Template design", "Audience segmentation", "A/B testing", "Campaign analytics"],
      category: "marketing"
    }
  ];

  // Add to cart function
  const addToCart = (service: Service, quantity = service.minQuantity || 1) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === service.id);
    
    if (existingItemIndex >= 0) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...service, quantity }]);
    }
    
    toast({
      title: "Added to cart",
      description: `${service.title} has been added to your cart.`,
    });
  };

  // Update quantity function
  const updateQuantity = (id: string, newQuantity: number) => {
    const service = services.find(s => s.id === id);
    const minQuantity = service?.minQuantity || 1;
    
    if (newQuantity < minQuantity) {
      toast({
        title: "Minimum quantity",
        description: `Minimum quantity for ${service?.title} is ${minQuantity}.`,
        variant: "destructive",
      });
      newQuantity = minQuantity;
    }
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove from cart function
  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  // Calculate total
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Proceed to checkout
  const proceedToCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checkout.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real application, you would typically save the cart to local storage or a context here
    navigate("/checkout");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Digital Marketing Solutions for Your Business</h1>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl">
              Enhance your online presence with our comprehensive suite of digital marketing services and authentic reviews.
            </p>
            <div className="flex space-x-4">
              <Button onClick={() => document.getElementById("review-services")?.scrollIntoView({ behavior: "smooth" })}>
                Review Services
              </Button>
              <Button variant="outline" onClick={() => document.getElementById("marketing-services")?.scrollIntoView({ behavior: "smooth" })}>
                Marketing Services
              </Button>
            </div>
          </div>
        </section>

        {/* Review Services Section */}
        <section id="review-services" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Review Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services
                .filter(service => service.category === "review")
                .map(service => (
                  <Card key={service.id} className="overflow-hidden card-hover">
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-32 w-auto object-contain"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                      <Badge className="w-fit mt-1">₹{service.price} {service.priceUnit}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="space-y-2">
                        {service.features?.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                      <div className="w-full flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-sm mr-2">Min: {service.minQuantity}</span>
                          <div className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-yellow-400" />
                            <Star className="h-4 w-4 text-yellow-400" />
                            <Star className="h-4 w-4 text-yellow-400" />
                            <Star className="h-4 w-4 text-yellow-400" />
                            <Star className="h-4 w-4 text-yellow-400" />
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => addToCart(service)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Marketing Services Section */}
        <section id="marketing-services" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services
                .filter(service => service.category === "marketing")
                .map(service => (
                  <Card key={service.id} className="overflow-hidden card-hover">
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-32 w-auto object-contain"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                      <Badge className="w-fit mt-1">₹{service.price}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="space-y-2">
                        {service.features?.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        onClick={() => addToCart(service)} 
                        className="w-full"
                      >
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Floating Cart Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button 
            variant="default" 
            size="lg" 
            className="rounded-full h-16 w-16 shadow-lg"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Button>
        </div>

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsCartOpen(false)}></div>
              <div className="absolute inset-y-0 right-0 max-w-full flex">
                <div className="relative w-screen max-w-md">
                  <div className="h-full flex flex-col bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                        <Button variant="ghost" onClick={() => setIsCartOpen(false)}>
                          <span className="sr-only">Close panel</span>
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </Button>
                      </div>

                      <div className="mt-8">
                        {cartItems.length === 0 ? (
                          <div className="text-center py-10">
                            <ShoppingCart className="h-12 w-12 mx-auto text-gray-400" />
                            <h3 className="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h3>
                            <p className="mt-1 text-sm text-gray-500">Browse our services and add items to your cart</p>
                            <div className="mt-6">
                              <Button onClick={() => setIsCartOpen(false)}>
                                Continue Shopping
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="flow-root">
                            <ul className="-my-6 divide-y divide-gray-200">
                              {cartItems.map(item => (
                                <li key={item.id} className="py-6 flex">
                                  <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                    <img
                                      src={item.image}
                                      alt={item.title}
                                      className="w-full h-full object-center object-cover"
                                    />
                                  </div>

                                  <div className="ml-4 flex-1 flex flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>{item.title}</h3>
                                        <p className="ml-4">₹{item.price * item.quantity}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.priceUnit ? `₹${item.price} ${item.priceUnit}` : `₹${item.price}`}
                                      </p>
                                    </div>
                                    <div className="flex-1 flex items-end justify-between text-sm">
                                      <div className="flex items-center space-x-2">
                                        <Button 
                                          variant="outline"
                                          size="icon"
                                          className="h-6 w-6 rounded-full p-0"
                                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        >
                                          <Minus className="h-3 w-3" />
                                        </Button>
                                        <span className="text-gray-500">{item.quantity}</span>
                                        <Button 
                                          variant="outline"
                                          size="icon"
                                          className="h-6 w-6 rounded-full p-0"
                                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                          <Plus className="h-3 w-3" />
                                        </Button>
                                      </div>

                                      <Button
                                        variant="ghost"
                                        className="text-red-600 hover:text-red-500"
                                        onClick={() => removeFromCart(item.id)}
                                      >
                                        Remove
                                      </Button>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {cartItems.length > 0 && (
                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>₹{total}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                          <Button className="w-full" onClick={proceedToCheckout}>
                            Checkout
                          </Button>
                        </div>
                        <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                          <p>
                            or{" "}
                            <button
                              type="button"
                              className="text-brand-blue font-medium hover:text-blue-600"
                              onClick={() => setIsCartOpen(false)}
                            >
                              Continue Shopping<span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Clients;
