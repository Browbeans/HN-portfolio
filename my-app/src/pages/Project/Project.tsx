import { Box, css, Stack, styled, useMediaQuery, useTheme } from '@mui/system';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectJson from '../../assets/projects/base.json';

const PageWrapper = styled(Stack)(
    ({ theme: { spacing } }) => css`
        box-sizing: border-box;
        min-height: 100vh;
        width: 100%;
        align-items: center;
    `,
);

const ImageWrapper = styled(Stack)(
    ({ theme: { breakpoints, spacing } }) => css`
        height: 100vh;
        box-sizing: border-box;
        width: 100%;
        align-items: center;
        justify-content: center;
        ${breakpoints.down('sm')} {
            height: 100%;
            margin-bottom: ${spacing(15)};
        }
    `,
);

const MainImage = styled('img')(
    ({ theme: { breakpoints } }) => css`
        object-fit: contain;
        width: 100%;
        cursor: pointer;
        ${breakpoints.up('sm')} {
            width: 100%;
            height: calc(100vh - 350px);
        }
    `,
);

const Image = styled('img')`
    width: 100%;
    height: 100%;
`;

const ImageContainer = styled('img')`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const Description = styled('p')`
    margin: 0;
    font-size: 1rem;
    text-align: start;
    line-height: 1.5;
`;

const ListText = styled('p')`
    width: 50%;
    margin: 0;
    font-size: 1rem;
    text-align: start;
`;

const ProjectTitle = styled('h1')(
    ({ theme: { breakpoints } }) => css`
        font-size: 6rem;
        font-weight: bold;
        margin: 0;
        ${breakpoints.down('sm')} {
            font-size: 2rem;
        }
    `,
);

export const Project = () => {
    const { name } = useParams();
    const imageRefs = useRef<HTMLDivElement[]>([]);
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    const mainImage = require(`../../assets/images/${name}/main.png`);

    const details1 = require(`../../assets/images/${name}/details1.png`);
    const details2 = require(`../../assets/images/${name}/details2.png`);
    const details3 = require(`../../assets/images/${name}/details3.png`);
    const details4 = require(`../../assets/images/${name}/details4.png`);

    const currentProject = ProjectJson.projects.find(project => project.name === name);

    const [currentImage, setCurrentImage] = useState({ image: mainImage, index: 0 });

    const scrollToImage = (index: number) => {
        const targetRef = imageRefs.current[index];
        if (targetRef) {
            targetRef.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!isDesktop) {
        return (
            <>
                <PageWrapper>
                    <Stack width="100%" my={10} px={2} boxSizing="border-box" alignItems="flex-start">
                        <MainImage
                            src={currentImage.image}
                            onClick={() => {
                                scrollToImage(currentImage.index);
                            }}
                        />
                        <Box mt={5}>
                            <ProjectTitle>{name}</ProjectTitle>
                        </Box>
                        <Box mt={5}>
                            <Description>{currentProject?.description}</Description>
                        </Box>
                    </Stack>
                </PageWrapper>
                <ImageWrapper ref={(el: HTMLDivElement) => (imageRefs.current[0] = el)}>
                    <Stack width="90%" height="100%" pt={10}>
                        <ImageContainer alt="details1" src={mainImage} />
                    </Stack>
                </ImageWrapper>
                <ImageWrapper ref={(el: HTMLDivElement) => (imageRefs.current[1] = el)}>
                    <Stack width="80%" height="80%">
                        <ImageContainer alt="details1" src={details1} />
                    </Stack>
                </ImageWrapper>
                <ImageWrapper ref={(el: HTMLDivElement) => (imageRefs.current[2] = el)}>
                    <Stack width="80%" height="80%">
                        <ImageContainer alt="details1" src={details2} />
                    </Stack>
                </ImageWrapper>
                <ImageWrapper ref={(el: HTMLDivElement) => (imageRefs.current[3] = el)}>
                    <Stack width="80%" height="80%">
                        <ImageContainer alt="details1" src={details3} />
                    </Stack>
                </ImageWrapper>
                <ImageWrapper ref={(el: HTMLDivElement) => (imageRefs.current[4] = el)}>
                    <Stack width="80%" height="80%">
                        <ImageContainer alt="details1" src={details4} />
                    </Stack>
                </ImageWrapper>
            </>
        );
    }

    return (
        <>
            <PageWrapper>
                <Stack width="80%" height="100vh" direction="row" alignItems="center">
                    <Stack width="45%">
                        <MainImage
                            src={currentImage.image}
                            onClick={() => {
                                // setModalState({ isOpen: true, modalImage: currentMainImage });
                                scrollToImage(currentImage.index);
                            }}
                        />
                        <Stack width="100%" direction="row" mt={2}>
                            <Box mr={2} height="80px" onClick={() => setCurrentImage({ image: mainImage, index: 0 })}>
                                <Image alt="details1" src={mainImage} />
                            </Box>
                            <Box mr={2} height="80px" onClick={() => setCurrentImage({ image: details1, index: 1 })}>
                                <Image alt="details1" src={details1} />
                            </Box>
                            <Box mr={2} height="80px" onClick={() => setCurrentImage({ image: details2, index: 2 })}>
                                <Image alt="details2" src={details2} />
                            </Box>
                            <Box mr={2} height="80px" onClick={() => setCurrentImage({ image: details3, index: 3 })}>
                                <Image alt="details3" src={details3} />
                            </Box>
                            <Box mr={2} height="80px" onClick={() => setCurrentImage({ image: details4, index: 4 })}>
                                <Image alt="details4" src={details4} />
                            </Box>
                        </Stack>
                    </Stack>
                    <Box
                        height="calc(100vh - 256px)"
                        ml={5}
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        width="55%"
                    >
                        <Stack width="100%" alignItems="flex-start">
                            <ProjectTitle>{name}</ProjectTitle>
                            <Box ml={3} width="40%">
                                <Stack mt={2} width="100%" direction="row" justifyContent="space-between">
                                    <Description>Status</Description>
                                    <ListText>{currentProject?.status}</ListText>
                                </Stack>
                                <Stack mt={1} width="100%" direction="row" justifyContent="space-between">
                                    <Description>Plats</Description>
                                    <ListText>{`${currentProject?.street}, ${currentProject?.city}`}</ListText>
                                </Stack>
                                <Stack mt={1} width="100%" direction="row" justifyContent="space-between">
                                    <Description>År</Description>
                                    <ListText>{currentProject?.year}</ListText>
                                </Stack>
                            </Box>
                        </Stack>
                        <Box mt={6} ml={3}>
                            <Description>{currentProject?.description}</Description>
                        </Box>
                    </Box>
                </Stack>
                <ImageWrapper ref={(el: HTMLDivElement) => (imageRefs.current[0] = el)}>
                    <Stack width="80%" height="80%">
                        <ImageContainer alt="details1" src={mainImage} />
                    </Stack>
                </ImageWrapper>
                <ImageWrapper ref={(el: HTMLDivElement) => (imageRefs.current[1] = el)}>
                    <Stack width="80%" height="80%">
                        <ImageContainer alt="details1" src={details1} />
                    </Stack>
                </ImageWrapper>
                <ImageWrapper ref={(el: HTMLDivElement) => (imageRefs.current[2] = el)}>
                    <Stack width="80%" height="80%">
                        <ImageContainer alt="details1" src={details2} />
                    </Stack>
                </ImageWrapper>
                <ImageWrapper ref={(el: HTMLDivElement) => (imageRefs.current[3] = el)}>
                    <Stack width="80%" height="80%">
                        <ImageContainer alt="details1" src={details3} />
                    </Stack>
                </ImageWrapper>
                <ImageWrapper ref={(el: HTMLDivElement) => (imageRefs.current[4] = el)}>
                    <Stack width="80%" height="80%">
                        <ImageContainer alt="details1" src={details4} />
                    </Stack>
                </ImageWrapper>
            </PageWrapper>
        </>
    );
};
