export const metadata = {
  title: "Kubespaces",
  description: "Kubespaces Landing page",
};

import Hero from "@/components/hero-home";
import FeaturesHome from "@/components/features";
import Target from "@/components/target";
import Newsletter from "@/components/newsletter";
import BusinessCategories from "@/components/business-categories";
import TestimonialsCarousel from "@/components/testimonials-carousel";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesHome />
      <TestimonialsCarousel />
      <Target />
      <Newsletter />
    </>
  );
}
