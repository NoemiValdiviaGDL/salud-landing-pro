import { useState } from "react";
import Hero from "./components/sections/Hero.jsx";
import BookingSection from "./components/sections/BookingSection.jsx";
import AboutMe from "./components/sections/AboutMe.jsx";
import Testimonials from "./components/sections/Testimonials.jsx";
import FAQ from "./components/sections/FAQ.jsx";
import Footer from "./components/layout/Footer.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Benefits from "./components/sections/Benefits.jsx";
import Services from "./components/sections/Services.jsx";
import Gallery from "./components/sections/Gallery.jsx";
import WhatsAppButton from "./components/ui/WhatsAppButoon.jsx";
import CallButtonfrom, { CallButton } from "./components/ui/CallButton.jsx";

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);
  return (
    <div className="min-h-screen bg-brand-warm text-brand-navy flex flex-col font-sans">
      <Navbar onBookingClick={handleOpenBooking} />

      <main className="flex-grow">
        <Hero onBookingClick={handleOpenBooking} />
        <Benefits />
        <AboutMe />
        <Gallery />
        <Services onBookingClick={handleOpenBooking} />
        <Testimonials />
        <BookingSection isOpen={isBookingOpen} onClose={handleCloseBooking} />
        <FAQ />
      </main>

      <Footer />
      <CallButton />
      <WhatsAppButton />
    </div>
  );
}

export default App;
