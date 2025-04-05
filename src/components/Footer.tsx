
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brand-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="/lovable-uploads/e2921dce-c31c-45db-a828-befb2a6a726b.png" 
              alt="ToTheData Logo" 
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mt-2 text-sm">
              Transforming your data into actionable insights for impactful business decisions.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/company/tothedata/" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/tothedata_" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.265.07 1.645.07 4.849 0 1.366-.062 2.633-.326 3.608-1.301.975-.975 1.24-2.242 1.301-3.608.058-1.265.07-1.645.07-4.849 0-3.204-.012-3.584-.07-4.849-.062-1.366-.326-2.633-1.301-3.608-.975-.975-2.242-1.24-3.608-1.301-1.265-.058-1.645-.07-4.849-.07-3.204 0-3.584.012-4.849.07-1.366.062-2.633.326-3.608 1.301-.975.975-1.24 2.242-1.301 3.608-.058 1.265-.07 1.645-.07 4.849zm0 2.163c-3.614 0-6.514 2.9-6.514 6.514s2.9 6.514 6.514 6.514 6.514-2.9 6.514-6.514-2.9-6.514-6.514-6.514zm0 10.827c-2.325 0-4.313-1.988-4.313-4.313s1.988-4.313 4.313-4.313 4.313 1.988 4.313 4.313-1.988 4.313-4.313 4.313zm5.427-11.49c0 .84-.678 1.518-1.518 1.518s-1.518-.678-1.518-1.518.678-1.518 1.518-1.518 1.518.678 1.518 1.518z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/data-strategy" className="text-gray-300 hover:text-white text-sm">
                  Data Strategy & Architecture
                </Link>
              </li>
              <li>
                <Link to="/services/analytics" className="text-gray-300 hover:text-white text-sm">
                  Advanced Analytics
                </Link>
              </li>
              <li>
                <Link to="/services/ai-ml" className="text-gray-300 hover:text-white text-sm">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/services/data-engineering" className="text-gray-300 hover:text-white text-sm">
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="text-gray-300 hover:text-white text-sm">
                  Data Consulting
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-white text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources/whitepapers" className="text-gray-300 hover:text-white text-sm">
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link to="/resources/webinars" className="text-gray-300 hover:text-white text-sm">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm mb-2">275-B, Pocket C-1 </p>
            <p className="text-gray-300 text-sm mb-2">Mayur Vihar Phase -3, New Delhi - 110096</p>
            <p className="text-gray-300 text-sm mb-2">contact@tothedata.com</p>
            <p className="text-gray-300 text-sm">+918527359743</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ToTheData. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
