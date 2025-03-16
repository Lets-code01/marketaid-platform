
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Star, Plus, Minus, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Service types
interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  minQuantity: number;
}

// Cart item type
interface CartItem {
  service: Service;
  quantity: number;
}

const Clients = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  // Sample services data
  const services: Service[] = [
    {
      id: "google-reviews",
      title: "Google Map Reviews",
      description: "Boost your local SEO with authentic Google reviews from real users.",
      image: "/placeholder.svg",
      price: 40,
      category: "reviews",
      minQuantity: 10
    },
    {
      id: "justdial-reviews",
      title: "Just Dial Reviews",
      description: "Enhance your visibility on India's largest local search engine.",
      image: "/placeholder.svg",
      price: 40,
      category: "reviews",
      minQuantity: 10
    },
    {
      id: "practo-reviews",
      title: "Practo Reviews",
      description: "Build trust for your healthcare practice with genuine patient reviews.",
      image: "/placeholder.svg",
      price: 40,
      category: "reviews",
      minQuantity: 10
    },
    {
      id: "amazon-reviews",
      title: "Amazon Reviews",
      description: "Improve your product visibility and sales with positive reviews.",
      image: "/placeholder.svg",
      price: 40,
      category: "reviews",
      minQuantity: 10
    },
    {
      id: "playstore-reviews",
      title: "Play Store Reviews",
      description: "Boost your app downloads with positive ratings and reviews.",
      image: "/placeholder.svg",
      price: 40,
      category: "reviews",
      minQuantity: 10
    },
    {
      id: "seo-package",
      title: "SEO Optimization Package",
      description: "Comprehensive SEO services to improve your search engine rankings.",
      image: "/placeholder.svg",
      price: 4999,
      category: "marketing",
      minQuantity: 1
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      description: "Engage with your audience and build brand loyalty through effective campaigns.",
      image: "/placeholder.svg",
      price: 5999,
      category: "marketing",
      minQuantity: 1
    },
    {
      id: "email-marketing",
      title: "Email Marketing Campaign",
      description: "Convert leads with targeted email campaigns that drive results.",
      image: "/placeholder.svg",
      price: 3999,
      category: "marketing",
      minQuantity: 1
    }
  ];

  // Add to cart function
  const addToCart = (service: Service) => {
    const existingItemIndex = cart.findIndex(item => item.service.id === service.id);
    
    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += service.minQuantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { service, quantity: service.minQuantity }]);
    }
    
    toast({
      title: "Added to cart",
      description: `${service.title} added to your cart`,
    });
  };

  // Update quantity function
  const updateQuantity = (serviceId: string, newQuantity: number) => {
    const service = services.find(s => s.id === serviceId);
    
    if (!service) return;
    
    if (newQuantity < service.minQuantity) {
      toast({
        title: "Minimum quantity required",
        description: `Minimum quantity for ${service.title} is ${service.minQuantity}`,
        variant: "destructive"
      });
      return;
    }
    
    const updatedCart = cart.map(item => 
      item.service.id === serviceId 
        ? { ...item, quantity: newQuantity } 
        : item
    );
    
    setCart(updatedCart);
  };

  // Remove from cart function
  const removeFromCart = (serviceId: string) => {
    setCart(cart.filter(item => item.service.id !== serviceId));
    
    toast({
      title: "Removed from cart",
      description: "Item removed from your cart",
    });
  };

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => {
    return total + (item.service.price * item.quantity);
  }, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Accelerate Your Business Growth
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  Choose from our premium services designed to boost your online presence and drive conversions.
                </p>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-700">Trusted by 500+ businesses</span>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge className="bg-brand-pink">Most Popular</Badge>
                </div>
                <img 
                  src="/placeholder.svg" 
                  alt="Client Services" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cart Icon */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setShowCart(!showCart)}
            className="h-16 w-16 rounded-full shadow-lg relative"
          >
            <ShoppingCart className="h-6 w-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Button>
        </div>

        {/* Cart Drawer */}
        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
            <div className="bg-white w-full max-w-md h-full overflow-y-auto">
              <div className="p-4 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
                <h2 className="text-xl font-bold">Your Cart ({cart.length})</h2>
                <Button variant="ghost" onClick={() => setShowCart(false)}>
                  ✕
                </Button>
              </div>
              
              <div className="p-4">
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">Your cart is empty</p>
                    <Button onClick={() => setShowCart(false)}>
                      Continue Shopping
                    </Button>
                  </div>
                ) : (
                  <>
                    {cart.map((item) => (
                      <div key={item.service.id} className="flex justify-between items-center py-4 border-b">
                        <div>
                          <h3 className="font-medium">{item.service.title}</h3>
                          <p className="text-sm text-gray-500">₹{item.service.price} per unit</p>
                          <div className="flex items-center mt-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => updateQuantity(item.service.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="mx-2 w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => updateQuantity(item.service.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₹{item.service.price * item.quantity}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500 mt-2"
                            onClick={() => removeFromCart(item.service.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    <div className="mt-6 border-t pt-4">
                      <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>₹{cartTotal}</span>
                      </div>
                      <div className="flex justify-between mb-6">
                        <span>GST (18%)</span>
                        <span>₹{(cartTotal * 0.18).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>₹{(cartTotal * 1.18).toFixed(2)}</span>
                      </div>
                      
                      <Button className="w-full mt-4" size="lg" asChild>
                        <Link to="/checkout">
                          Proceed to Checkout
                        </Link>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Services Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Review Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.filter(service => service.category === "reviews").map((service) => (
                <Card key={service.id} className="overflow-hidden card-hover">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Price per review</p>
                        <p className="text-2xl font-bold">₹{service.price}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Min quantity</p>
                        <p className="text-lg font-medium">{service.minQuantity}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" onClick={() => addToCart(service)}>
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.filter(service => service.category === "marketing").map((service) => (
                <Card key={service.id} className="overflow-hidden card-hover">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Package price</p>
                        <p className="text-2xl font-bold">₹{service.price}</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Custom strategy</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Detailed reporting</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Dedicated manager</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" onClick={() => addToCart(service)}>
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="italic text-gray-600 mb-4">
                    "Digi Sanchaar's Google review service completely transformed our local business. Our walk-in customers increased by 30% within just two months!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Rahul Sharma</p>
                      <p className="text-sm text-gray-500">Restaurant Owner</p>
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
                    "The SEO package we purchased has delivered incredible results. Our organic traffic has increased by 150% in just 3 months. Highly recommended!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Priya Patel</p>
                      <p className="text-sm text-gray-500">E-commerce Business</p>
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
                    "The Practo reviews brought in so many new patients to our clinic. The team at Digi Sanchaar is professional and delivers exactly what they promise."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Dr. Amit Gupta</p>
                      <p className="text-sm text-gray-500">Dental Clinic</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Clients;
