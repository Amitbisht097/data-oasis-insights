
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary/10 to-brand-light/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
              Our Success Stories
            </h1>
            <p className="text-lg text-gray-600">
              Explore how we've helped organizations across industries transform their data into competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <CaseStudyCard 
              id="supply-chain"
              title="Supply Chain Optimization"
              client="Manufacturing Enterprise"
              industry="Manufacturing"
              summary="Optimized inventory management and distribution routes using advanced analytics, resulting in 15% cost reduction and improved delivery times."
              image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
              tags={["Optimization", "Supply Chain", "Forecasting"]}
            />
            <CaseStudyCard 
              id="marketing-attribution"
              title="Marketing Attribution Model"
              client="E-commerce Platform"
              industry="E-commerce"
              summary="Developed multi-touch attribution models that provided 87% more accurate marketing ROI measurements across channels."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              tags={["Marketing Analytics", "Attribution", "ROI"]}
            />
            <CaseStudyCard 
              id="energy-forecasting"
              title="Energy Consumption Prediction"
              client="Energy Utility Company"
              industry="Energy"
              summary="Built forecasting models that improved energy demand predictions by 34%, enabling more efficient grid management and cost savings."
              image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
              tags={["Forecasting", "Energy", "Resource Optimization"]}
            />
          </div>
        </div>
      </section>

      {/* Industry Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our data science solutions are tailored to meet the unique challenges of various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-all">
              <div className="text-brand-primary text-4xl mb-2">💼</div>
              <h3 className="font-medium text-brand-secondary">Finance</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-all">
              <div className="text-brand-primary text-4xl mb-2">🛒</div>
              <h3 className="font-medium text-brand-secondary">Retail</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-all">
              <div className="text-brand-primary text-4xl mb-2">⚕️</div>
              <h3 className="font-medium text-brand-secondary">Healthcare</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-all">
              <div className="text-brand-primary text-4xl mb-2">🏭</div>
              <h3 className="font-medium text-brand-secondary">Manufacturing</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-all">
              <div className="text-brand-primary text-4xl mb-2">⚡</div>
              <h3 className="font-medium text-brand-secondary">Energy</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-all">
              <div className="text-brand-primary text-4xl mb-2">🚚</div>
              <h3 className="font-medium text-brand-secondary">Logistics</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Let's discuss how our data science solutions can help you achieve your business goals.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-brand-primary hover:bg-gray-100">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
