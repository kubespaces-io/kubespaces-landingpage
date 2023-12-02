import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navFooter, socials } from '../constants';
import { logoWhite } from '../assets';

const Footer = () => {
  return (
    <nav className={`
      ${styles.paddingX} w-full flex flex-col justify-center items-center py-5 bg-primary`}>
      <div className="max-w-7xl w-full flex items-center">
        <div className="flex w-full flex-col py-8 sm:py-0 sm:flex-row sm:justify-start items-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-2 z-20 hover:opacity-80"
            onClick={() => {
              window.scrollTo(0, 0);
            }}>
            <img src={logoWhite} alt="logo" className="w-12 h-12 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer">Kubespaces</p>
          </Link>
          <ul className="list-none flex flex-row gap-4">
            {navFooter.map((link) => (
              <li
                className={`font-light hover:opacity-80 text-[12px] text-white cursor-pointer`}
                key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="flex flex-auto sm:justify-end gap-2">
            {socials.map((social, i) => (
              <Link
                key={i}
                to={social.url}
                className="flex items-center gap-2 z-20">
                <img src={social.icon} alt={social.title} className="w-6 h-6 hover:opacity-80 object-contain" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="text-white font-thin text-[10px] mt-6 tracking-wider">© 2023 - All rights reserved</div>
    </nav>
  )
}

export default Footer