import VideoHero from "@/components/VideoHero";
import FeaturedFleet from "@/components/FeaturedFleet";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";

export default function HomePage() {
  return (
    <>
      <VideoHero />
      <FeaturedFleet />
      <WhyUs />
      <Testimonials />
      <BookingCTA />
    </>
  );
}
