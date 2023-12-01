import { styles } from '../styles';
import { clients } from '../constants';

import { SectionWrapper } from '../hoc';

const Clients = () => {
  return (
    <>
      <div className="">
        <h2 className={`${styles.heroSubText}`}>Our Clients</h2>
        <div className={`${styles.paddingY}`}>
          <ul className="flex justify-around items-center gap-6">
            {clients.map((client) => (
              <li key={client.title}>
                <img 
                  src={client.icon} 
                  alt={client.title}
                  className="w-full h-full max-w-24 max-h-24 object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Clients, 'clients')