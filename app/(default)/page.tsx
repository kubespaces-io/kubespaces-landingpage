export const metadata = {
  title: "Kubespaces",
  description: "Kubespaces Landing page",
};

import Hero from "@/components/hero-home";
import FeaturesHome from "@/components/features";
import Tabs from "@/components/tabs";
import Target from "@/components/target";
import News from "@/components/news";
import Newsletter from "@/components/newsletter";
import ParallaxSection from "@/components/ParallaxSection";
import BusinessCategories from "@/components/business-categories";
import TestimonialsCarousel from "@/components/testimonials-carousel";

export default function Home() {
  return (
    <>
      {/* <ParallaxSection /> */}
      <Hero />
      <BusinessCategories />
      <FeaturesHome />
      <TestimonialsCarousel />
      <Target />
      <News />
      <Newsletter />
    </>
  );
}
