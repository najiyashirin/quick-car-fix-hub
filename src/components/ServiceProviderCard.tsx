
import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ServiceProviderCardProps {
  name: string;
  image: string;
  rating: number;
  specialty: string;
  distance: string;
  responseTime: string;
  services: string[];
}

const ServiceProviderCard = ({
  name,
  image,
  rating,
  specialty,
  distance,
  responseTime,
  services
}: ServiceProviderCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      <div className="p-6">
        <div className="flex items-center">
          <Avatar className="h-16 w-16 border-2 border-carblue-light">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600">{specialty}</p>
            
            <div className="flex items-center mt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {services.map((service, index) => (
            <Badge key={index} variant="secondary">{service}</Badge>
          ))}
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{distance} away</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span>Responds in {responseTime}</span>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <Button variant="outline">View Profile</Button>
          <Button className="bg-carblue hover:bg-carblue-dark">Request Service</Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderCard;
