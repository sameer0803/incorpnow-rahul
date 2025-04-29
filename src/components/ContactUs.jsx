import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Contact Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Our Office</h2>
              <p>123, Business Tower, Sector 62, Noida, UP 201301, India</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Phone</h2>
              <p><a href="tel:+911234567890" className="text-blue-600 hover:underline">+91 12345 67890</a></p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p><a href="mailto:info@incorpnow.com" className="text-blue-600 hover:underline">info@incorpnow.com</a></p>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="w-full h-72 md:h-96">
            <iframe
              title="Our Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1759.3476515211177!2d77.36534215823482!3d28.63042062329735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5639b5b9e71%3A0xdedb0ef42628b1f5!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1715683724231!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
