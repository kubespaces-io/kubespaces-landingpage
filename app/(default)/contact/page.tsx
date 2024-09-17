export const metadata = {
  title: "Contact us - Kubespaces",
  description: "Contact us for any questions or suggestions",
};

import CtaContact from "@/components/cta-contact";
import ContactForm from "@/components/contact-form";

export default function Contact() {
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1
                className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                How can we help you?
              </h1>
              <p
                className="text-xl text-gray-600"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We are making Kubespaces.io so it will fit your use cases;
                please let us know which direction you would like to see it go
                in. We will be in touch soon. Feel free to contact us{" "}
                <a href="https://us3.list-manage.com/contact-form?u=24d31b30ff32b9a76f8acf796&form_id=fcb24d89a79c3c92cf351dd560d7be1e">
                  <u>here</u>
                </a>
                .
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
