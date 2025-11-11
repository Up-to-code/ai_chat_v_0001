"use client";
import React, { useState } from 'react';

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    // Construct the form submission URL with parameters
    const formAction = "https://accounts.livechat.com/signup";
    const params = new URLSearchParams({
      client_id: "92418ea187dd3c572383cbf56f015b6c",
      response_type: "token",
      redirect_uri: "https://app.chatbot.com/stories",
      source_id: "home-hero-cta",
      source_url: "https://www.chatbot.com/",
      referrer: "https://www.google.com/",
      landing_page: "https://www.chatbot.com/",
      email: email
    });
    
    window.location.href = `${formAction}?${params.toString()}`;
  };

  return (
    <section className="container mx-auto relative mt-12 lg:mt-16 mb-4">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full text-center">
          {/* Heading Section */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-medium my-0 pb-4">
              Help, convert, and sell with&nbsp;a&nbsp;data-driven AI chatbot
            </h1>

            <p className="max-w-2xl mx-auto text-lg">
              ChatBot instantly helps your customers using AI-generated responses. Get&nbsp;<strong>24/7 support</strong> and <strong>ultra-high</strong> satisfaction rates.
            </p>
          </div>

          {/* Signup Form */}
          <form 
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto mb-4"
          >
            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row">
              <input 
                type="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mr-2 mb-2 sm:mb-0 text-base px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-grow min-w-[14rem]" 
                placeholder="Enter your business email" 
                required 
              />
              <input type="hidden" name="source_id" value="home-hero-cta" />
              <input type="hidden" name="source_url" value="https://www.chatbot.com/" />
              <input type="hidden" name="source_type" value="website" />
              <input type="hidden" name="referrer" value="https://www.google.com/" />
              <input type="hidden" name="landing_page" value="https://www.chatbot.com/" />
              
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200 text-base whitespace-nowrap"
              >
                Sign up free
              </button>
            </div>
          </form>

          {/* Features List */}
          <div className="max-w-2xl mx-auto pb-0 mb-0 mt-2 text-sm text-center">
            <span className="inline-block mr-6">
              <span className="mr-2 inline-flex items-center">
                <CheckIcon />
              </span>
              <span>Free 14-day trial</span>
            </span>
          
            <span className="inline-block mr-6">
              <span className="mr-2 inline-flex items-center">
                <CheckIcon />
              </span>
              <span>No credit card required</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Check Icon Component
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" className="text-green-600">
    <path 
      d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" 
      fill="currentColor"
    />
  </svg>
);

export default HeroSection;