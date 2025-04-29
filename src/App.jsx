import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <WhyChooseUs />
              <Testimonials />
              <BlogSection />
            </>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<WhyChooseUs />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/contact" element={
            <section className="py-16">
              <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold">Contact Us</h1>
                <p>Contact form will go here</p>
              </div>
            </section>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;