import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`
      ${styles.paddingX} w-full flex justify-center items-center py-5 fixed top-0 z-20 white-gradient
    `}>
      <div className="max-w-7xl w-full flex items-center">
        <div className="flex flex-auto justify-start items-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-2 z-20"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}>
            <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
            <p className="text-primary text-[18px] font-bold cursor-pointer md:block hidden">Kubespaces</p>
          </Link>
          <ul className="list-none hidden md:flex flex-row gap-4">
            {navLinks.map((link) => (
              <li
                className={`${active === link.title
                  ? 'font-bold'
                  : 'font-light'
                  } hover:underline underline-offset-8 decoration-2 text-[12px] text-primary cursor-pointer`}
                key={link.id}
                onClick={() => setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="md:hidden flex flex-1 justify-end items-center z-10">
            <img
              src={!toggle ? menu : close}
              alt="menu"
              className="w-[24px] h-[24px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)} />
          </div>
          <div className={`${!toggle ? 'hidden' : 'flex'} bg-white flex-col justify-between md:hidden p-6 pt-24 absolute top-0 right-0 z-8 w-full h-screen`}>
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li
                  className={`${active === link.title
                    ? 'font-bold'
                    : 'font-base'
                    }  text-[16px] text-primary cursor-pointer`}
                  key={link.id}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title)
                  }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <div className="md:hidden flex justify-between gap-2">
              <button
                type="button"
                className='bg-white hover:bg-primary border border-primary py-2 px-4 outline-none text-primary hover:text-white font-semibold text-[12px] rounded-md w-fit'>Sign In
              </button>
              <button
                type="button"
                className='bg-primary hover:bg-white border border-primary py-2 px-4 outline-none text-white hover:text-primary font-semibold text-[12px] rounded-md w-fit'>Try for Free
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-auto justify-end gap-2">
          <button
            type="button"
            className='bg-white hover:bg-primary border border-primary py-2 px-4 outline-none text-primary hover:text-white font-semibold text-[12px] rounded-md w-fit'>Sign In
          </button>
          <button
            type="button"
            className='bg-primary hover:bg-white border border-primary py-2 px-4 outline-none text-white hover:text-primary font-semibold text-[12px] rounded-md w-fit'>Try for Free
          </button>
        </div>
      </div>

    </nav>
  )
}

export default Navbar