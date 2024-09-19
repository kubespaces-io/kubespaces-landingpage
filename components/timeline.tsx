export default function Timeline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2
              className="text-3xl font-bold text-gray-800 md:text-4xl"
              data-aos="fade-up"
            >
              Bringing developer productivity to blossom
            </h2>
            <p className="text-xl text-gray-600">
              We love developers (we are ones ourselves) so we build a product
              that ourselves wish was there.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-3xl mx-auto -my-4 md:-my-6"
            data-aos-id-timeline
          >
            {/* 1st item */}
            <div
              className="relative py-4 md:py-6 pl-24"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                  The seed
                </div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">
                    2022
                  </div>
                  <div
                    className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></div>
                  <h4 className="h4 text-xl">
                    The idea of Kubespaces started in Amsterdam
                  </h4>
                </div>
                <p className="text-lg text-gray-600">
                  Based on our experience at small and big customers, we started
                  thinking about how to generalize a Namespace-as-a-service
                  offering.
                </p>
              </div>
            </div>

            {/* 2nd item */}
            <div
              className="relative py-4 md:py-6 pl-24"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                  Development
                </div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">
                    2023
                  </div>
                  <div
                    className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></div>
                  <h4 className="h4 text-xl">
                    We develop the first prototype and assembled a team
                  </h4>
                </div>
                <p className="text-lg text-gray-600">
                  We recruit an enthusiastic founding team and started thinking
                  about our mission and core values.
                </p>
              </div>
            </div>

            {/* 3rd item */}
            <div
              className="relative py-4 md:py-6 pl-24"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                  Pivoting
                </div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">
                    2024
                  </div>
                  <div
                    className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></div>
                  <h4 className="h4 text-xl">
                    Transitioned to a SaaS business model
                  </h4>
                </div>
                <p className="text-lg text-gray-600">
                  We released our first MVP and found just the right product
                  market fit for our platform; we grow our customer base and set
                  the foundation for an organic expansion.
                </p>
              </div>
            </div>

            {/* 4th item */}
            <div
              className="relative py-4 md:py-6 pl-24"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                  Huge milestone
                </div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">
                    2025
                  </div>
                  <div
                    className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></div>
                  <h4 className="h4 text-xl">1 million happy customers!</h4>
                </div>
                <p className="text-lg text-gray-600">
                  Do you want to be part of it? Sign up!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
