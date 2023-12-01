import { styles } from '../styles';
import { clients } from '../constants';

import { SectionWrapper } from '../hoc';

const Clients = () => {
  return (
    <>
      <div className="">
        <h2 className={`${styles.sectionHeadText} w-full text-center text-white`}>Our Clients</h2>
        <div className={`${styles.paddingY}`}>
          <ul className="flex justify-around items-center gap-6">
            {clients.map((client) => (
              <li key={client.title} className="p-4 sm:p-8 bg-white rounded-full">
                <img 
                  src={client.icon} 
                  alt={client.title}
                  className="w-full h-full max-w-32 max-h-32 object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Clients, 'clients')