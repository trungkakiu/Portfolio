import '../Scss/HomePage.scss'
import Avatar from '../../image/Avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons';
import CsharpLogo from '../../image/CSharplogo.png'
import CplusLog0 from '../../image/C++LOGO 2.png'
import NodeJsLogo from '../../image/NodeJSlogo 2.png'
import BlenderLogo from '../../image/Blender Logo 2.png'
import UnityLogo from '../../image/Unity logo.png'
import ReactLogo from '../../image/ReactLogo 2.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectPart from './ProjectPart';
import { useContext, useEffect } from 'react';
import { LanguageContext } from '../../Context/Language-context'


const HomePage = () =>{
    const { dictionary, changeLanguage, language } = useContext(LanguageContext);
    useEffect(() => {
    AOS.init({
        once: true,  
        offset: 100,
    });

    AOS.refresh();
    }, []);
    return(
        <div className="HomePagecontents">
            <section className='PageTopic d-flex'>
                <div data-aos="zoom-in" data-aos-duration="1000" className='Avatar' >
                    <img src={Avatar} style={{width: "19 rem" , height: "25rem"}} className='img-01'/>
                    <img src={Avatar} style={{width: "18 rem" , height: "25rem"}} className='img-02'/>
                    <img src={Avatar} style={{width: "18 rem" , height: "25rem"}} className='top-img'/>
                </div>
                <div className='Info'>
                    <div className='social-box d-flex'>
                    <div className='fb icon'>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className='tw icon'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className='insta icon'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className='threads icon'>
                        <FontAwesomeIcon icon={faThreads} /> 
                    </div>
                    </div>
                    <div className='info-box d-flex'>
                        <div>
                            <p style={language == "vi" ? {fontSize: "28px", marginLeft: "-7%"} : {}} className='Name'>{dictionary.Name}</p>
                            <span style={language == "vi" ? {marginLeft: "-9%"} : {}}  className='dev-rol'>Developer</span>
                            <p style={language == "vi" ? {fontSize: "16px", marginLeft: "-7%"} : {}} className='TN'> {`" ${dictionary.Topic} "`}  </p>
                            <div  style={language == "vi" ? {marginLeft: "-9%"} : {}} className='btn_show'>
                                <span>
                                    <p>{dictionary.MyProject}</p>
                                </span>
                            </div>
                            <div className='btn_hide'>
                                <span>
                                    <p>{dictionary.ContactMe}</p>
                                </span>
                            </div>
                        </div>
                       <div className='skill-box'>
                            <div className='skil-icon'>
                                {[CsharpLogo, CplusLog0, NodeJsLogo, ReactLogo, UnityLogo, BlenderLogo].map((src, i) => (
                                    <div data-aos="flip-right" data-aos-duration="1000" className='boder' key={i}>
                                        <img  className='skill' src={src} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='project-part'>
                <ProjectPart/>
            </section>
        </div>
    )
}


export default HomePage;