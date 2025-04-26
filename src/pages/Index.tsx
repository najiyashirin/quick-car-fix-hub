
import React, { useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceWindow from "@/components/ServiceWindow";
import ChatBot from "@/components/ChatBot";
import ServiceProviderCard from "@/components/ServiceProviderCard";
import CountdownTimer from "@/components/CountdownTimer";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [showCountdown, setShowCountdown] = useState(false);
  
  const handleTimeUp = () => {
    toast({
      title: "Service Time Guarantee",
      description: "Your service provider didn't arrive in time. No service fee will be charged.",
      variant: "destructive",
    });
    setShowCountdown(false);
  };
  
  const topProviders = [
    {
      name: "Mike's Auto Service",
      image: "https://source.unsplash.com/random/100x100/?mechanic",
      rating: 4.9,
      specialty: "Emergency Repairs & Towing",
      distance: "2.3 miles",
      responseTime: "5-10 min",
      services: ["Towing", "Repairs", "Fuel Delivery"]
    },
    {
      name: "Quick Tire Solutions",
      image: "https://source.unsplash.com/random/100x100/?mechanic,2",
      rating: 4.8,
      specialty: "Tire Services & Roadside Help",
      distance: "1.5 miles",
      responseTime: "10-15 min",
      services: ["Tire Change", "Rotation", "Balancing"]
    },
    {
      name: "Auto Care Plus",
      image: "https://source.unsplash.com/random/100x100/?mechanic,3",
      rating: 4.7,
      specialty: "Full Service Auto Repair",
      distance: "3.1 miles",
      responseTime: "15-20 min",
      services: ["Diagnostics", "Repairs", "Maintenance"]
    },
    {
      name: "Express Car Wash",
      image: "https://source.unsplash.com/random/100x100/?carwash",
      rating: 4.6,
      specialty: "Detailing & Cleaning",
      distance: "2.7 miles",
      responseTime: "Same day",
      services: ["Wash", "Detailing", "Interior Cleaning"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServiceWindow />
        
        {/* Top Service Providers Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Top-Rated Service Providers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We partner with the best mechanics and service providers in your area to ensure quality service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topProviders.map((provider, index) => (
                <ServiceProviderCard
                  key={index}
                  {...provider}
                />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button variant="outline" size="lg">View All Providers</Button>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Getting help for your vehicle has never been easier. Follow these simple steps:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-carblue-light/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-carblue">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Request a Service</h3>
                <p className="text-gray-600">
                  Choose the service you need and submit a request through our platform.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-carblue-light/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-carblue">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Connected</h3>
                <p className="text-gray-600">
                  We'll match you with available service providers in your area.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-carblue-light/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-carblue">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Service Delivered</h3>
                <p className="text-gray-600">
                  Track your service in real-time and only pay when the job is completed.
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Button 
                className="bg-carred hover:bg-carred-dark"
                onClick={() => {
                  setShowCountdown(true);
                  toast({
                    title: "Service Requested",
                    description: "Your emergency service has been requested. A provider is on the way!",
                  });
                }}
              >
                Try Demo Request
              </Button>
            </div>
            
            {showCountdown && (
              <div className="max-w-sm mx-auto mt-8">
                <CountdownTimer
                  minutes={3}
                  onTimeUp={handleTimeUp}
                />
              </div>
            )}
          </div>
        </section>
        
        {/* App Promotion Section */}
        <section className="py-16 bg-gradient-to-r from-carblue to-carblue-dark text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Download Our Mobile App</h2>
                <p className="text-xl text-gray-200 mb-6">
                  Get roadside assistance at your fingertips. Our app makes it easier than ever to request help.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    App Store
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Google Play
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-96 bg-white/10 rounded-3xl border-4 border-white/20 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-2 bg-black rounded-2xl overflow-hidden">
                    <div className="h-full w-full bg-gray-800 flex items-center justify-center">
                      <p className="text-center text-white/80 p-4">Mobile App Preview</p>
                    </div>
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-white/20 rounded-b-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Index;
