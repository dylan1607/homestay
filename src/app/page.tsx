import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Promotions from "@/components/Promotions";
import Footer from "@/components/Footer";
import Rooms from "@/components/Rooms";
import FloatingIcon from "@/components/FloatingIcon";
import FAQ from "@/components/FAQ";
import Video from "@/components/Video";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Rooms />
      <Video />
      <Promotions />
      <Testimonials />
      <FAQ />
      <FloatingButton />
      <FloatingIcon />
      <Footer />
    </div>
  );
}
