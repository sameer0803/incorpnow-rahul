import { useLocation } from 'react-router-dom';

const FormPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const expertType = params.get("type"); // lawyer, ca, etc.

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        action="https://formsubmit.co/samudd246@gmail.com"
        method="POST"
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Consult a {expertType?.toUpperCase() || 'Professional'}
        </h2>

        <input type="hidden" name="expertType" value={expertType || ''} />

        {/* ... name, email, phone inputs as shown earlier ... */}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input type="text" name="name" required className="w-full px-4 py-2 border rounded-lg" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input type="email" name="email" required className="w-full px-4 py-2 border rounded-lg" />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Phone</label>
          <input type="tel" name="phone" required className="w-full px-4 py-2 border rounded-lg" />
        </div>

        <input type="hidden" name="_captcha" value="false" />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
