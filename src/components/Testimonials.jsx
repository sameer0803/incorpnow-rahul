import { testimonials } from '../constants';

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        <h2 className="section-title text-center text-4xl font-bold text-gray-800">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl transition duration-300 hover:bg-[#4169E1] hover:text-white shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800 hover:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 hover:text-gray-200">{testimonial.role}</p>
                </div>
              </div>

              <p className="italic mb-4">{`"${testimonial.content}"`}</p>

              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
