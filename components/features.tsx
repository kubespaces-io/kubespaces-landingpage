import Image from "next/image";
import FeatIllustration from "@/public/images/features-illustration.png";
import FeatAvatar from "@/public/images/features-avatar.jpg";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Items */}
          <div className="grid gap-20" data-aos-id-features-home>
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-features-home]"
              >
                <div className="relative">
                  <Image
                    className="md:max-w-none"
                    src={FeatIllustration}
                    width={540}
                    height={520}
                    alt="Features illustration"
                  />
                  <svg
                    className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                    width="540"
                    height="520"
                    viewBox="0 0 540 520"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="fill-current text-purple-600">
                      <circle className="pulse" cx="270" cy="260" r="64" />
                      <circle
                        className="pulse pulse-1"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                      <circle
                        className="pulse pulse-2"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                      <circle
                        className="pulse pulse-3"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
                data-aos-anchor="[data-aos-id-features-home]"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    Lighting fast workflow
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 md:text-4xl">
                    Say hello to your applications
                  </h3>
                  <p className="text-xl text-gray-600 mb-4">
                    Your tenants, your namespaces, your applications,
                    immediately available over multiple environments, with
                    automated global routing and TLS.
                  </p>
                  <ul className="flex flex-wrap text-lg text-gray-600 -mx-2 -my-1">
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Simple deployments</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unified Kubernetes API</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Automatic URL</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Integrated monitoring</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Freedom to install what you need</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Always up to date</span>
                    </li>
                  </ul>
                  <div className="flex items-start mt-8">
                    <Image
                      className="rounded-full shrink-0 mr-4"
                      src={FeatAvatar}
                      width={40}
                      height={40}
                      alt="Features avatar"
                    />
                    <div>
                      <blockquote className="text-gray-500 italic m-0 mb-3">
                        "We spent years building broken platform, with
                        Kubespaces we are there already and better, safer and
                        with less developer friction."
                      </blockquote>
                      <div className="text-gray-700 font-medium">
                        <cite className="text-gray-500 not-italic">
                          — Anastasia Dan
                        </cite>{" "}
                        -{" "}
                        <a
                          className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          UX Board
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
