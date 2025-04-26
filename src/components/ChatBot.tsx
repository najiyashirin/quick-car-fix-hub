
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, SendHorizonal } from 'lucide-react';
import { Input } from "@/components/ui/input";

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help with your car today?", isBot: true },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    setMessages([...messages, { text: newMessage, isBot: false }]);
    
    // Simulate AI response
    setTimeout(() => {
      const botResponses = [
        "I can help you find a service provider for that issue. What's your location?",
        "Would you like me to connect you with a nearby mechanic?",
        "I understand. Let me check available service providers in your area.",
        "Would you prefer an immediate service or can you schedule for later?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(currentMessages => [...currentMessages, { text: randomResponse, isBot: true }]);
    }, 1000);

    setNewMessage("");
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button 
          onClick={() => setIsChatOpen(!isChatOpen)} 
          className="h-14 w-14 rounded-full bg-carred hover:bg-carred-dark shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-xl shadow-2xl z-50 overflow-hidden border border-gray-200">
          <div className="bg-carblue text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              <h3 className="font-semibold">Car Service Assistant</h3>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-white/80 hover:text-white">
              &times;
            </button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-4 max-w-3/4 ${msg.isBot ? 'mr-auto' : 'ml-auto'}`}
              >
                <div className={`rounded-lg p-3 inline-block ${
                  msg.isBot ? 'bg-gray-200 text-gray-800' : 'bg-carblue text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 flex">
            <Input
              type="text"
              placeholder="Ask about car services..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" className="ml-2 bg-carblue hover:bg-carblue-dark">
              <SendHorizonal className="h-5 w-5" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
