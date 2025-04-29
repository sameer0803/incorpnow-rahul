const FounderAndTeam = () => {
  return (
    <>
      {/* Founder Section */}
      <section className="py-16" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container mx-auto px-4">
          <h2 className="section-title text-gray-800 text-center text-4xl font-bold">Why Choose IncorpNow</h2>
          <h2 className="section-title text-gray-800 text-center text-4xl font-bold mt-4">Founder</h2>

          {/* Founder Card */}
          <div className="flex flex-col md:flex-row bg-white p-8 rounded-xl shadow-lg mt-12 items-center md:items-start">
            
            {/* Founder Image */}
            <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
              <img 
                src="/src/image/image1.jpg" 
                alt="Founder" 
                className="rounded-xl object-cover w-64 h-64" 
              />
            </div>

            {/* Founder Content */}
            <div className="w-full md:w-2/3 md:pl-8 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">Advocate Rahul Jaiswal</h3>
              <p className="text-lg font-medium mb-4 text-gray-600">Founder of IncorpNow</p>
              <p className="text-gray-700 leading-relaxed">
                With more than 5 years of professional experience, Advocate Rahul Jaiswal is the Founder of IncorpNow.
                He specializes in corporate law, business registrations, statutory compliance, and taxation advisory. Over the years, Rahul has guided numerous startups, entrepreneurs, and established businesses in building strong legal foundations and ensuring seamless compliance with Indian corporate regulations.
                Known for his practical approach, client-first mindset, and in-depth knowledge, Rahul continues to drive IncorpNow as a trusted partner for businesses looking to start, grow, or restructure with ease and confidence.
              </p>
            </div>

          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16" style={{ backgroundColor: '#B8C7F4' }}>
        <div className="container mx-auto px-4">
         

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center transition duration-300 hover:bg-[#4169E1] hover:text-white">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition duration-300 hover:bg-white">
                <svg className="w-8 h-8 text-blue-600 hover:text-[#4169E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
              <p>We complete registrations in record time with our streamlined processes.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center transition duration-300 hover:bg-[#4169E1] hover:text-white">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition duration-300 hover:bg-white">
                <svg className="w-8 h-8 text-blue-600 hover:text-[#4169E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p>Our legal professionals have years of experience in business compliance.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center transition duration-300 hover:bg-[#4169E1] hover:text-white">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition duration-300 hover:bg-white">
                <svg className="w-8 h-8 text-blue-600 hover:text-[#4169E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p>No hidden charges. Know exactly what you're paying for.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FounderAndTeam;
