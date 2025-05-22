import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../Scss/ProjectPart.scss'
import banner01 from '../../image/Banner/Banner_01.png'
import banner02 from '../../image/Banner/Banner_02.png'
import banner03 from '../../image/Banner/Banner_03.png'
import banner04 from '../../image/Banner/Banner_04.png'
import banner05 from '../../image/Banner/Banner_05.png'
import { animate } from 'animejs';


const ProjectPart = (props) => {


    useEffect(() => {
    AOS.init({
        once: true, 
        offset: 100,
    });

    AOS.refresh(); 
    }, []);

    return(
        <div className="Project-contents">
            <div className='Hero-banner d-flex flex-wrap'>
                <div data-aos="flip-right" data-aos-duration="1000" className='banner' >
                    <img  className='item' src={banner01} />
                    <span className='topic'>
                        <p>Skills</p>
                    </span>
                </div>
                <div data-aos="flip-right" data-aos-duration="1000" className='banner' >
                    <img  className='item' src={banner02} />
                    <span className='topic'>
                        <p>Professionalism</p>
                    </span>
                </div>
                <div data-aos="flip-right" data-aos-duration="1000" className='banner'>
                    <img  className='item' src={banner03} />
                    <span className='topic'>
                        <p>Discipline </p>
                    </span>
                </div>
                <div data-aos="flip-right" data-aos-duration="1000" className='banner'>
                    <img  className='item' src={banner04} />
                    <span className='topic'>
                        <p>Responsibility </p>
                    </span>
                </div>
                <div data-aos="flip-right" data-aos-duration="1000" className='banner'>
                    <img  className='item' src={banner05} />
                    <span className='topic'>
                        <p>Growth</p>
                    </span>
                </div>
            </div>
            <div className='Topic-Body'>
                <div className='left'>
                    <div className='top-left'>
                        <h1>DO DANG CHUNG</h1>
                        <h3>Full stack developer</h3>
                        <p>I build accessible, pixel-perfect digital experiences for the web.</p>
                    </div>
                    <div className='bar-left'>
                        <div className='Bar'>
                            <p className='dec'>_______</p>
                            <p className='disdec'>ABOUT</p>
                        </div>
                        <div className='Bar'>
                            <p className='dec'>_______</p>
                            <p className='disdec'>EXPERIENC</p>
                        </div>
                        <div className='Bar'>
                            <p className='dec'>_______</p>
                            <p className='disdec'>PROJECTS</p>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='part-01-hero-skill' data-aos="fade-up">
                     {[...Array(50)].map((_, i) => (
                    <p key={i} style={{ color: 'white' }}>Scroll content line {i + 1}</p>
                    ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPart;