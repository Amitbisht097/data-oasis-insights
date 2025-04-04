
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "data-ai-trends-2023",
    title: "Top Data Science and AI Trends for 2023",
    category: "Trends",
    date: "April 12, 2023",
    summary: "Explore the latest trends shaping the future of data science and artificial intelligence in 2023 and beyond.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    author: "Sarah Johnson",
    authorRole: "CTO",
    readTime: "8 min read"
  },
  {
    id: "machine-learning-finance",
    title: "How Machine Learning is Revolutionizing Financial Services",
    category: "Industry",
    date: "March 28, 2023",
    summary: "Discover the transformative impact of machine learning applications in banking, investment management, and insurance.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
    author: "Michael Chen",
    authorRole: "CSO",
    readTime: "6 min read"
  },
  {
    id: "data-governance",
    title: "Building a Robust Data Governance Framework",
    category: "Best Practices",
    date: "March 15, 2023",
    summary: "Learn how to establish effective data governance policies that balance innovation with compliance and security.",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80",
    author: "Elena Rodriguez",
    authorRole: "Data Governance Lead",
    readTime: "10 min read"
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics: From Theory to Practice",
    category: "Technical",
    date: "February 22, 2023",
    summary: "A practical guide to implementing predictive analytics models that deliver actionable business insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    author: "Alex Thompson",
    authorRole: "Lead Data Scientist",
    readTime: "12 min read"
  },
  {
    id: "etl-best-practices",
    title: "ETL Best Practices for Modern Data Pipelines",
    category: "Technical",
    date: "February 10, 2023",
    summary: "Essential guidelines for designing efficient, scalable, and maintainable ETL processes for your data infrastructure.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    author: "David Anderson",
    authorRole: "CEO",
    readTime: "9 min read"
  },
  {
    id: "responsible-ai",
    title: "The Path to Responsible AI Development",
    category: "Ethics",
    date: "January 18, 2023",
    summary: "Exploring ethical considerations and best practices for developing AI systems that are fair, transparent, and accountable.",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80",
    author: "Julia Kim",
    authorRole: "AI Ethics Specialist",
    readTime: "7 min read"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary/10 to-brand-light/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
              Data Science Insights
            </h1>
            <p className="text-lg text-gray-600">
              Expert perspectives, industry insights, and technical guides from our team of data scientists and engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title} 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:col-span-5 flex flex-col justify-center">
              <Badge className="mb-4 bg-brand-primary/10 text-brand-primary border-0 w-fit">
                {blogPosts[0].category}
              </Badge>
              <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mb-6">{blogPosts[0].summary}</p>
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <span className="text-sm font-medium text-brand-secondary">{blogPosts[0].author}</span>
                  <span className="text-sm text-gray-500 ml-1">· {blogPosts[0].date}</span>
                </div>
                <span className="text-sm text-gray-500">{blogPosts[0].readTime}</span>
              </div>
              <Button asChild className="bg-brand-primary hover:bg-brand-accent w-fit">
                <Link to={`/blog/${blogPosts[0].id}`}>Read Article</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="border-0 overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader className="p-6 pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline" className="bg-brand-primary/10 text-brand-primary border-0">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-2">
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.summary}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-brand-secondary">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                    <Button asChild variant="ghost" className="text-brand-primary hover:text-brand-accent hover:bg-brand-light">
                      <Link to={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-light rounded-lg p-8 shadow-md">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-brand-secondary mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600">
                Stay updated with the latest insights, trends, and news in data science and analytics.
              </p>
            </div>
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
              <Button className="bg-brand-primary hover:bg-brand-accent whitespace-nowrap">
                Subscribe Now
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-3 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
