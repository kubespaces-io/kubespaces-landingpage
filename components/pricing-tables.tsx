"use client";

import { useState } from "react";

export default function PricingTables() {
  const [annual, setAnnual] = useState<boolean>(true);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Simple, transparent pricing
            </h1>
            <p
              className="text-xl text-gray-600"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We only charge you for the resources you consume, not the amount
              of namespaces or users. Prices are indicative at the moment.
            </p>
          </div>

          {/* Pricing tables */}
          <div>
            {/* Pricing toggle */}
            <div
              className="flex justify-center mb-16"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="inline-flex items-center">
                <div className="text-gray-500 font-medium mr-3">
                  Billed Monthly
                </div>
                <div className="form-switch">
                  <input
                    type="checkbox"
                    name="pricing-toggle"
                    id="pricing-toggle"
                    className="sr-only"
                    checked={annual}
                    onChange={() => setAnnual(!annual)}
                  />
                  <label className="bg-gray-600" htmlFor="pricing-toggle">
                    <span className="bg-gray-200" aria-hidden="true"></span>
                    <span className="sr-only">Enable to see yearly prices</span>
                  </label>
                </div>
                <div className="text-gray-500 font-medium ml-3">
                  Billed Annually
                </div>
              </div>
            </div>

            <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
              {/* Pricing table 1 */}
              <div
                className="relative flex flex-col h-full p-6 bg-gray-300"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="h4 text-purple-500 mb-1">Basic</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-600">
                      $
                    </span>
                    <span className="h2">{annual ? "49" : "55"}</span>
                    <span className="font-medium text-gray-600">/month</span>
                  </div>
                  <div className="text-gray-600">
                    for every 10 Gb / 10 vCPUs
                  </div>
                </div>
                <div className="font-medium mb-3 text-gray-600">
                  Features include:
                </div>
                <ul className="text-gray-600 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Basic support</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited users</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited tenants</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Multiple regions</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Automatic ingress</span>
                  </li>
                </ul>
                <div className="p-3 mt-6">
                  <a
                    className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full"
                    href="#0"
                  >
                    Start free trial
                  </a>
                </div>
              </div>

              {/* Pricing table 2 */}
              <div
                className="relative flex flex-col h-full p-6 bg-gray-300"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="absolute top-0 right-0 mr-6 -mt-4">
                  <div className="inline-flex text-sm font-semibold py-1 px-3 mt-px text-green-600 bg-green-200 rounded-full">
                    Most Popular
                  </div>
                </div>
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="h4 text-purple-600 mb-1">Premium</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-600">
                      $
                    </span>
                    <span className="h2">{annual ? "79" : "85"}</span>
                    <span className="font-medium text-gray-600">/month</span>
                  </div>
                  <div className="text-gray-600">
                    for every 10 Gb / 10 vCPUs
                  </div>
                </div>
                <div className="font-medium mb-3 text-gray-600">
                  All features of Essential plus:
                </div>
                <ul className="text-gray-600 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Premium support with guaranteed SLA</span>
                  </li>
                </ul>
                <div className="p-3 mt-6">
                  <a
                    className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full"
                    href="#0"
                  >
                    Start free trial
                  </a>
                </div>
              </div>

              {/* Pricing table 3 */}
              <div
                className="relative flex flex-col h-full p-6 bg-gray-300"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="h4 text-purple-600 mb-1">Advanced</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-600">
                      $
                    </span>
                    <span className="h2">{annual ? "129" : "135"}</span>
                    <span className="font-medium text-gray-600">/month</span>
                  </div>
                  <div className="text-gray-600">
                    for every 10 Gb / 10 vCPUs
                  </div>
                </div>
                <div className="font-medium mb-3 text-gray-600">
                  All features of Essential plus:
                </div>
                <ul className="text-gray-600 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Private, dedicated clusters</span>
                  </li>
                </ul>
                <div className="p-3 mt-6">
                  <a
                    className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full"
                    href="#0"
                  >
                    Start free trial
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom infobox */}
            <div className="flex flex-col lg:flex-row justify-between items-center mt-12 lg:mt-6 lg:py-8 lg:border-t lg:border-b lg:border-gray-800">
              <div className="font-medium text-lg text-center lg:text-left mb-4 lg:mb-0">
                Expecting more than 1000 Active End Users?
              </div>
              <div>
                <a
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700"
                  href="#0"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
