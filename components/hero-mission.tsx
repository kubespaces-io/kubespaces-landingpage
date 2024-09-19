import Image from "next/image";

import HeroImage from "@/public/images/about-hero.jpg";

export default function HeroMission() {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover"
          src={HeroImage}
          width={1440}
          height={394}
          priority
          alt="Mission"
        />
        <div
          className="absolute inset-0 bg-gray-900 opacity-75"
          aria-hidden="true"
        ></div>
      </div>

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="mb-6 border-y text-gray-400 text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="fade-up"
            >
              Our Mission
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We are on a mission to help developers and platform engineers all
              over the world to focus on what matters, leaving the details of
              infrastructure management to us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
