import VideoHero from "@/components/VideoHero";
import ServicesSection from "@/components/ServicesSection";
import FeaturedFleet from "@/components/FeaturedFleet";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";

export default function HomePage() {
  return (
    <>
      <VideoHero />
      <ServicesSection />
      <FeaturedFleet />
      <WhyUs />
      <Testimonials />
      <BookingCTA />
    </>
  );
}
