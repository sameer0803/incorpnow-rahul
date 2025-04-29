import { useState, useEffect } from 'react';

const Hero = () => {
  const [businessCount, setBusinessCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();
    
    const animateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuad = (t) => t * (2 - t);
      
      setBusinessCount(Math.floor(easeOutQuad(progress) * 500));
      setClientCount(Math.floor(easeOutQuad(progress) * 20000));
      setRatingCount(Math.floor(easeOutQuad(progress) * 100));
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    
    animateCount();
  }, []);

  return (
    <section className="py-20" style={{ backgroundColor: '#B8C7F4' }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Legal Compliance Made Simple for Your Business
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            IncorpNow is your trusted partner for company registration, compliance, and legal services. 
            Let us handle the paperwork while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="btn-primary">Get Started</button>
            <button className="bg-white text-blue-600 border border-blue-600 font-medium py-2 px-6 rounded-lg hover:bg-blue-50 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">{businessCount}+</div>
                <div className="text-gray-600">Businesses Incorporated</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">{clientCount}+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">{ratingCount}+</div>
                <div className="text-gray-600">5-Star Ratings</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">24/7</div>
                <div className="text-gray-600">Client Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
