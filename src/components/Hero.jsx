import { styles } from '../styles';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto bg-hero-pattern bg-no-repeat bg-contain bg-right-bottom'>
      <div className='absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row md:items-center items-start gap-5'>
        <div className={`${styles.padding} h-screen flex flex-col justify-start md:justify-center`}>
          <h1 className={`${styles.heroHeadText}`}>Production Ready <br />Cloud Environments <br />in Seconds.</h1>
          <p className={`${styles.heroSubText} max-w-2xl`}>Kubespaces is democratizing access to secure, scalable, highly-available cloud compute by transforming complex cloud industry mechanisms into plug-and-play solutions.</p>
          <div className="flex flex-col xs:flex-row justify-start gap-6 mt-10">
              <a
                href="#contact"
                className='bg-primary hover:bg-white border border-primary py-2 px-8 outline-none text-white hover:text-primary font-semibold text-[18px] rounded-md xs:w-fit w-full'>Talk to us
              </a>
              <a
                href="#contact"
                className='bg-white hover:bg-primary border border-primary py-2 px-8 outline-none text-primary hover:text-white font-semibold text-[18px] rounded-md xs:w-fit w-full'>Try for Free
              </a>
            </div>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#clients">
          <div className="relative w-[20px] h-[44px] rounded-3xl border-2 border-primary opacity-20 flex justify-center items-start p-1">
            <div
              className="w-2 h-2 rounded-full bg-primary mb-1 animateUpDown"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero