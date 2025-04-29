import { services } from '../constants';
import { FaBuilding, FaUserTie, FaHandsHelping, FaHandshake, FaUsers, FaRegSmile, FaUniversity, FaUser, FaPiggyBank, FaBriefcase } from 'react-icons/fa';

const iconComponents = {
  FaBuilding,
  FaUserTie,
  FaHandsHelping,
  FaHandshake,
  FaUsers,
  FaRegSmile,
  FaUniversity,
  FaUser,
  FaPiggyBank,
  FaBriefcase,
};

const Services = () => {
  return (
    <section className="py-16" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-4">
        <h2 className="section-title text-gray-800 text-center text-4xl font-bold">Our Services</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Comprehensive legal and compliance services tailored for startups and growing businesses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconComponents[service.icon];
            return (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl transition duration-300 hover:bg-[#4169E1] hover:text-white hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{Icon && <Icon />}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
                <button className="mt-4 text-blue-600 font-medium hover:text-white">
                  Learn more →
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">Explore all services</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
