
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Car, Menu, X, User, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Car className="h-8 w-8 text-carblue" />
          <h1 className="text-xl font-bold text-carblue">Quick Car Fix Hub</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-carblue transition-colors">Services</a>
          <a href="#" className="text-gray-700 hover:text-carblue transition-colors">Parts Shop</a>
          <a href="#" className="text-gray-700 hover:text-carblue transition-colors">Car Marketplace</a>
          <a href="#" className="text-gray-700 hover:text-carblue transition-colors">Providers</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="flex items-center">
            <ShoppingCart className="h-5 w-5 mr-1" />
            Cart
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <User className="h-5 w-5 mr-1" />
            Sign In
          </Button>
          <Button className="bg-carblue hover:bg-carblue-dark">Register</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4 py-4">
              <a href="#" className="text-gray-700 hover:text-carblue transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-carblue transition-colors">Parts Shop</a>
              <a href="#" className="text-gray-700 hover:text-carblue transition-colors">Car Marketplace</a>
              <a href="#" className="text-gray-700 hover:text-carblue transition-colors">Providers</a>
              <div className="pt-2 flex flex-col space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <User className="h-5 w-5 mr-2" />
                  Sign In
                </Button>
                <Button className="w-full bg-carblue hover:bg-carblue-dark">Register</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
