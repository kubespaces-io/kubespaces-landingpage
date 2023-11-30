import { styles } from '../styles';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto bg-hero-pattern bg-no-repeat bg-auto bg-right-bottom md:bg-contain'>
      <div className='absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row md:items-center items-start gap-5'>
        <div className={`${styles.padding} max-md:bg-white/80 h-screen flex flex-col justify-start md:justify-center`}>
          <h1 className={`${styles.heroHeadText}`}>Production Ready <br />Cloud Environments <br />in Seconds.</h1>
          <p className={`${styles.heroSubText} max-w-2xl`}>Kubespaces is democratising access to secure, scalable, highly-available cloud compute by transforming complex cloud industry mechanisms into plug-and-play solutions.</p>
          <div className="flex flex-col xs:flex-row justify-start gap-6 mt-10">
              <button
                type="button"
                className='bg-primary hover:bg-white border border-primary py-2 px-8 outline-none text-white hover:text-primary font-semibold text-[18px] rounded-md xs:w-fit w-full'>Talk to us
              </button>
              <button
                type="button"
                className='bg-white hover:bg-primary border border-primary py-2 px-8 outline-none text-primary hover:text-white font-semibold text-[18px] rounded-md xs:w-fit w-full'>Try for Free
              </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero