import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { FeaturedListings } from "./components/FeaturedListings";
import { BookingForm } from "./components/BookingForm";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* MARKER-MAKE-KIT-INVOKED */}
      <Navbar />
      <Hero />
      <Features />
      <FeaturedListings />
      <BookingForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
