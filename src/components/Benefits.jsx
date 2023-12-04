import { styles } from '../styles';
import { benefits } from '../constants';

import { SectionWrapper } from '../hoc';

const Benefits = () => {
  return (
    <>
      <div className="">
        <h2 className={`${styles.sectionHeadText}`}>Simple to Start. <br className="md:hidden" /> Simple to Scale.</h2>
        <p className={`${styles.sectionSubText}`}>Our turn-key solution removes infrastructure hassles, allowing developers to focus on crafting code. Embrace cloud-native technology effortlessly, and with our commitment to a serverless approach, the future of innovation is at your fingertips. Start coding, not configuring, and scale seamlessly into the cloud-native future.</p>
        <div className={`${styles.paddingY} mt-4`}>
          <ul className="grid gap-y-32 gap-x-6 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-20">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="self-stretch">
                <div className="relative flex flex-col items-center p-6 md:p-10 bg-primary border-primary border-2 min-h-full rounded-xl hover:shadow-xl shadow-lg">
                  <img 
                    src={benefit.icon} 
                    alt={benefit.title}
                    className={`absolute top-[-100px] mb-10 max-w-[200px] max-h-[200px] object-contain bg-white border-2 border-primary rounded-full p-6`} />
                    <h3 className={`${styles.cardHeadText} text-white text-center mt-[100px]`}>{benefit.title}</h3>
                  <p className={`${styles.cardSubText} text-white text-center`}>{benefit.description}</p>
                </div>
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Benefits, 'benefits')