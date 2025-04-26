
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

interface CountdownTimerProps {
  minutes: number;
  onTimeUp: () => void;
}

const CountdownTimer = ({ minutes, onTimeUp }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    
    if (!isPaused) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isPaused, onTimeUp]);
  
  const formatTime = () => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };
  
  const progressPercentage = (timeLeft / (minutes * 60)) * 100;
  
  return (
    <div className="rounded-lg border border-gray-200 p-4 bg-white shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-carred mr-2" />
          <h4 className="font-semibold">Service Countdown</h4>
        </div>
        <span className="text-sm bg-carred/10 text-carred px-2 py-1 rounded-full font-medium">
          Time Guaranteed
        </span>
      </div>
      
      <div className="text-center my-4">
        <span className="text-3xl font-bold">{formatTime()}</span>
      </div>
      
      <Progress value={progressPercentage} className="h-2 mb-4" />
      
      <div className="text-sm text-gray-600 text-center">
        {progressPercentage > 50 
          ? "Your service provider is on the way!" 
          : "Time is running low - service provider has been notified."
        }
      </div>
      
      <div className="mt-4 text-xs text-gray-500 text-center">
        If the provider doesn't arrive within the countdown time,
        you will not be charged the service fee.
      </div>
    </div>
  );
};

export default CountdownTimer;
