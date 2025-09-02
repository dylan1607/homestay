import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Promotions from "@/components/Promotions";
import Footer from "@/components/Footer";
import Rooms from "@/components/Rooms";
import FloatingIcon from "@/components/FloatingIcon";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Hero />
      <Rooms />
      <Promotions />
      <Testimonials />
      <FloatingIcon />
      <Footer />
    </div>
  );
}
