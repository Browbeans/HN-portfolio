import { useRef, useState } from 'react';
import { ProjectList } from './ProjectList/ProjectList';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Project } from './Project/Project';
import { Contact } from './Contact/Contact';
import { Box, breakpoints, css, spacing, styled } from '@mui/system';

const StickyText = styled('p')(
    ({ theme: { breakpoints, spacing } }) => css`
        margin: 0;
        font-weight: 800;
        font-size: 2em;
        top: 20px;
        cursor: pointer;
        margin-left: ${spacing(10)};

        ${breakpoints.down('sm')} {
            margin-left: ${spacing(2)};
            margin-top: ${spacing(2)};
        }
    `,
);

const LogoText = styled('p')(
    ({ theme: { breakpoints, spacing } }) => css`
        margin: 0;
        font-weight: bold;
        font-size: 4em;
        ${breakpoints.down('sm')} {
            font-size: 2em;
            margin-left: ${spacing(2)};
        }
    `,
);

const Menu = styled(Box)(
    ({ theme: { spacing, breakpoints } }) => css`
        display: flex;
        justify-content: space-between;
        width: 20%;
        align-items: flex-end;
        height: 60px;
        margin-right: ${spacing(10)};

        ${breakpoints.down('sm')} {
            margin-right: 0;
            position: fixed;
            width: calc(100% - 1em);
            left: 0;
            bottom: 0;
            height: 30px;
            padding-bottom: 10px;
            padding-left: ${spacing(1.5)};
            background: white;
        }
    `,
);

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
            <Box
                display={isStartPage ? 'flex' : 'block'}
                minHeight={isStartPage ? '100vh' : 'none'}
                alignItems="center"
                width={isStartPage ? '100%' : 'none'}
            >
                <Box display="flex" alignItems="center" boxSizing="border-box">
                    {isSticky || !isStartPage ? (
                        <Box
                            position="fixed"
                            top={0}
                            width="100%"
                            display="flex"
                            justifyContent="space-between"
                            alignItems="flex-end"
                            pb={1}
                            ref={logoRef}
                        >
                            <StickyText onClick={() => navigate('/')}>ADLER PIHL</StickyText>
                            <Menu>
                                <p className="menu-text">Projects</p>
                                <p className="menu-text">Objects</p>
                                <p onClick={() => navigate('/contact')} className="menu-text">
                                    Contact
                                </p>
                            </Menu>
                        </Box>
                    ) : null}

                    {isSticky || !isStartPage ? null : (
                        <Box
                            ml={{ sm: 2, xs: 0 }}
                            display="flex"
                            alignItems="center"
                            flexDirection={{ sm: 'row', xs: 'column' }}
                        >
                            <LogoText ref={logoRef}>ADLER PIHL</LogoText>
                            <p className="arcitect-text">arkitekter</p>
                        </Box>
                    )}
                </Box>
            </Box>
            <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="/details/:name" element={<Project />} />
                <Route path="/" element={<ProjectList />} />
            </Routes>
        </>
    );
};
