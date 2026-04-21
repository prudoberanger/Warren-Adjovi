import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
