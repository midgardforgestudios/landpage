import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import Services from '../components/sections/Services';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Services />
      <ContactSection />
    </main>
  );
}