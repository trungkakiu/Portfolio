import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../PublicComponents/Scss/Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { LanguageContext } from '../Context/Language-context';

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { dictionary, changeLanguage } = useContext(LanguageContext);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`Headerbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className='bar-topic d-flex'>
          <div className='bar '>
            <div className='d-flex'>
              <FontAwesomeIcon icon={faHome} className='icon-A01'/>
              <p>Home</p>
            </div>
             
          </div>
          <div className='bar'>
              <p>About me </p>
          </div>
          <div className='bar'>
              <p>My Blog</p>
          </div>
            <div>
            <button onClick={() => changeLanguage("vi")}>VI</button>
            <button onClick={() => changeLanguage("en")}>EN</button>
          </div>
      </div>
    </div>
  );
};

export default NavBar;