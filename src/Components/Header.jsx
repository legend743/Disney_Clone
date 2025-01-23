import React from 'react';
import logo from '../assets/Images/removedBg.png';
import { NavLink } from 'react-router-dom';
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv
} from 'react-icons/hi2';

function Header() {
  const menu = [
    { name: 'HOME', icon: HiHome, path: '/' },
    { name: 'SEARCH', icon: HiMagnifyingGlass, path: '/search' },
    { name: 'WATCH LIST', icon: HiStar, path: '/watch-list' },
    { name: 'ORIGINALS', icon: HiStar, path: '/originals' },
    { name: 'MOVIES', icon: HiPlayCircle, path: '/movies' },
    { name: 'SERIES', icon: HiTv, path: '/series' },
    { name: 'PatientDetails', icon: HiTv, path: '/patient-details' }
  ];

  return (
    <div className="flex items-center gap-8">
      <img 
        src={logo} 
        alt="Logo" 
        className="w-[48px] object-cover md:w-[64px] pl-2 ml-3" 
      />
      {menu.map((item, index) => (
        item.path ? (
          <NavLink 
            to={item.path} 
            key={index} 
            className={({ isActive }) => 
              `flex items-center gap-3 cursor-pointer text-[14px] font-semibold mt-3 ${
                isActive ? 'text-blue-500' : 'text-gray-500'
              }`
            }
            aria-label={item.name}
          >
            <item.icon aria-hidden="true" />
            <h2>{item.name}</h2>
          </NavLink>
        ) : (
          <div 
            key={index} 
            className="flex items-center gap-3 cursor-pointer text-[14px] font-semibold mt-3"
          >
            <item.icon aria-hidden="true" />
            <h2>{item.name}</h2>
          </div>
        )
      ))}
    </div>
  );
}

export default Header;
