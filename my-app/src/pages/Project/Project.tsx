import { css, Stack, styled } from '@mui/system';
import { useParams } from 'react-router-dom';

const PageWrapper = styled(Stack)(
    ({ theme: { spacing } }) => css`
        min-height: 100vh;
        width: 100%;
        align-items: center;
        margin-top: ${spacing(10)};
    `,
);

const ContentContainer = styled(Stack)(
    ({ theme: { breakpoints } }) => css`
        width: 95%;
        ${breakpoints.up('sm')} {
            width: 80%;
        }
    `,
);

const Image = styled('img')(
    ({ theme: { breakpoints } }) => css`
        width: 100%;
        object-fit: cover;
        ${breakpoints.up('sm')} {
            height: calc(100vh - 200px);
        }
    `,
);

const ProjectName = styled('h3')(
    ({ theme }) => css`
        margin: 0;
        font-weight: 200;
        margin-top: 10px;
        text-align: start;
    `,
);

export const Project = () => {
    const { name } = useParams();
    const mainImage = require(`../../assets/images/${name}/main.jpg`);

    return (
        <PageWrapper>
            <ContentContainer>
                <Stack mb={10}>
                    <Image alt={name} src={mainImage} />
                    <ProjectName>{name}</ProjectName>
                </Stack>
                <Stack mb={10}>
                    <Image alt={name} src={mainImage} />
                    <ProjectName>{name}</ProjectName>
                </Stack>
            </ContentContainer>
        </PageWrapper>
    );
};
