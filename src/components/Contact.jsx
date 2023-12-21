import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  GoogleReCaptchaProvider,
  withGoogleReCaptcha
} from 'react-google-recaptcha-v3';

import { styles } from '../styles';
import { success } from '../assets'
import { SectionWrapper } from '../hoc';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setIsRecaptchaVerified(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const foolingBotsValue = e.target.elements.foolingBots.value;

    // Check if the honeypot field is empty (indicating likely human interaction)
    if (foolingBotsValue) {
      console.log('Bot detected. Ignoring submission.');
      return;
    }

    // logic to send the email
    emailjs.send(
      'service_8gfzrb1',
      'template_6v72019',
      {
        from_name: form.name,
        to_name: "Kubespaces Team",
        from_email: form.email,
        to_email: "hello@kubespaces.io",
        message: form.message,
      },
      'I37cLMo0nnJBD8U3s'
    )
      .then(() => {
        setLoading(false);
        setShowSuccessMessage(true);

        // logic to reset the form to initial state
        setForm({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        // logic to set the error in case something went wrong
        setLoading(false);
        console.log(error);
        alert('Something went wrong. Please reload the page and try to contact us again.')
      })
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LewUTApAAAAACh_SE7Tt-jBhhj8BqefgT90hUIA">
      {/* <div className='relative w-full mx-auto bg-hero-pattern bg-no-repeat bg-contain bg-right-bottom'> */}
        <div className="mb:4 md:mb-12 xl:mt-12 overflow-hidden w-full md:w-[50%]">
          <div className='md:p-8 py-8'>
            <h3 className={`${styles.sectionHeadText} text-white`}>Contact.</h3>
            <p className={styles.sectionSubText}>Get in touch.</p>
            {showSuccessMessage ? (
              <div className="mt-12 p-10 border-2 border-tertiary bg-white rounded-xl flex flex-col gap-8">
                <img className="w-[150px]" src={success} alt="Success" />
                <h3 className={`${styles.cardHeadText}`}>Thank you for your message!</h3>
                <p className={`${styles.cardSubText}`}>We will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='mt-12 p-10 border-2 border-primary bg-white rounded-xl flex flex-col gap-8'>
                <label htmlFor="name" className="flex flex-col">
                  <span className='text-primary font-medium mb-4'>Your Full Name</span>
                  <input
                    required
                    id="name"
                    autoComplete="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="border-2 border-gray-200 bg-gray-100 py-4 px-6 placeholder:text-secondary placeholder:font-light placeholder:text-[12px] placeholder:italic  rounded-lg outline-none border-none font-medium" />
                </label>
                <label htmlFor="email" className="flex flex-col">
                  <span className='text-primary font-medium mb-4'>Your Email Address</span>
                  <input
                    required
                    id="email"
                    autoComplete="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className="required:border-red-500 border-2 border-gray-200 bg-gray-100 py-4 px-6 placeholder:text-secondary placeholder:font-light placeholder:italic placeholder:text-[12px] rounded-lg outline-none border-none font-medium" />
                </label>
                {/* Empty input to hopefully fool some bots */}
                <input type="text" name="foolingBots" style={{ display: 'none' }} />
                {/* End Empty input */}
                <label htmlFor="message" className="flex flex-col">
                  <span className='text-primary font-medium mb-4'>Your Message</span>
                  <textarea
                    required
                    id="message"
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do you want to say?"
                    className="border-2 border-gray-200 bg-gray-100 py-4 px-6 placeholder:text-secondary placeholder:font-light placeholder:italic placeholder:text-[12px] rounded-lg outline-none border-none font-medium" />
                </label>
                <WithGoogleRecaptchaExample
                  handleRecaptchaChange={handleRecaptchaChange}
                />
                <button
                  type="submit"
                  disabled={!isRecaptchaVerified || loading || showSuccessMessage}
                  className={`${(!isRecaptchaVerified || loading || showSuccessMessage) ? "opacity-50" : "opacity-100"} w-full bg-primary hover:bg-white border border-primary py-2 px-4 outline-none text-white hover:text-primary font-semibold text-[16px] rounded-md md:w-fit`}>
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            )}
          </div>
        </div>
      {/* </div> */}

    </GoogleReCaptchaProvider>
  )
}

export default SectionWrapper(Contact, 'contact')

// Define WithGoogleRecaptchaExample component
class ReCaptchaComponent extends React.Component {
  handleVerifyRecaptcha = async () => {
    const { executeRecaptcha } = this.props.googleReCaptchaProps;

    if (!executeRecaptcha) {
      console.log('Recaptcha has not been loaded');
      return;
    }

    const token = await executeRecaptcha('homepage');
    this.props.handleRecaptchaChange(token);
  };

  render() {
    return (
      <div className="m-2 flex gap-2">
        <input id="captcha" className="appearance-none w-4 h-4 border-2 border-gray-200 rounded-sm bg-gray-100 mt-1 shrink-0 checked:bg-primary checked:border-2 checked:border-gray-200" type="checkbox" name="checkbox" onChange={this.handleVerifyRecaptcha} />
        <label htmlFor="captcha" className="ml-1 mt-1 text-[10px] text-primary"> Please verify you are a human.</label>
      </div>
    );
  }
}

// Enhance the ReCaptchaComponent with the reCAPTCHA higher-order component
const WithGoogleRecaptchaExample = withGoogleReCaptcha(ReCaptchaComponent);