import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const HeaderFooter = ({ activeLink, setActiveLink }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-10 w-full bg-white shadow-sm p-5 flex justify-between items-center">
        <Link to={'/'} className="font-semibold font-tasteful text-[2.5rem] hidden md:block">Aesthetic 7 Creations</Link>
        <Link to={'/'} className="font-semibold font-tasteful text-[1.9rem] md:hidden">Aesthetic 7 Creations</Link>
        <div className="quick-links font-tasteful hidden md:flex gap-14 text-[20px]">
          <Link to={'/'} className={`${activeLink === '/' ? 'text-black' : 'text-gray-400'} transition-all ease-in-out duration-300 font-semibold`} onClick={() => setActiveLink('/')}>Home</Link>
          <Link to={'/about-us'} className={`${activeLink === 'about-us' ? 'text-black' : 'text-gray-400'} transition-all ease-in-out duration-300 font-semibold`} onClick={() => setActiveLink('about-us')}>About</Link>
          {/* <Link to={'/link-3'} className={`${activeLink === 'link-3' ? 'text-black' : 'text-gray-400'} transition-all ease-in-out duration-100 font-semibold`} onClick={() => setActiveLink('link-3')}>Services</Link> */}
          <Link to={'/contact'} className={`${activeLink === 'contact' ? 'text-black' : 'text-gray-400'} transition-all ease-in-out duration-100 font-semibold`} onClick={() => setActiveLink('contact')}>Contact</Link>
        </div>
        <div className="mobile-quick-links block md:hidden gap-10">
          <i className={`fa-solid fa-bars text-[30px] ${navOpen ? 'hidden' : ''}`} onClick={() => {setNavOpen(true)}}></i>
          <i className={`fa-solid fa-xmark text-[35px] ${navOpen ? '' : 'hidden'}`} onClick={() => {setNavOpen(false)}}></i>
          <div className={`menu-links ${navOpen ? 'absolute mobile-slide-in flex flex-col' : 'absolute mobile-slide-out'} font-tasteful text-[26px] pl-10 pt-10 w-[100vw] h-[100vh] gap-14 bg-gray-50 top-20`}>
            <Link to={'/'} className={`${activeLink === '/' ? 'text-black' : 'text-gray-400'} transition-all ease-in-out duration-300 font-semibold`} onClick={() => {setNavOpen(false); setActiveLink('/')}}>Home</Link>
            <Link to={'/about-us'} className={`${activeLink === 'about-us' ? 'text-black' : 'text-gray-400'} transition-all ease-in-out duration-300 font-semibold`} onClick={() => {setNavOpen(false); setActiveLink('about-us')}}>About</Link>
            <Link to={'/contact'} className={`${activeLink === 'contact' ? 'text-black' : 'text-gray-400'} transition-all ease-in-out duration-100 font-semibold`} onClick={() => {setNavOpen(false); setActiveLink('contact')}}>Contact</Link>  
          </div>
        </div>
      </nav>
        <Outlet />
      <footer className="">
        <div className="font-giphurs px-10 mt-10">
          <div className="flex items-center justify-between lg:text-[1.2rem] md:text-[1.1rem] text-[0.8rem]">
          <Link to={'/'} onClick={() => setActiveLink('/')}>Home</Link>
          <Link to={'/about-us'} onClick={() => setActiveLink('about-us')}>About Us</Link>
          <Link to={'/contact'} onClick={() => setActiveLink('contact')}>Contact</Link>
          </div>
        </div>
        <div className="p-3 font-figtree text-sm text-gray-600 opacity-45 text-center">
          © 2024 Aesthetic7Creations
        </div>
      </footer>
    </>
  );
};

export default HeaderFooter;
