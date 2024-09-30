import Image from "next/image";

import HeroImage from "@/public/images/about-hero.jpg";

export default function HeroAbout() {
  return (
    <section className="relative">
      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="mb-6 border-y text-5xl text-gray-800 font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="fade-up"
            >
              The story behind the project
            </h1>
            <p
              className="text-xl text-gray-800 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Developers are trusted to create an engaging experience for their
              companies, so we build tools to help them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
