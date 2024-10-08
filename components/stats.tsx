export default function Stats() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2
              className="mb-6 border-y text-3xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-3xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Your Apps, Our Infrastructure
            </h2>
            <p className="text-xl text-gray-600">
              Kubespaces is democratizing access to secure, scalable,
              highly-available cloud compute by transforming complex cloud
              industry mechanisms into plug-and-play solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 bg-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-6 md:px-0 md:py-8 text-center">
            {/* 1st item */}
            <div className="py-6 md:py-0 md:px-8">
              <div
                className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2"
                data-aos="fade-up"
              >
                80%
              </div>
              <div
                className="text-lg text-gray-400"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Faster time to market for your applications.
              </div>
            </div>
            {/* 2nd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div
                className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2"
                data-aos="fade-up"
              >
                -$97K
              </div>
              <div
                className="text-lg text-gray-400"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Less total cost of ownership of your platform end-to-end.
              </div>
            </div>
            {/* 3rd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div
                className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2"
                data-aos="fade-up"
              >
                100%
              </div>
              <div
                className="text-lg text-gray-400"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                More happiness for your developers (happy developers make better
                code, it's a fact).
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
