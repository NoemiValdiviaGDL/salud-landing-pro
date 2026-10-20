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

function App() {
  const scrollToBooking = () => {
    const bookingElement = document.getElementById("booking");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="min-h-screen bg-brand-warm text-brand-navy flex flex-col font-sans">
      <Navbar onBookingClick={scrollToBooking} />

      <main className="flex-grow">
        <Hero onBookingClick={scrollToBooking} />
        <Benefits />
        <AboutMe />
        <Gallery />
        <Services onBookingClick={scrollToBooking} />
        <Testimonials />
        <BookingSection />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
