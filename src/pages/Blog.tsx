
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How Google Reviews Impact Your Local SEO Rankings",
      excerpt: "Learn how customer reviews directly influence your business's visibility in local search results.",
      date: "June 15, 2023",
      author: "Rajesh Kumar",
      category: "SEO",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "5 Strategies to Increase Your Social Media Engagement",
      excerpt: "Discover proven tactics to boost interaction and grow your audience across social platforms.",
      date: "May 28, 2023",
      author: "Priya Sharma",
      category: "Social Media",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Why Email Marketing Still Delivers the Best ROI",
      excerpt: "Despite new marketing channels, email continues to provide the highest return on investment.",
      date: "April 12, 2023",
      author: "Amit Patel",
      category: "Email Marketing",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "The Power of Customer Reviews in Healthcare Marketing",
      excerpt: "How medical professionals can leverage patient testimonials to build trust and grow their practice.",
      date: "March 5, 2023",
      author: "Neha Singh",
      category: "Healthcare",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Mobile SEO: Why It Matters More Than Ever",
      excerpt: "With mobile searches dominating, optimizing for mobile users is no longer optional.",
      date: "February 17, 2023",
      author: "Rajesh Kumar",
      category: "SEO",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "How to Create an Effective Content Marketing Strategy",
      excerpt: "A step-by-step guide to developing content that attracts, engages, and converts your target audience.",
      date: "January 22, 2023",
      author: "Priya Sharma",
      category: "Content Marketing",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Digital Marketing Insights</h1>
              <p className="text-lg text-gray-700 mb-6">
                Practical tips, strategies, and insights to help your business thrive in the digital world.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription>By {post.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full justify-start group">
                      Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-700 mb-6">
                Get the latest digital marketing tips and insights delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 border border-gray-300 rounded-md flex-grow"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
