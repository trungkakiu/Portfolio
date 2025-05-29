import React, { useState, useEffect, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faAward, faPersonWalkingArrowLoopLeft,
     faBell, faThumbsUp, faStar, faCartShopping, faMagnifyingGlass, faUser,
     faPhoneVolume,
     faLock,
     faEnvelope
    } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer, useToast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../Scss/AuthenModal.scss'
import Avatar from '../../image/Blender Logo 2.png'
import { faGithub, faGoogle, faLetterboxd, faMailchimp } from "@fortawesome/free-brands-svg-icons";
import { Prev } from "react-bootstrap/esm/PageItem";
import APIconfig from '../../Service/APIconfig'
import ToastCustom from "../Components/ToastCustom";
import { UserContext } from "../../Context/User-context";


const modalVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const AuthenModal = ({ show, close }) => {
    const {login, User} = useContext(UserContext);
    const [isLogin, setIsLogin] = useState(true);
    const [isPass, setIsPas] = useState(true);
    const DefaultData = {
        UserName: "",
        Email: "",
        PassWord: ""
    }
    const [LoginData, setLoginData] = useState(DefaultData);
    const [SignUpData, setSignUpData] = useState(DefaultData);
    const isLoad = {
        Login: false,
        Register: false
    }
    const [isLoading, setIsLoading] = useState(isLoad);


    const HandleLogin = async() =>{
        try {
            if(!LoginData.UserName){
                ToastCustom.ToastError("Missing", "Mising username!", "Login");
                return;
            }
            if(!LoginData.PassWord){
                ToastCustom.ToastError("Missing", "Mising password!", "Login");
                return;
            }
            setIsLoading(
                (prev) => ({...prev, Login: true})
            )
            const rs = await APIconfig.handleLogin(LoginData);
            if(rs && rs.status === 200){
                setIsLoading(
                    (prev) => ({...prev, Login: false})
                )
                ToastCustom.ToastSuccess("Wrong", "Welcome!", "Login");
                console.log(rs.data.ED);
                await login(rs.data.ED);
                return;
            }
            if(rs && rs.status === 204){
                setIsLoading(
                    (prev) => ({...prev, Login: false})
                )
                ToastCustom.ToastError("Wrong", "wrong login name!", "Login");
                return;
            }
            if(rs && rs.status === 205){
                setIsLoading(
                    (prev) => ({...prev, Login: false})
                )
                ToastCustom.ToastError("Wrong", "wrong password!", "Login");
                return;
            }

        } catch (error) {
            setIsLoading(
                (prev) => ({...prev, Login: false})
            )
            ToastCustom.ToastError("ServerError", "Server error!", "Login");
            console.error(error);
            return;
        }

    }

    const HandleRegister = async() =>{
            try {
                if(!SignUpData.UserName){
                    ToastCustom.ToastError("Missing", "Mising username!", "Login");
                    return;
                }
                if(SignUpData.UserName.length < 3){
                    ToastCustom.ToastError("Missing", "UserName minimum 3 characters!", "Login");
                    return;
                }
                if(!SignUpData.PassWord){
                    ToastCustom.ToastError("Missing", "Mising password!", "Login");
                    return;
                }
                if(SignUpData.PassWord.length < 6){
                    ToastCustom.ToastError("Missing", "Password minimum 6 characters!", "Login");
                    return;
                }
                if(!SignUpData.Email){
                    ToastCustom.ToastError("Missing", "Email can't empty!", "Login");
                    return;
                }
                setIsLoading(
                    (prev) => ({...prev, Register: true})
                )
                const rs = await APIconfig.handleRegister(SignUpData);
                setIsLoading(
                    (prev) => ({...prev, Register: false})
                )
                console.log(rs.status);
                if(rs && rs.status === 206){
                    console.log("call");
                    ToastCustom.ToastError("Wrong", rs.data.EM, "Login");
                    setIsLoading(
                        (prev) => ({...prev, Register: false})
                    )
                    return;
                }
                if(rs && rs.status === 205){
                    console.log("call");
                    ToastCustom.ToastError("Wrong", "User nameUser name already exists!", "Login");
                    setIsLoading(
                        (prev) => ({...prev, Register: false})
                    )
                    return;
                }
                if(rs && rs.status === 200){
                    setIsLoading(
                        (prev) => ({...prev, Register: false})
                    )
                    ToastCustom.ToastSuccess("Success", rs.data.EM, "Login");
                    setTimeout(() =>{
                        setIsLogin(true);
                    }, [1500]);
                    return;
                }



            } catch (error) {
                setIsLoading(
                    (prev) => ({...prev, Register: false})
                )
                ToastCustom.ToastError("ServerError", "Server error!", "Login");
                console.error(error);
                return;
            }
    }

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
                    <ToastContainer containerId={"Login"}/>
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
                        <div className="username">
                            <FontAwesomeIcon icon={faUser} className="icon"/>
                            <span>
                                <label>Username</label>
                                <input value={LoginData.UserName}
                                onChange={(event)=>setLoginData(
                                    (Prev) => ({...Prev, UserName: event.target.value})
                                )}
                                />
                            </span>
                            
                        </div>
                        <div className="password">
                            <FontAwesomeIcon icon={faLock} className="icon"/>
                            <span>
                                <label>Password</label>
                                <input type={isPass ? ("password") : ("text")}
                                value={LoginData.PassWord}
                                onChange={(event)=>setLoginData(
                                    (Prev) => ({...Prev, PassWord: event.target.value})
                                )}/>
                            </span>
                        </div>
                        <div className="Option d-flex">
                            <div className="d-flex showPass">
                                <input onChange={()=>setIsPas(!isPass)} type="checkbox"/>
                                <label>Show password</label>
                            </div>
                            <div className="d-flex forgotPass">
                                <span>
                                    Forgot password?
                                </span>
                            </div>
                        </div>
                        <div onClick={!isLoading.Login ? HandleLogin : null} className={isLoading.Login ? "btn btn-Load" : "btn btn-login"}>
                            <span>
                                {isLoading.Login ? "Loging..." : "Login"}
                            </span>
                        </div>
                        <div className="Other-option d-flex">
                            <FontAwesomeIcon icon={faGoogle} className="icon"/>
                            <FontAwesomeIcon icon={faGithub} className="icon"/>
                        </div>
                        <div className="Register-link">
                            <span onClick={()=>setIsLogin(false)}>
                                You not have an account?
                            </span>
                        </div>
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
                <div className="Register-part">
                    <ToastContainer containerId={"Login"}/>
                    <div className="Register-form">
                        <div className="Topic">
                            <span>
                                CREATE YOUR ACCOUNT
                            </span>
                        </div>
                        <div className="username">
                            <FontAwesomeIcon icon={faUser} className="icon"/>
                            <span>
                                <label>Username</label>
                                <input value={SignUpData.UserName}
                                onChange={(event)=>setSignUpData(
                                    (Prev) => ({...Prev, UserName: event.target.value})
                                )}/>
                            </span>
                            
                        </div>
                        <div className="password">
                            <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                            <span>
                                <label>Email</label>
                                <input type="email" value={SignUpData.Email}
                                onChange={(event)=>setSignUpData(
                                    (Prev) => ({...Prev, Email: event.target.value})
                                )}/>
                            </span>
                        </div>
                        <div className="password">
                            <FontAwesomeIcon icon={faLock} className="icon"/>
                            <span>
                                <label>Password</label>
                                <input type={isPass ? ("password") : ("text")} 
                                value={SignUpData.PassWord}
                                onChange={(event)=>setSignUpData(
                                    (Prev) => ({...Prev, PassWord: event.target.value})
                                )}/>
                            </span>
                        </div>
                        <div onClick={!isLoading.Register ? HandleRegister : null} className="btn btn-register">
                            <span>
                                Summit
                            </span>
                        </div>
                        <div className="Other-option d-flex">
                            <FontAwesomeIcon icon={faGoogle} className="icon"/>
                            <FontAwesomeIcon icon={faGithub} className="icon"/>
                        </div>
                        <div className="Login-link">
                            <span onClick={()=>setIsLogin(true)}>
                                You already have an account?
                            </span>
                        </div>
                    </div>
                </div>
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
