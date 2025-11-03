import { css, Stack, styled } from '@mui/system';
import projects from '../../assets/projects/base.json';
import { useLocation, useNavigate } from 'react-router-dom';
import { log } from 'console';

const FullWidthContainer = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
    min-height: 100vh;
`;

const Image = styled('img')`
    width: 100%;
    :hover {
        box-shadow: 0 0 3px #515151;
    }
`;

const ProjectsHero = styled(Stack)(
    ({ theme: { breakpoints } }) => css`
        min-height: 100vh;
        flex-direction: column;
        margin-bottom: 30px;
        ${breakpoints.up('sm')} {
            width: 80%;
            flex-direction: row;
            justify-content: space-between;
            & > *:nth-child(3n + 2) {
                width: 30%;
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
            width: 35%;
        }
        cursor: pointer;
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
    const navigate = useNavigate();

    return (
        <FullWidthContainer>
            <ProjectsHero>
                {projects.projects.map(project => {
                    const imagePath = require(`../../assets/images/${project.name}/main.png`);
                    return (
                        <ProjectContainer
                            key={project.name}
                            px={{ xs: 2, sm: 4 }}
                            pb={{ xs: 3 }}
                            onClick={() => navigate(`details/${project.name}`)}
                        >
                            <Image alt={project.name} src={imagePath} />
                            <ProjectName>{project.name}</ProjectName>
                        </ProjectContainer>
                    );
                })}
            </ProjectsHero>
        </FullWidthContainer>
    );
};
