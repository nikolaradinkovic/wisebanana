import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Navbar />
        <Hero />
        <FeaturedProducts />
         <WhyChooseUs />
         <Footer />
      </div>
    </main>
  );
} 