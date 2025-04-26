
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { Car, Truck, Wrench, Fuel, CircleDot } from 'lucide-react';

const ServiceWindow = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const emergencyServices = [
    {
      title: "Roadside Assistance",
      description: "Immediate help for stranded vehicles with professional mechanics.",
      price: "$49.99",
      icon: Car,
      isUrgent: true
    },
    {
      title: "Towing Service",
      description: "Fast towing to your preferred repair shop or nearby garage.",
      price: "$79.99",
      icon: Truck,
      isUrgent: true
    },
    {
      title: "Fuel Delivery",
      description: "Out of gas? We'll deliver fuel to get you moving again.",
      price: "$39.99",
      icon: Fuel,
      isUrgent: true
    },
    {
      title: "Flat Tire Change",
      description: "Quick tire swap with your spare or temporary solution.",
      price: "$44.99",
      icon: CircleDot,
      isUrgent: true
    }
  ];

  const regularServices = [
    {
      title: "Car Detailing",
      description: "Professional interior and exterior cleaning services.",
      price: "$89.99",
      icon: Car
    },
    {
      title: "Oil Change",
      description: "Regular maintenance with quality oils and filters.",
      price: "$39.99",
      icon: Wrench
    },
    {
      title: "Tire Rotation",
      description: "Extend tire life with professional rotation service.",
      price: "$29.99",
      icon: CircleDot
    },
    {
      title: "Battery Replacement",
      description: "Supply and installation of high-quality batteries.",
      price: "$129.99",
      icon: Car
    }
  ];

  const partsShop = [
    {
      title: "Engine Parts",
      description: "Quality parts for all major vehicle brands and models.",
      price: "Varies",
      icon: Wrench
    },
    {
      title: "Transmission Parts",
      description: "Reliable transmission components with warranty.",
      price: "Varies",
      icon: Car
    },
    {
      title: "Interior Accessories",
      description: "Enhance your vehicle's interior with premium accessories.",
      price: "Varies",
      icon: Car
    },
    {
      title: "Performance Upgrades",
      description: "Boost your vehicle's performance with quality parts.",
      price: "Varies",
      icon: Car
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From emergency roadside assistance to routine maintenance and quality car parts - 
            we've got all your automotive needs covered.
          </p>
          
          <div className="max-w-md mx-auto mt-6 relative">
            <Input
              type="text"
              placeholder="Search for services or parts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <Tabs defaultValue="window1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="window1">Emergency & Quick Services</TabsTrigger>
            <TabsTrigger value="window2">Parts & Repairs</TabsTrigger>
            <TabsTrigger value="window3">Car Marketplace</TabsTrigger>
          </TabsList>
          
          <TabsContent value="window1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencyServices.map((service, index) => (
                <ServiceCard
                  key={`emergency-${index}`}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  icon={service.icon}
                  isUrgent={service.isUrgent}
                />
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mt-12 mb-6">Maintenance Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regularServices.map((service, index) => (
                <ServiceCard
                  key={`regular-${index}`}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  icon={service.icon}
                />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="window2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partsShop.map((part, index) => (
                <ServiceCard
                  key={`part-${index}`}
                  title={part.title}
                  description={part.description}
                  price={part.price}
                  icon={part.icon}
                />
              ))}
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Find The Right Parts For Your Vehicle</h3>
              <p className="text-gray-600 mb-6">
                Enter your vehicle details to browse compatible parts and accessories.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input placeholder="Make (e.g., Toyota)" />
                <Input placeholder="Model (e.g., Camry)" />
                <Input placeholder="Year (e.g., 2020)" />
                <div className="md:col-span-3">
                  <Button className="w-full md:w-auto bg-carblue hover:bg-carblue-dark">
                    Find Parts
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="window3">
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">Car Marketplace Coming Soon</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                We're working on bringing you a comprehensive marketplace for buying, selling, 
                and renting vehicles. Stay tuned for updates!
              </p>
              <Button variant="outline" size="lg">
                Get Notified When Available
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ServiceWindow;
