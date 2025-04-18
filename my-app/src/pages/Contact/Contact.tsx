import { Box, css, Stack, styled } from '@mui/system';
import { LinkedInIcon } from '../../assets/icons/linkedin';
import Henric from '../../assets/images/Contact/henric.jpg';
import Noelle from '../../assets/images/Contact/noelle.jpg';

const PageWrapper = styled(Stack)(
    ({ theme: { breakpoints, spacing } }) => css`
        box-sizing: border-box;
        min-height: 100vh;
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding-bottom: ${spacing(5)};
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
        ${breakpoints.up('md')} {
            height: calc(100vh - 600px);
        }
    `,
);

const Paragraph = styled('p')`
    text-align: start;
    margin: 0;
    font-size: 1.3rem;
`;

const Title = styled('h1')`
    text-align: start;
    margin-bottom: 1rem;
`;

export const Contact = () => {
    return (
        <PageWrapper pt={10} px={{ md: 10, xs: 2 }}>
            <Stack
                flexDirection={{ md: 'row', xs: 'column' }}
                width={{ md: '40%', xs: '100%' }}
                justifyContent="space-between"
            >
                <Box textAlign="start">
                    <MainImage src={Henric} alt="henric" />
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box>
                            <NameText>Henric</NameText>

                            <Box mb={1}>
                                <LinkText
                                    target="_blank"
                                    href="https://issuu.com/henricadler/docs/portfolio_kort_version_"
                                >
                                    Portfolio
                                </LinkText>
                            </Box>
                            <LinkText href="mailto:henricader@gmail.com">henricadler@gmail.com</LinkText>
                        </Box>
                        <div style={{ cursor: 'pointer' }}>
                            <LinkedInIcon
                                onClick={() =>
                                    window.open('https://www.linkedin.com/in/henric-adler-07380b159/', '_blank')
                                }
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
                                onClick={() =>
                                    window.open('https://www.linkedin.com/in/noelle-pihl-79ab82158/', '_blank')
                                }
                            />
                        </div>
                    </Stack>
                </Box>
            </Stack>
            <Box width={{ md: '40%', xs: '100%' }} mt={2}>
                <Title>Om oss</Title>
                <Paragraph>
                    Vi är ett arkitektkontor vars målsättning är att bygga så sällan som möjligt, detta gör vi genom att
                    rita och bygga så bra som möjligt. Inte bara för oss, utan för miljön och framtida generationer. Det
                    vi ritar förstår vi, och vår ambition är att alla projekt ska vara förankrade i konceptet av en så
                    lång livscykel som möjligt, med andra ord inte bara vara estetiskt tilltalande utan också praktiska
                    och hållbara. Vi är ett prestigelöst kontor som värdesätter dialogen och säkerställande av kvalitet
                    gentemot våra kunder. Tillsammans, från första skiss, till sista revideringen så sjösätter vi er
                    vision med vår expertis.
                </Paragraph>
                <Box mt={5}>
                    <Paragraph>
                        Önskar du rådgivning eller hjälp med attefallshus, trädgård, inred ing, platsbyggd förvaring,
                        planritningar, byggnadsvård, bygglov. Kanske vill du restaurera, bygga ut eller helt nytt? Varmt
                        välkommen att kontakta oss för en första konsultation, vi hjälper dig gärna!
                    </Paragraph>
                </Box>
            </Box>
        </PageWrapper>
    );
};
