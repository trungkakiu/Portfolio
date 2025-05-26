import { useState, useEffect, useContext, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../PublicComponents/Scss/Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { LanguageContext } from '../Context/Language-context';
import { UserContext } from '../Context/User-context';
import AuthenModal from '../PublicComponents/Modal/Authenticate-modal'


const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { dictionary, changeLanguage } = useContext(LanguageContext);
  const { User, login, logout } = useContext(UserContext);
  const ModalDefault = {
    AuthenState: false
  }
  const [ModalState, setModalState] = useState(ModalDefault);

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


  const OpenModal = (code) =>{
      if(code === "Authen"){
        setModalState((prev) => ({...prev, AuthenState: true}))
      }
  }
  const CloseModal = (code) =>{
      if(code === "Authen"){
        setModalState((prev) => ({...prev, AuthenState: false}))
      }
  }

  return (
    <div className={`Headerbar ${isVisible ? 'visible' : 'hidden'}`}>
      <AuthenModal show={ModalState.AuthenState} close = {()=> CloseModal("Authen")}/>
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

          <div className='Acount-box'>
              {User.Authen ? (
                <>
                </>
              ) : (
                <>
                  <div className='login-btn'>
                      <FontAwesomeIcon onClick={()=>OpenModal("Authen")} icon={faRightFromBracket} className='signinIcon'/>
                  </div>
                </>
              )}
          </div>
      </div>

    </div>
  );
};

export default NavBar;