import Hero from "../components/Home/Hero";
import FeaturedTours from "../components/Home/FeaturedTours";
import Destinations from "../components/Home/Destinations";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Testimonials from "../components/Home/Testimonials";
import BlogPreview from "../components/Home/BlogPreview";
import CallToAction from "../components/Home/CallToAction";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedTours />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <BlogPreview />
      <CallToAction />
      <Footer />
      {/* Additional sections will be added here: Destinations, WhyChooseUs, Testimonials, BlogPreview, CallToAction */}
    </div>
  )
}
