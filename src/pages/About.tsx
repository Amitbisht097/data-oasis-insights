
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatisticCard from "@/components/StatisticCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChartBar } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary/10 to-brand-light/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
              About ToTheData
            </h1>
            <p className="text-lg text-gray-600">
              We are a team of data scientists, engineers, and domain experts passionate about solving complex business problems through data.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-secondary mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At ToTheData, our mission is to empower organizations to make data-driven decisions that drive growth, innovation, and competitive advantage.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that every organization, regardless of size or industry, can benefit from the strategic use of data. Our goal is to democratize data science and make advanced analytics accessible to all.
              </p>
              <p className="text-gray-600">
                Through our collaborative approach, we work closely with our clients to understand their unique challenges and develop tailored solutions that deliver measurable business outcomes.
              </p>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide our work and interactions with clients, partners, and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-brand-primary text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3 text-brand-secondary">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new methodologies, technologies, and approaches to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-brand-primary text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3 text-brand-secondary">Collaboration</h3>
              <p className="text-gray-600">
                We believe in working as partners with our clients, fostering knowledge sharing and joint problem-solving.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-brand-primary text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-brand-secondary">Impact</h3>
              <p className="text-gray-600">
                We focus on delivering measurable business outcomes that drive real value for our clients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-brand-primary text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3 text-brand-secondary">Transparency</h3>
              <p className="text-gray-600">
                We believe in clear communication and making complex data concepts accessible and understandable.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-brand-primary text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-3 text-brand-secondary">Agility</h3>
              <p className="text-gray-600">
                We adapt quickly to changing needs and embrace iterative approaches to solution development.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-brand-primary text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3 text-brand-secondary">Ethics</h3>
              <p className="text-gray-600">
                We uphold the highest standards of data ethics, privacy, and responsible AI development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional data science solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatisticCard 
              icon={ChartBar}
              value="100+"
              label="Clients Served"
            />
            <StatisticCard 
              icon={ChartBar}
              value="250+"
              label="Projects Completed"
            />
            <StatisticCard 
              icon={ChartBar}
              value="$500M+"
              label="Client Value Generated"
            />
            <StatisticCard 
              icon={ChartBar}
              value="15+"
              label="Industries Served"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experts driving our vision and innovation in data science.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">David Anderson</h3>
                <p className="text-brand-primary mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">
                  15+ years of experience in data science and analytics leadership across multiple industries.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                  alt="CTO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Sarah Johnson</h3>
                <p className="text-brand-primary mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">
                  PhD in Computer Science with expertise in machine learning and AI systems architecture.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" 
                  alt="CSO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Michael Chen</h3>
                <p className="text-brand-primary mb-3">Chief Strategy Officer</p>
                <p className="text-gray-600 text-sm">
                  Former management consultant with deep expertise in data-driven business transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals who are passionate about data science and innovation.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-brand-primary hover:bg-gray-100">
              <Link to="/careers">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
