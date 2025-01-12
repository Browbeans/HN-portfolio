import { css, Stack, styled } from '@mui/system';
import projects from '../../assets/projects/base.json';

const FullWidthContainer = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
    min-height: 100vh;
`;

const Image = styled('img')`
    width: 100%;
`;

const ProjectsHero = styled(Stack)(
    ({ theme: { breakpoints } }) => css`
        min-height: 100vh;
        flex-direction: column;
        ${breakpoints.up('sm')} {
            width: 80%;
            flex-direction: row;
            justify-content: space-between;
            & > *:nth-child(3n + 2) {
                width: 28%;
            }
            flex-wrap: wrap;
        }
    `,
);

const ProjectContainer = styled(Stack)(
    ({ theme: { breakpoints } }) => css`
        width: 100%;
        box-sizing: border-box;
        ${breakpoints.up('sm')} {
            width: 36%;
        }
        :hover {
            > h3 {
                opacity: 1;
                transition: all 1s;
            }
        }
    `,
);

const ProjectName = styled('h3')(
    ({ theme: { breakpoints } }) => css`
        margin: 0;
        font-weight: 200;
        margin-top: 10px;
        text-align: start;
        opacity: 1;
        ${breakpoints.up('sm')} {
            opacity: 0;
        }
    `,
);

export const ProjectList = () => {
    return (
        <FullWidthContainer>
            <ProjectsHero>
                {projects.projects.map(project => {
                    const imagePath = require(`../../assets/images/${project.name}/main.jpg`);
                    return (
                        <ProjectContainer key={project.name} px={{ xs: 2, sm: 4 }} pb={{ xs: 3 }}>
                            <Image alt={project.name} src={imagePath} />
                            <ProjectName>{project.name}</ProjectName>
                        </ProjectContainer>
                    );
                })}
            </ProjectsHero>
        </FullWidthContainer>
    );
};
