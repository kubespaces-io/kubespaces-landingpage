export const metadata = {
  title: "Kubespaces",
  description: "Kubespaces Landing page",
};

import Hero from "@/components/hero-home";
import FeaturesHome from "@/components/features";
import Target from "@/components/target";
import Newsletter from "@/components/newsletter";
import Problems from "@/components/problems";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Zigzag from "@/components/zigzag";

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <FeaturesHome />
      <Zigzag />
      <TestimonialsCarousel />
      <Target />
      <Newsletter />
    </>
  );
}
