import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faAward, faPersonWalkingArrowLoopLeft,
     faBell, faThumbsUp, faStar, faCartShopping, faMagnifyingGlass, faUser,
     faPhoneVolume
    } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../Scss/AuthenModal.scss'
import Avatar from '../../image/Blender Logo 2.png'


const modalVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const AuthenModal = ({ show, close }) => {

    const [isLogin, setIsLogin] = useState(true);

    return (    
        <>
        <AnimatePresence>
        {show && (

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="modal-backdrop-custom"
                onClick={close}
            >
            <AnimatePresence mode="wait">
            {isLogin ? (
                <motion.div
                key="login"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="modal-container-custom"
                onClick={(e) => e.stopPropagation()}
                >
                <div className="Login-modal">
                    <div className="Topic-baner">
                        <span>
                            <img className="Avatar" src={Avatar}/>
                        </span>
                        <span>
                            <p className="Text-topic">
                                WELCOME !
                            </p>
                        </span>
                    </div>
                    <div className="Login-form">

                    <button onClick={() => setIsLogin(false)} className="btn btn-success">Register</button>
                    </div>
                </div>
                
                </motion.div>
            ) : (
                <motion.div
                key="register"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="modal-container-custom"
                onClick={(e) => e.stopPropagation()}
                >
                <h2>Register</h2>
                <button onClick={() => setIsLogin(true)} className="btn btn-success">Login</button>
                </motion.div>
            )}
            </AnimatePresence>

                
            </motion.div>
        )}
        </AnimatePresence>


        </>

    );
};

export default AuthenModal;
