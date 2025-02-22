import { Box, css, Stack, styled } from '@mui/system';
import { LinkedInIcon } from '../../assets/icons/linkedin';
import Henric from '../../assets/images/Contact/henric.jpeg';
import Noelle from '../../assets/images/Contact/noelle.jpeg';

const PageWrapper = styled(Stack)(
    ({ theme: { breakpoints } }) => css`
        box-sizing: border-box;
        min-height: 100vh;
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: row;
        ${breakpoints.down('sm')} {
            flex-direction: column;
        }
    `,
);

const LinkText = styled('a')`
    all: unset;
    text-decoration: underline;
    color: #808080;
    cursor: pointer;
    :hover {
        color: #606060;
    }
`;

const NameText = styled('h2')`
    margin: 0;
    margin-bottom: 8px;
`;

const MainImage = styled('img')(
    ({ theme: { breakpoints } }) => css`
        object-fit: contain;
        width: 100%;
        ${breakpoints.up('sm')} {
            height: calc(100vh - 350px);
        }
    `,
);

export const Contact = () => {
    return (
        <PageWrapper pt={10}>
            <Box pr={{ xs: 0, sm: 20 }} textAlign="start">
                <MainImage src={Henric} alt="henric" />
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box>
                        <NameText>Henric</NameText>

                        <Box mb={1}>
                            <LinkText target="_blank" href="https://issuu.com/henricadler/docs/portfolio_kort_version_">
                                Portfolio
                            </LinkText>
                        </Box>
                        <LinkText href="mailto:henricader@gmail.com">henricadler@gmail.com</LinkText>
                    </Box>
                    <div style={{ cursor: 'pointer' }}>
                        <LinkedInIcon
                            onClick={() => window.open('https://www.linkedin.com/in/henric-adler-07380b159/', '_blank')}
                        />
                    </div>
                </Stack>
            </Box>
            <Box textAlign="start">
                <MainImage src={Noelle} alt="noelle" />
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box>
                        <NameText>Noelle</NameText>
                        <Box mb={1}>
                            <LinkText target="_blank" href="https://issuu.com/noellepihl/docs/portfolio">
                                Portfolio
                            </LinkText>
                        </Box>
                        <LinkText href="mailto:pihl.noelle@gmail.com">pihl.noelle@gmail.com</LinkText>
                    </Box>
                    <div style={{ cursor: 'pointer' }}>
                        <LinkedInIcon
                            onClick={() => window.open('https://www.linkedin.com/in/noelle-pihl-79ab82158/', '_blank')}
                        />
                    </div>
                </Stack>
            </Box>
        </PageWrapper>
    );
};
