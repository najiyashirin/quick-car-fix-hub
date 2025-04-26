
import React from 'react';
import { Button } from "@/components/ui/button";
import { Car, Wrench, Fuel } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-carblue to-carblue-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Quick Car Repairs & Services at Your Fingertips
            </h1>
            <p className="text-lg text-gray-200">
              Connect with trusted service providers for emergency assistance, repairs, 
              maintenance, and more - all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-carred hover:bg-carred-dark">
                Request Emergency Service
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Browse Services
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 mt-8">
              <p className="text-sm bg-white/20 rounded-full px-3 py-1 flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-400 mr-2 inline-block animate-pulse-light"></span>
                1,500+ Service Providers
              </p>
              <p className="text-sm bg-white/20 rounded-full px-3 py-1">4.8/5 Average Rating</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <Wrench className="h-10 w-10 mb-4 text-carred-light" />
              <h3 className="text-xl font-semibold mb-2">Emergency Repairs</h3>
              <p className="text-gray-200">Get help within minutes for breakdowns and emergencies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors mt-6">
              <Fuel className="h-10 w-10 mb-4 text-carred-light" />
              <h3 className="text-xl font-semibold mb-2">Fuel Delivery</h3>
              <p className="text-gray-200">Out of gas? Get fuel delivered to your location</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <Car className="h-10 w-10 mb-4 text-carred-light" />
              <h3 className="text-xl font-semibold mb-2">Towing Service</h3>
              <p className="text-gray-200">Professional towing for all vehicle types</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors mt-6">
              <Wrench className="h-10 w-10 mb-4 text-carred-light" />
              <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
              <p className="text-gray-200">Regular service from certified professionals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
