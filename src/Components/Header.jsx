import React from 'react'
import logo from '../assets/Images/image-removebg-preview.png';
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
    
    <div>
    <img src={logo} alt="" className='w-[80px] object-cover md:w-[150px]' />
    {menu.map((item, index) => (
      <HeaderItem key={index} name={item.name} Icon={item.icon} />
    ))}
  </div>

  )
}

export default Header
