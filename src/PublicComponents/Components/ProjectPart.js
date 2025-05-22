import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import '../Scss/ProjectPart.scss';
import banner01 from '../../image/Banner/Banner_01.png';
import banner02 from '../../image/Banner/Banner_02.png';
import banner03 from '../../image/Banner/Banner_03.png';
import banner04 from '../../image/Banner/Banner_04.png';
import banner05 from '../../image/Banner/Banner_05.png';
import { useInView } from 'react-intersection-observer';

const ProjectPart = (props) => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const { ref: inViewRef1, inView: inView1 } = useInView({ threshold: 0.5 });
    const { ref: inViewRef2, inView: inView2 } = useInView({ threshold: 0.5 });
    const { ref: inViewRef3, inView: inView3 } = useInView({ threshold: 0.5 });
    useEffect(() => {
        if (section1Ref.current) inViewRef1(section1Ref.current);
        if (section2Ref.current) inViewRef2(section2Ref.current);
        if (section3Ref.current) inViewRef3(section3Ref.current);
    }, [inViewRef1, inViewRef2, inViewRef3]);

    useEffect(() => {
        AOS.init({
            once: false,
            offset: 150,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="Project-contents">
            <div className="Hero-banner d-flex flex-wrap">
                <div data-aos="flip-right" data-aos-duration="1000" className="banner">
                    <img className="item" src={banner01} />
                    <span className="topic">
                        <p>Skills</p>
                    </span>
                </div>
                <div data-aos="flip-right" data-aos-duration="1000" className="banner">
                    <img className="item" src={banner02} />
                    <span className="topic">
                        <p>Professionalism</p>
                    </span>
                </div>
                <div data-aos="flip-right" data-aos-duration="1000" className="banner">
                    <img className="item" src={banner03} />
                    <span className="topic">
                        <p>Discipline</p>
                    </span>
                </div>
                <div data-aos="flip-right" data-aos-duration="1000" className="banner">
                    <img className="item" src={banner04} />
                    <span className="topic">
                        <p>Responsibility</p>
                    </span>
                </div>
                <div data-aos="flip-right" data-aos-duration="1000" className="banner">
                    <img className="item" src={banner05} />
                    <span className="topic">
                        <p>Growth</p>
                    </span>
                </div>
            </div>
            <div className="Topic-Body">
                <div className="left">
                    <div className="top-left">
                        <h1>DO DANG CHUNG</h1>
                        <h3>Full stack developer</h3>
                        <p>I build accessible, pixel-perfect digital experiences for the web.</p>
                    </div>
                    <div className="bar-left">
                        <div className={inView1 ? 'Bar-active' : 'Bar'}>
                            <div
                                onClick={() => {
                                    section1Ref.current?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <p className="dec">____</p>
                                <p className="disdec">ABOUT</p>
                            </div>
                        </div>
                        <div className={inView2 ? 'Bar-active' : 'Bar'}>
                            <div
                                onClick={() => {
                                    section2Ref.current?.scrollIntoView({ behavior: 'smooth'});
                                }}
                            >
                                <p className="dec">____</p>
                                <p className="disdec">EXPERIENCE</p>
                            </div>
                        </div>
                        <div className={inView3 ? 'Bar-active' : 'Bar'}>
                            <div
                                onClick={() => {
                                    section3Ref.current?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <p className="dec">____</p>
                                <p className="disdec">PROJECTS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div
                        ref={section1Ref}
                        style={{ height: '100vh' }}
                        className="part-01-hero-skill"
                        data-aos="fade-up"
                    >
                        <p style={{ opacity: 1 }}>Section 1</p>
                    </div>
                    <div ref={section2Ref} style={{ height: '100vh' }} className="experienc">
                        <p style={{ opacity: 1 }}>Section 2</p>
                    </div>
                    <div ref={section3Ref} style={{ height: '100vh' }} className="projects">
                        <p style={{ opacity: 1 }}>Section 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPart;