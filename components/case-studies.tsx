import Image from "next/image";

import NewsImage10 from "@/public/images/news-10.jpg";
import NewsImage11 from "@/public/images/news-11.jpg";
import NewsImage12 from "@/public/images/news-12.jpg";

export default function CaseStudies() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Your apps, our infrastructure
            </h2>
            <p className="text-xl text-gray-400">
              Kubespaces is democratizing access to secure, scalable,
              highly-available cloud compute by transforming complex cloud
              industry mechanisms into plug-and-play solutions.
            </p>
          </div>

          {/* Articles */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-6 items-start md:max-w-none">
            {/* 1st article */}
            <article className="flex flex-col h-full" data-aos="fade-up">
              <a className="block" href="#0">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <Image
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                    src={NewsImage10}
                    width={352}
                    height={198}
                    alt="News 10"
                  />
                  <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none">
                    Case study
                  </figcaption>
                </figure>
              </a>
              <div className="grow flex flex-col h-full p-6 bg-gray-800">
                <h3 className="h4 mb-2">
                  <a
                    className="hover:text-gray-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    How to build a PaaS
                  </a>
                </h3>
                <p className="text-lg text-gray-400 grow">
                  A true Platform-as-a-service should really take away the
                  burden of infrastructure from their users, enabling faster
                  time to market and a better user experience.
                </p>
                <div>
                  <a
                    className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                    href="/contact"
                  >
                    <span className="text-sm">Learn more</span>
                    <svg
                      className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* 2nd article */}
            <article
              className="flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a className="block" href="#0">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <Image
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                    src={NewsImage11}
                    width={352}
                    height={198}
                    alt="News 11"
                  />
                  <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none">
                    Case study
                  </figcaption>
                </figure>
              </a>
              <div className="grow flex flex-col h-full p-6 bg-gray-800">
                <h3 className="h4 mb-2">
                  <a
                    className="hover:text-gray-100 transition duration-150 ease-in-out"
                    href="/contact"
                  >
                    Expose securely
                  </a>
                </h3>
                <p className="text-lg text-gray-400 grow">
                  We manage all the routing thru standard cloud infrastructure,
                  providing a simple ingress schema that is automatically
                  secured with Let's Encrypt certificates.
                </p>
                <div>
                  <a
                    className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                    href="#0"
                  >
                    <span className="text-sm">Learn more</span>
                    <svg
                      className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* 3rd article */}
            <article
              className="flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a className="block" href="#0">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <Image
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                    src={NewsImage12}
                    width={352}
                    height={198}
                    alt="News 12"
                  />
                  <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none">
                    Case study
                  </figcaption>
                </figure>
              </a>
              <div className="grow flex flex-col h-full p-6 bg-gray-800">
                <h3 className="h4 mb-2">
                  <a
                    className="hover:text-gray-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Simple, transparent pricing
                  </a>
                </h3>
                <p className="text-lg text-gray-400 grow">
                  Pay for the resources you need, not the developers you
                  onboard. We want Kubespaces to be a surprise, for all the good
                  reasons, not for a crazy monthly bill.
                </p>
                <div>
                  <a
                    className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                    href="#0"
                  >
                    <span className="text-sm">Learn more</span>
                    <svg
                      className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
