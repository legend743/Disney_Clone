import React from 'react'
import logo from '../assets/Images/removedBg.png';
import {HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv} from "react-icons/hi2";
import{
    HiPlus,HiDotsVertical
} from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
const menu=[
    {
        name:'HOME',
        icon:HiHome
    },
    {
        name:'SEARCH',
        icon:HiMagnifyingGlass 
    },  {
        name:'WATHC LIST',
        icon:HiStar
    },  {
        name:'ORIGINALS',
        icon:HiStar
    },
    {
        name:'MOVIES',
        icon:HiPlayCircle
    },  {
        name:'SERIES',
        icon:HiTv
    }
]


  return (
    
    <div className='flex item-center gap-8' >
    <img src={logo} alt="" className='w-[10px] object-cover md:w-[48px] border-2px pl-2 ml-3' />
    {menu.map((item, index) => (
      <HeaderItem key={index} name={item.name} Icon={item.icon} />
    ))}
  </div>

  )
}

export default Header
