import React, { useEffect, useRef, useState } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'
import { Link, NavLink } from 'react-router-dom'
import { setShowSearch } from '../../Redux/shop'
import { useDispatch, useSelector } from 'react-redux'
import { initializeCart, selectCartValue } from '../../Redux/cartSlice'

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const cartValue = useSelector(selectCartValue);

  useEffect(() => {
    dispatch(initializeCart());
  }, [dispatch]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    // clean up function
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const getNavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#FFCD05" : "",
    };
  };

  // Disable page scrolling when menu is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);

  return (
    <div className='bg-[#ffffff]'>
      <div className='max-w-[78rem] mx-auto py-8 px-6'>
        <div className='flex items-center justify-between lg:h-20'>
          <div className='lg:flex items-center justify-center gap-8 hidden'>
            <NavLink className="hover:text-[#FFCD05] cursor-pointer">
              <FaFacebook />
            </NavLink>
            <NavLink className="hover:text-[#FFCD05] cursor-pointer">
              <FaSquareXTwitter />
            </NavLink>
            <NavLink className="hover:text-[#FFCD05] cursor-pointer">
              <RiInstagramFill />
            </NavLink>
          </div>

          <div className='lg:hidden' onClick={() => setVisible(true)}>
            <svg className="ct-icon cursor-pointer hover:text-[#FFCD05] fill-current" width="18" height="14" viewBox="0 0 18 14" aria-hidden="true" data-type="type-1">
              <rect y="0.00" width="18" height="1.7" rx="1"></rect>
              <rect y="6.15" width="18" height="1.7" rx="1"></rect>
              <rect y="12.3" width="18" height="1.7" rx="1"></rect>
            </svg>
          </div>

          <div className='lg:hidden'>
            <img src="../images/logo-mobile.svg" alt="" />
          </div>

          <div className='lg:block hidden'>
            <img src="../images/logo.svg" alt="" />
          </div>

          <div className='flex items-center justify-center gap-8'>
            <svg onClick={() => dispatch(setShowSearch(true))} className="ct-icon cursor-pointer hover:text-[#FFCD05] fill-current" aria-hidden="true" width="15" height="15" viewBox="0 0 15 15"><path d="M14.8,13.7L12,11c0.9-1.2,1.5-2.6,1.5-4.2c0-3.7-3-6.8-6.8-6.8S0,3,0,6.8s3,6.8,6.8,6.8c1.6,0,3.1-0.6,4.2-1.5l2.8,2.8c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2C15.1,14.5,15.1,14,14.8,13.7z M1.5,6.8c0-2.9,2.4-5.2,5.2-5.2S12,3.9,12,6.8S9.6,12,6.8,12S1.5,9.6,1.5,6.8z"></path></svg>
            <div className="relative" ref={dropdownRef}>

              <svg className="ct-icon cursor-pointer hover:text-[#FFCD05] fill-current" aria-hidden="true" width="15" height="15" viewBox="0 0 15 15" onClick={toggleDropdown}>
                <path d="M7.5,0C3.4,0,0,3.4,0,7.5c0,1.7,0.5,3.2,1.5,4.5c1.4,1.9,3.6,3,6,3s4.6-1.1,6-3c1-1.3,1.5-2.9,1.5-4.5C15,3.4,11.6,0,7.5,0zM7.5,13.5c-1.4,0-2.8-0.5-3.8-1.4c1.1-0.9,2.4-1.4,3.8-1.4s2.8,0.5,3.8,1.4C10.3,13,8.9,13.5,7.5,13.5z M12.3,11c-1.3-1.1-3-1.8-4.8-1.8S4,9.9,2.7,11c-0.8-1-1.2-2.2-1.2-3.5c0-3.3,2.7-6,6-6s6,2.7,6,6C13.5,8.8,13.1,10,12.3,11zM7.5,3C6.1,3,5,4.1,5,5.5S6.1,8,7.5,8S10,6.9,10,5.5S8.9,3,7.5,3zM7.5,6.5c-0.5,0-1-0.5-1-1s0.5-1,1-1s1,0.5,1,1S8,6.5,7.5,6.5z"></path>
              </svg>

              {/* Dropdown */}
              {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
                  <ul className="text-sm font-medium">
                    <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">My Profile</li>
                    <Link to="/orders"><li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">Orders</li></Link>
                    <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">Logout</li>
                  </ul>
                </div>
              )}
            </div>

            <Link to="/cart" className='relative'>
              <svg className='cursor-pointer hover:text-[#FFCD05] fill-current' aria-hidden="true" width="15" height="15" viewBox="0 0 15 15"><path d="M14.1,1.6C14,0.7,13.3,0,12.4,0H2.7C1.7,0,1,0.7,0.9,1.6L0.1,13.1c0,0.5,0.1,1,0.5,1.3C0.9,14.8,1.3,15,1.8,15h11.4c0.5,0,0.9-0.2,1.3-0.6c0.3-0.4,0.5-0.8,0.5-1.3L14.1,1.6zM13.4,13.4c0,0-0.1,0.1-0.2,0.1H1.8c-0.1,0-0.2-0.1-0.2-0.1c0,0-0.1-0.1-0.1-0.2L2.4,1.7c0-0.1,0.1-0.2,0.2-0.2h9.7c0.1,0,0.2,0.1,0.2,0.2l0.8,11.5C13.4,13.3,13.4,13.4,13.4,13.4z M10,3.2C9.6,3.2,9.2,3.6,9.2,4v1.5c0,1-0.8,1.8-1.8,1.8S5.8,6.5,5.8,5.5V4c0-0.4-0.3-0.8-0.8-0.8S4.2,3.6,4.2,4v1.5c0,1.8,1.5,3.2,3.2,3.2s3.2-1.5,3.2-3.2V4C10.8,3.6,10.4,3.2,10,3.2z"></path></svg>
              <div className='h-4 w-4 rounded-full bg-yellow-500 text-center absolute inset-2'>
                <p className='text-[12px] font-bold text-center'>{cartValue}</p>
              </div>
            </Link>
          </div>
        </div>

        {/* second navbar */}
        <div className='h-16 pt-5 text-[12px] font-bold lg:flex justify-center items-center gap-14 hidden'>
          <NavLink to='/' className="hover:text-[#FFCD05] transition-all duration-200 ease-linear" style={getNavLinkStyle}>
            <p>HOME</p>
          </NavLink>
          <NavLink to='/shop' className="hover:text-[#FFCD05] transition-all duration-200 ease-linear" style={getNavLinkStyle}>
            <p>COLLECTION</p>
          </NavLink>
          <NavLink to='/about' className="hover:text-[#FFCD05] transition-all duration-200 ease-linear" style={getNavLinkStyle}>
            <p>ABOUT</p>
          </NavLink>
          <NavLink to='/contact' className="hover:text-[#FFCD05] transition-all duration-200 ease-linear" style={getNavLinkStyle}>
            <p>CONTACT</p>
          </NavLink>
        </div>
      </div>

      {/* menu bar */}
      <div className={`absolute top-0 left-0 bottom-0 overflow-hidden bg-[#0f1114] lg:hidden transition-all duration-300 ease-in-out ${visible ? 'w-[20rem] h-screen z-10' : 'w-0'}`} >
        <div>
          <div onClick={() => setVisible(false)} className='absolute text-white text-xl p-5 right-0 cursor-pointer'>
            <RxCross1 className='hover:rotate-90 duration-200' />
          </div>
          <div className='flex flex-col gap-1 text-white pt-10'>
            <NavLink onClick={() => setVisible(false)} style={getNavLinkStyle} className='py-3 pl-6 hover:text-[#FFCD05]' to='/'>HOME</NavLink>
            <NavLink onClick={() => setVisible(false)} style={getNavLinkStyle} className='py-3 pl-6 hover:text-[#FFCD05]' to='/shop'>COLLECTION</NavLink>
            <NavLink onClick={() => setVisible(false)} style={getNavLinkStyle} className='py-3 pl-6 hover:text-[#FFCD05]' to='/about'>ABOUT</NavLink>
            <NavLink onClick={() => setVisible(false)} style={getNavLinkStyle} className='py-3 pl-6 hover:text-[#FFCD05]' to='/contact'>CONTACT</NavLink>
          </div>
        </div>
      </div>

    </div>
  )
}
