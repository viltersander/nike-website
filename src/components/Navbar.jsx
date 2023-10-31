import { useState, useEffect } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons'; // Import the hamburger icon
import { navLinks } from '../constants';
import { XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (isMobileMenuOpen) {
        // Check if the click event target is not part of the mobile menu
        if (
          event.target.closest('.mobile-menu') === null &&
          event.target.closest('.hamburger-icon') === null
        ) {
          closeMobileMenu();
        }
      }
    };

    // Add an event listener to the document
    document.addEventListener('click', handleDocumentClick);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className='padding-x py-8 fixed top-0 z-30 w-full bg-white drop-shadow-sm'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='Logo' width={129} height={29} />
        </a>
        <div className='lg:hidden relative'>
          {isMobileMenuOpen ? (
            <div
              className='text-2xl cursor-pointer hamburger-icon'
              onClick={toggleMobileMenu}
            >
              <XMarkIcon className="h-7 w-7 text-black" />
            </div>
          ) : (
            <img
              src={hamburger}
              alt='Hamburger'
              width={25}
              height={25}
              onClick={toggleMobileMenu}
              className='hamburger-icon'
            />
          )}
          {isMobileMenuOpen && (
            <ul className='fixed mt-8 flex flex-col items-start right-0 bg-white min-h-screen mobile-menu'>
              {navLinks.map((item) => (
                <li className="mt-5 mr-10" key={item.label}>
                  <a
                    href={item.href}
                    className='font-montserrat text-lg text-slate-gray px-10'
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='hidden lg:block'>
          <ul className='flex justify-center items-center gap-16'>
            {navLinks.map((item) => (
              <li key={item.label} className='hover:text-black text-slate-gray'>
                <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
