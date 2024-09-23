import Image from "next/image";

import TeamImage01 from "@/public/images/alessandro.png";
import TeamImage02 from "@/public/images/meg.jpeg";
import TeamImage03 from "@/public/images/thomas.jpeg";
import TeamImage04 from "@/public/images/mile.jpeg";
import TeamImage05 from "@/public/images/payam.jpeg";
import TeamImage06 from "@/public/images/zafar.jpeg";

export default function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-3xl font-bold md:text-4xl">
              Our passionate team
            </h2>
            <p className="text-xl text-gray-600">
              We are an happy bunch of industry experts, community builders,
              passionate startup founders and emphatic leaders.
            </p>
          </div>

          {/* Team members */}
          <div
            className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3"
            data-aos-id-team
          >
            {/* 1st member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={TeamImage01}
                  width={120}
                  height={120}
                  alt="Team member 01"
                />
                <h4 className="text-xl font-medium mb-1">Alessandro Vozza</h4>
                <div className="text-gray-500 mb-1">CEO & Co-founder</div>
                <a
                  className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/in/alessandrovozza"
                >
                  @linkedin
                </a>
              </div>
            </div>

            {/* 2nd member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={TeamImage02}
                  width={120}
                  height={120}
                  alt="Team member 02"
                />
                <h4 className="text-xl font-medium mb-1">Meg Stefouli</h4>
                <div className="text-gray-500 mb-1">CPO & Co-founder</div>
                <a
                  className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/in/megstefuli/"
                >
                  @linkedin
                </a>
              </div>
            </div>

            {/* 3rd member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={TeamImage03}
                  width={120}
                  height={120}
                  alt="Team member 02"
                />
                <h4 className="text-xl font-medium mb-1">Thomas Kooi</h4>
                <div className="text-gray-500 mb-1">CTO & Co-founder</div>
                <a
                  className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/in/thomasjkooi/"
                >
                  @linkedin
                </a>
              </div>
            </div>

            {/* member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={TeamImage04}
                  width={120}
                  height={120}
                  alt="Team member 03"
                />
                <h4 className="text-xl font-medium mb-1">Mile Družijanić</h4>
                <div className="text-gray-500 mb-1">Software Engineer</div>
                <a
                  className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/in/mile-druzijanic/"
                >
                  @linkedin
                </a>
              </div>
            </div>

            {/* member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={TeamImage05}
                  width={120}
                  height={120}
                  alt="Team member 04"
                />
                <h4 className="text-xl font-medium mb-1">Payam Anari</h4>
                <div className="text-gray-500 mb-1">Software Engineer</div>
                <a
                  className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#https://www.linkedin.com/in/payamanari/"
                >
                  @linkedin
                </a>
              </div>
            </div>

            {/* member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={TeamImage06}
                  width={120}
                  height={120}
                  alt="Team member 03"
                />
                <h4 className="text-xl font-medium mb-1">N Zafar</h4>
                <div className="text-gray-500 mb-1">Software Engineer</div>
                <a
                  className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/in/nidaulzafar/"
                >
                  @linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
