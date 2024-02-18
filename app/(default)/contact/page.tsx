export const metadata = {
  title: 'Contact us - Kubespaces',
  description: 'Contact us for any questions or suggestions',
}

import CtaContact from '@/components/cta-contact'

export default function Contact() {
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4" data-aos="fade-up">How can we help you?</h1>
              <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">We are making Kubespaces.io so it will fit your use cases; please let us know which direction you would like to see it go in. We will be in touch soon. Feel free to contact us <a href="https://us3.list-manage.com/contact-form?u=24d31b30ff32b9a76f8acf796&form_id=fcb24d89a79c3c92cf351dd560d7be1e"><u>here</u></a>.</p>
            </div>


          </div>
        </div>
      </section>

    </>
  )
}