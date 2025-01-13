import { css, Stack, styled } from '@mui/system';
import { useEffect } from 'react';
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
            height: calc(100vh - 350px);
        }
    `,
);

const Image = styled('img')(
    ({ theme: { breakpoints } }) => css`
        object-fit: cover;
        width: 45%;
        ${breakpoints.up('sm')} {
            height: 300px;
        }
    `,
);

const ProjectName = styled('h3')(
    ({ theme }) => css`
        margin: 0;
        font-weight: 200;
        text-align: start;
    `,
);

const Description = styled('p')`
    margin: 0;
    font-size: 12px;
    text-align: start;
`;

const ListText = styled('p')`
    width: 50%;
    margin: 0;
    font-size: 12px;
    text-align: start;
`;

export const Project = () => {
    const { name } = useParams();
    const mainImage = require(`../../assets/images/${name}/main.jpg`);
    const showcase1 = require(`../../assets/images/${name}/showcase1.jpg`);
    const currentProject = ProjectJson.projects.find(project => project.name === name);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageWrapper>
            <ContentContainer mt={15}>
                <MainImage alt={name} src={mainImage} />
                <Stack
                    mt={1.5}
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
                    <Stack width={{ xs: '100%', sm: '60%' }} mt={{ xs: 2, sm: 0 }}>
                        <Description>{currentProject?.description}</Description>
                    </Stack>
                </Stack>
                <Stack mb={5} mt={10} width="100%">
                    <Image src={showcase1} alt="Second image" />
                </Stack>
            </ContentContainer>
        </PageWrapper>
    );
};
