import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Promotions from "@/components/Promotions";
import Footer from "@/components/Footer";
import Rooms from "@/components/Rooms";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Rooms />
      <Promotions />
      <Testimonials />
      <Footer />
    </div>
  );
}
