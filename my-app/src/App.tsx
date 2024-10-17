import React, { useRef, useState } from 'react';
import combined from './utils/images/combined.jpg';
import dance from './utils/images/dance.jpg';
import './App.css';
import './fonts.css';

function App() {
    const [isSticky, setIsSticky] = useState(false);
    const logoRef = useRef<any>(null);

    window.addEventListener('scroll', () => {
        const textElement = document.getElementById('gottede');

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

    console.log(isSticky);

    return (
        <div className="App">
            <div className="App-hero">
                <div className="content-container">
                    {isSticky ? (
                        <div className="sticky-nav" ref={logoRef}>
                            <p className={'sticky-text'}>ADLER PHIL</p>
                            <div className="sticky-menu">
                                <p className="menu-text">Projects</p>
                                <p className="menu-text">Objects</p>
                                <p className="menu-text">Contact</p>
                            </div>
                        </div>
                    ) : null}

                    {isSticky ? null : (
                        <div className="logo-container">
                            <p className={'Logo-text'} ref={logoRef}>
                                ADLER PHIL
                            </p>
                            <p className="arcitect-text">arkitekter</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="content-hero"></div>
        </div>
    );
}

export default App;
