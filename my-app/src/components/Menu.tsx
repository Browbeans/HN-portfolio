import { useRef, useState } from 'react';

export const Menu = () => {
    const [isSticky, setIsSticky] = useState(false);
    const logoRef = useRef<any>(null);

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
        </div>
    );
};
