import { useRef, useState } from 'react';
import { ProjectList } from './ProjectList/ProjectList';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Project } from './Project/Project';
import { Contact } from './Contact/Contact';

export const StartPage = () => {
    const [isSticky, setIsSticky] = useState(false);
    const logoRef = useRef<any>(null);
    const location = useLocation();
    const isStartPage = location.pathname.endsWith('/');
    const navigate = useNavigate();

    window.addEventListener('scroll', () => {
        if (logoRef.current) {
            const { offsetTop } = logoRef.current;
            const height = window.scrollY;
            if (height > offsetTop) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }
    });

    return (
        <>
            <div className={isStartPage ? 'App-hero' : ''}>
                <div className="content-container">
                    {isSticky || !isStartPage ? (
                        <div className="sticky-nav" ref={logoRef}>
                            <p className={'sticky-text'} onClick={() => navigate('/')}>
                                ADLER PIHL
                            </p>
                            <div className="sticky-menu">
                                <p className="menu-text">Projects</p>
                                <p className="menu-text">Objects</p>
                                <p onClick={() => navigate('/contact')} className="menu-text">
                                    Contact
                                </p>
                            </div>
                        </div>
                    ) : null}

                    {isSticky || !isStartPage ? null : (
                        <div className="logo-container">
                            <p className={'Logo-text'} ref={logoRef}>
                                ADLER PIHL
                            </p>
                            <p className="arcitect-text">arkitekter</p>
                        </div>
                    )}
                </div>
            </div>
            <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="/details/:name" element={<Project />} />
                <Route path="/" element={<ProjectList />} />
            </Routes>
        </>
    );
};
