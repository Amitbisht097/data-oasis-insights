
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md z-50 sticky top-0 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/lovable-uploads/e2921dce-c31c-45db-a828-befb2a6a726b.png" 
                alt="ToTheData Logo" 
                className="h-14 w-auto" 
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-brand-secondary hover:text-brand-primary font-medium">
                Home
              </Link>
              <Link to="/services" className="text-brand-secondary hover:text-brand-primary font-medium">
                Services
              </Link>
              <Link to="/case-studies" className="text-brand-secondary hover:text-brand-primary font-medium">
                Case Studies
              </Link>
              <Link to="/about" className="text-brand-secondary hover:text-brand-primary font-medium">
                About Us
              </Link>
              <Link to="/blog" className="text-brand-secondary hover:text-brand-primary font-medium">
                Blog
              </Link>
              <Button asChild className="bg-brand-primary hover:bg-brand-accent text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-secondary"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-secondary hover:bg-brand-light"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-secondary hover:bg-brand-light"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/case-studies" 
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-secondary hover:bg-brand-light"
              onClick={toggleMenu}
            >
              Case Studies
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-secondary hover:bg-brand-light"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/blog" 
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-secondary hover:bg-brand-light"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-brand-primary text-white hover:bg-brand-accent"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
