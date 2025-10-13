import Nav from "../components/Nav";
import Hero from "../components/Hero";
import SectionMasalah from "../components/SectionMasalah";
import SectionFitur from "../components/SectionFitur";
import SectionCTA from "../components/SectionCTA";
import Footer from "../components/Footer";
import AIBubble from "../components/AIBubble";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <SectionMasalah />
      <SectionFitur />
      <SectionCTA />
      <Footer />
      <AIBubble />
    </div>
  );
}
