import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import ReviewsMarquee from '../components/ReviewsMarquee';
import ReviewForm from '../components/ReviewForm';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import WaFloat from '../components/WaFloat';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <ReviewsMarquee />
        <ReviewForm />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <WaFloat />
    </>
  );
}
