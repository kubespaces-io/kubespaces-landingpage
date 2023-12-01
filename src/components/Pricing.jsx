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
          <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2">
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
          </ul>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Pricing, 'pricing')