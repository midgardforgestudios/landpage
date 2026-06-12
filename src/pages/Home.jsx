import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import GameFeatured from '../components/sections/GameFeatured';
import Services from '../components/sections/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <GameFeatured />
      <Services />
    </main>
  );
}