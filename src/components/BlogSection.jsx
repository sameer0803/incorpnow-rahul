import { blogPosts } from '../constants';

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Latest From Our Blog</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Stay updated with the latest legal and compliance insights for your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm transition duration-300 hover:bg-[#dad7cd] hover:shadow-md"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Blog"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </div>
                <button className="text-blue-600 font-medium hover:text-blue-700">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">View all articles</button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
