
import React from 'react';
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
  isUrgent?: boolean;
}

const ServiceCard = ({ title, description, price, icon: Icon, isUrgent = false }: ServiceCardProps) => {
  return (
    <div className={`rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform hover:scale-[1.02] ${
      isUrgent ? 'border-l-4 border-l-carred' : ''
    }`}>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className={`p-3 rounded-lg ${isUrgent ? 'bg-carred/10 text-carred' : 'bg-carblue/10 text-carblue'}`}>
            <Icon className="h-6 w-6" />
          </div>
          {isUrgent && (
            <span className="bg-carred/10 text-carred text-xs px-2 py-1 rounded-full font-medium">
              Emergency Service
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold mt-4">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-lg font-bold text-gray-900">{price}</p>
          </div>
          <Button 
            className={isUrgent ? "bg-carred hover:bg-carred-dark" : "bg-carblue hover:bg-carblue-dark"}
          >
            Request
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
