import { styles } from '../styles';
import { products } from '../constants';

import { SectionWrapper } from '../hoc';

const Pricing = () => {
  return (
    <>
      <div className="">
        <h2 className={`${styles.sectionHeadText}`}>Our  Products.</h2>
        <p className={`${styles.sectionSubText}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quae optio consectetur necessitatibus sed commodi veniam sequi quaerat velit, illum, exercitationem quas pariatur hic voluptate fugit itaque beatae quia earum.</p>
        <div className={`${styles.paddingY} mt-4`}>
          {/* <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            {products.map((product) => (
              <li key={product.title} className="self-stretch">
                <div className="p-6 md:p-10 bg-white border-primary border-2 min-h-full rounded-xl hover:shadow-xl shadow-lg">
                  <img 
                    src={product.icon} 
                    alt={product.title}
                    className={`mb-10 w-full h-full max-w-24 max-h-24 object-contain`} />
                    <h3 className={`${styles.cardHeadText}`}>{product.title}</h3>
                  <p className={`${styles.cardSubText}`}>{product.description}</p>
                  <p className={`text-xl text-secondary font-bold`}>{product.price}</p>
                </div>
                
              </li>
            ))}
          </ul> */}
          <ul className="grid gap-y-32 gap-x-6 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-20">
            {products.map((product) => (
              <li key={product.title} className="self-stretch">
                <div className="relative flex flex-col items-center p-6 md:p-10 border-primary border-2 min-h-full rounded-xl hover:shadow-xl shadow-lg">
                  <img
                    src={product.icon}
                    alt={product.title}
                    className={`absolute top-[-100px] mb-10 max-w-[200px] max-h-[200px] object-contain bg-white border-2 border-primary rounded-full p-6`} />
                  <h3 className={`${styles.cardHeadText} text-center mt-[100px]`}>{product.title}</h3>

                  <p className={`text-xl text-secondary font-bold`}>{product.price}</p>

                  <ul className={`${styles.cardSubText} marker:text-secondary space-y-4 my-4 mb-20 text-center`}>
                    {product.points.map((point, index) => (
                      <li key={index} className="text-[12px] text-left">{point}</li>
                    ))}
                  </ul>
                  <div className="absolute bottom-0 w-full mt-10">
                    <button
                      type="button"
                      className='bg-primary hover:bg-transparent hover:border-t-2 hover:border-primary p-6 outline-none text-white hover:text-primary font-semibold text-[18px] rounded-b-md w-full'>Try for Free
                    </button>
                  </div>
                </div>
                      
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Pricing, 'pricing')