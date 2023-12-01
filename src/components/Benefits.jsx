import { styles } from '../styles';
import { benefits } from '../constants';

import { SectionWrapper } from '../hoc';

const Benefits = () => {
  return (
    <>
      <div className="">
        <h2 className={`${styles.sectionHeadText}`}>Simple to Start. <br className="md:hidden" /> Simple to Scale.</h2>
        <p className={`${styles.sectionSubText}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quae optio consectetur necessitatibus sed commodi veniam sequi quaerat velit, illum, exercitationem quas pariatur hic voluptate fugit itaque beatae quia earum.</p>
        <div className={`${styles.paddingY} mt-4`}>
          <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="self-stretch">
                <div className="flex flex-col items-center p-6 md:p-10 bg-white border-primary border-2 min-h-full rounded-xl hover:shadow-xl shadow-lg">
                  <img 
                    src={benefit.icon} 
                    alt={benefit.title}
                    className={`mb-10 w-full h-full max-w-24 max-h-24 object-contain`} />
                    <h3 className={`${styles.cardHeadText} text-center`}>{benefit.title}</h3>
                  <p className={`${styles.cardSubText} text-center`}>{benefit.description}</p>
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