
import { ChartBar, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import DashboardChart from "@/components/DashboardChart";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const chartData = [
  { name: 'Jan', valueA: 400, valueB: 240 },
  { name: 'Feb', valueA: 300, valueB: 139 },
  { name: 'Mar', valueA: 200, valueB: 180 },
  { name: 'Apr', valueA: 278, valueB: 190 },
  { name: 'May', valueA: 189, valueB: 239 },
  { name: 'Jun', valueA: 239, valueB: 349 },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary/5 to-brand-light/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 space-y-6">
              <div className="animate-fade-in">
                <span className="bg-brand-light text-brand-primary px-4 py-1 rounded-full text-sm font-medium">
                  Data Science Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-brand-secondary">
                Transform Your Data Into <span className="text-brand-primary">Strategic Insights</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                ToTheData helps organizations harness the power of their data through advanced analytics, AI, and machine learning solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-accent">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-light">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 animate-float">
              <DashboardChart 
                data={chartData}
                title="Sample Analytics Dashboard"
                subtitle="Visualize your data insights with our analytics solutions"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver end-to-end data science solutions that drive business growth and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={ChartBar}
              title="Data Strategy & Architecture" 
              description="We help organizations define their data roadmap and build robust data architectures that enable scalable analytics capabilities."
            />
            <ServiceCard 
              icon={ChartBar}
              title="Advanced Analytics" 
              description="Transform your raw data into actionable insights through statistical analysis, data visualization, and predictive modeling."
            />
            <ServiceCard 
              icon={ArrowUp}
              title="AI & Machine Learning" 
              description="Leverage cutting-edge AI and ML algorithms to automate processes, enhance decision-making, and drive innovation."
            />
            <ServiceCard 
              icon={ChartBar}
              title="Data Engineering" 
              description="Build scalable data pipelines and infrastructure to collect, process, and store data efficiently for analysis."
            />
            <ServiceCard 
              icon={ChartBar}
              title="Data Consulting" 
              description="Get expert guidance on data governance, data quality, and analytics implementation to maximize the value of your data."
            />
            <ServiceCard 
              icon={ArrowUp}
              title="Business Intelligence" 
              description="Create interactive dashboards and reports that provide stakeholders with real-time insights into business performance."
            />
          </div>
          
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-light">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we've helped organizations across industries unlock the value of their data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard 
              id="retail-analytics"
              title="Customer Segmentation & Personalization"
              client="Major Retail Chain"
              industry="Retail"
              summary="Implemented a machine learning solution that increased conversion rates by 27% through personalized product recommendations."
              image="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80"
              tags={["Machine Learning", "Customer Analytics", "Personalization"]}
            />
            <CaseStudyCard 
              id="finance-risk"
              title="Risk Assessment & Fraud Detection"
              client="Global Financial Institution"
              industry="Finance"
              summary="Developed an AI-powered fraud detection system that reduced false positives by 63% while improving fraud detection rates."
              image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
              tags={["AI", "Fraud Detection", "Risk Management"]}
            />
            <CaseStudyCard 
              id="healthcare-analytics"
              title="Patient Outcome Prediction"
              client="Healthcare Provider Network"
              industry="Healthcare"
              summary="Created predictive models that helped identify high-risk patients, leading to improved care management and 18% reduction in readmissions."
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
              tags={["Predictive Analytics", "Healthcare", "Patient Care"]}
            />
          </div>
          
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-light">
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience working with ToTheData.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="ToTheData's analytics solution completely transformed how we understand our customers. The insights generated have been instrumental in our growth strategy."
              author="Sarah Johnson"
              position="Chief Data Officer"
              company="RetailCo"
            />
            <TestimonialCard 
              quote="The team at ToTheData provided exceptional guidance throughout our data transformation journey. Their expertise in machine learning helped us solve complex business challenges."
              author="Michael Chen"
              position="VP of Technology"
              company="FinServ Global"
            />
            <TestimonialCard 
              quote="Working with ToTheData has been a game-changer for our organization. Their deep understanding of healthcare data helped us improve patient outcomes significantly."
              author="Dr. Emma Wilson"
              position="Director of Analytics"
              company="HealthFirst"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data Into Insights?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Partner with ToTheData to unlock the full potential of your data and drive meaningful business outcomes.
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

export default Index;
