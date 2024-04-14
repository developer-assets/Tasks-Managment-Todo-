import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {


  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: '/',
      name: 'home'
    },
    {
      id: 2,
      link: '/tasks',
      name: 'tasks'
    },
    {
      id: 3,
      link: '/about',
      name: 'about'
    },
    {
      id: 4,
      link: 'contact',
      name: 'contact'
    },
  ];


  return (
    <div className='flex px-4 bg-black justify-between items-center w-full h-20 text-slate-50 z-50 fixed'>
      <div>
        <a href="/"><h1 className='text-3xl md:text-4xl ml-2'>TASK<span className='text-fuchsia-700'>FLOW.</span></h1></a>
      </div>

      <ul className='hidden md:flex'>
        {links.map((link) => {
          return (
            <li key={link.id} className='px-4 cursor-pointer capitalize font-medium text-slate-500 hover:scale-105 duration-200'>
              <Link to={link.link}> {link.name} </Link>
            </li>
          );
        })}
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-50 text-slate-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-950 to-gray-800 text-slate-500'>
          {links.map((link) => {
            return (
              <li key={link.id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                <a onClick={() => setNav(!nav)} href={link.link}>{link.name}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Header;