
import { ChartBar, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary/10 to-brand-light/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
              Our Data Science Services
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              ToTheData offers comprehensive data science solutions tailored to meet your business objectives. 
              Our expertise spans from data strategy to advanced AI implementation.
            </p>
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-accent">
              <Link to="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-secondary mb-2">Data Strategy & Architecture</h2>
              <div className="h-1 w-20 bg-brand-primary mb-6"></div>
              <p className="text-gray-600 mb-4">
                We help organizations develop comprehensive data strategies and build robust data architectures aligned with business objectives.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-brand-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Data strategy development and roadmap planning</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-brand-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Data architecture design and optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-brand-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Data governance framework implementation</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-light">
                <Link to="/services/data-strategy">Learn More</Link>
              </Button>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-brand-secondary mb-2">Advanced Analytics</h2>
              <div className="h-1 w-20 bg-brand-primary mb-6"></div>
              <p className="text-gray-600 mb-4">
                Transform your raw data into actionable insights through statistical analysis, data visualization, and predictive modeling.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-brand-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Descriptive and diagnostic analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-brand-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Predictive modeling and forecasting</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-brand-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Data visualization and dashboard creation</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-light">
                <Link to="/services/analytics">Learn More</Link>
              </Button>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-brand-secondary mb-2">AI & Machine Learning</h2>
              <div className="h-1 w-20 bg-brand-primary mb-6"></div>
              <p className="text-gray-600 mb-4">
                Leverage cutting-edge AI and ML algorithms to automate processes, enhance decision-making, and drive innovation.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-brand-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Machine learning model development and deployment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-brand-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Natural language processing solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-brand-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Computer vision and image recognition</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-light">
                <Link to="/services/ai-ml">Learn More</Link>
              </Button>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-brand-secondary mb-2">Data Engineering</h2>
              <div className="h-1 w-20 bg-brand-primary mb-6"></div>
              <p className="text-gray-600 mb-4">
                Build scalable data pipelines and infrastructure to collect, process, and store data efficiently for analysis.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-brand-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Data pipeline development and automation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-brand-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Data warehouse and lake implementation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-brand-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>ETL/ELT process optimization</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-light">
                <Link to="/services/data-engineering">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">Our Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a collaborative, iterative process to deliver high-impact data science solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-xl mb-2 text-brand-secondary">Discovery</h3>
              <p className="text-gray-600">
                We begin by understanding your business objectives and data landscape to identify key opportunities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-xl mb-2 text-brand-secondary">Design</h3>
              <p className="text-gray-600">
                Our team designs a tailored solution architecture and analytical approach to address your needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-xl mb-2 text-brand-secondary">Development</h3>
              <p className="text-gray-600">
                We develop and implement the solution using agile methodology with regular feedback loops.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="font-bold text-xl mb-2 text-brand-secondary">Delivery</h3>
              <p className="text-gray-600">
                We ensure successful deployment, knowledge transfer, and ongoing support for continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Data Journey?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Let's discuss how our data science services can help you achieve your business goals.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-brand-primary hover:bg-gray-100">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
