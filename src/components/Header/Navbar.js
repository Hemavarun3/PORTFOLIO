import { useState } from "react";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="flex flex-col justify-between top-0 w-full sticky z-50 bg-black">
      <div className="flex justify-between py-8 lg:px-48  md:px-24 px-10 items-center">
        <div className="text-3xl font-semibold text-maincolor">
          <a href="/">PORTFOLIO</a>
        </div>
        <div className="hidden md:flex space-x-10 text-xl font-semibold">
          <a href='/' className="hover:text-maincolor">HOME</a>
          <a href='/about' className="hover:text-maincolor">ABOUT</a>
          <a href="/portfolio" className="hover:text-maincolor">PORTFOLIO</a>
        </div>
        <div className="md:hidden lg:hidden">
          <button onClick={toggleMenu}><i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"} text-maincolor text-2xl cursor-pointer`}></i></button>
        </div>
      </div>
      <div className={`flex flex-col md:hidden lg:hidden ${menuOpen ? "visible" : "hidden"} w-full px-16  space-y-6 font-semibold`}>
        <a href='/' className="hover:text-maincolor">HOME</a>
        <a href='/about' className="hover:text-maincolor">ABOUT</a>
        <a href="/projects" className="hover:text-maincolor">PROJECTS</a>
        <a href="/contact" className="hover:text-maincolor">CONTACT</a>
      </div>
    </div>
  );
}

export default Header;