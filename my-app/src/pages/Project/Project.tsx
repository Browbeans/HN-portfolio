import { Box, css, Stack, styled } from '@mui/system';
import { useEffect, useState } from 'react';
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

const ContentContainer = styled(Stack)(
    ({ theme: { breakpoints } }) => css`
        width: 95%;
        ${breakpoints.up('sm')} {
            width: 65%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `,
);

const MainImage = styled('img')(
    ({ theme: { breakpoints } }) => css`
        object-fit: cover;
        width: 100%;
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

const ProjectName = styled('h3')(
    ({ theme }) => css`
        margin: 0;
        font-weight: 200;
        text-align: start;
    `,
);

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

const ProjectTitle = styled('h1')`
    font-size: 6rem;
    font-weight: bold;
    margin: 0;
`;

export const Project = () => {
    const { name } = useParams();
    const mainImage = require(`../../assets/images/${name}/main.png`);

    const details1 = require(`../../assets/images/${name}/details1.png`);
    const details2 = require(`../../assets/images/${name}/details2.png`);
    const details3 = require(`../../assets/images/${name}/details3.png`);
    const details4 = require(`../../assets/images/${name}/details4.png`);

    const currentProject = ProjectJson.projects.find(project => project.name === name);

    const [currentMainImage, setCurrentMainImage] = useState(mainImage);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageWrapper>
            <Stack width="80%" height="100vh" direction="row" alignItems="center">
                <Stack width="45%">
                    <MainImage src={currentMainImage} />
                    <Stack width="100%" direction="row" mt={2}>
                        <Box mr={2} height="80px" width="80px" onClick={() => setCurrentMainImage(mainImage)}>
                            <Image alt="details1" src={mainImage} />
                        </Box>
                        <Box mr={2} height="80px" width="80px" onClick={() => setCurrentMainImage(details1)}>
                            <Image alt="details1" src={details1} />
                        </Box>
                        <Box mr={2} height="80px" width="80px" onClick={() => setCurrentMainImage(details2)}>
                            <Image alt="details2" src={details2} />
                        </Box>
                        <Box mr={2} height="80px" width="80px" onClick={() => setCurrentMainImage(details3)}>
                            <Image alt="details3" src={details3} />
                        </Box>
                        <Box mr={2} height="80px" width="80px" onClick={() => setCurrentMainImage(details4)}>
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
        </PageWrapper>
    );

    return (
        <PageWrapper>
            <ContentContainer mt={10}>
                <MainImage alt={name} src={mainImage} />
                <Stack
                    mt={3}
                    width={{ xs: '100%', sm: '90%' }}
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                >
                    <Stack width={{ xs: '100%', sm: '25%' }}>
                        <ProjectName>{name}</ProjectName>
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
                    </Stack>
                    <Stack width={{ xs: '100%', sm: '90%' }} mt={{ xs: 2, sm: 0 }}>
                        <Description>{currentProject?.description}</Description>
                    </Stack>
                </Stack>
                <Stack mb={5} mt={10} width="100%">
                    <Image src={mainImage} alt="Second image" />
                </Stack>
            </ContentContainer>
        </PageWrapper>
    );
};
