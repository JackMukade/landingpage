import styled from "styled-components";

const InfoSection = styled.section`
    grid-column: 1 / -1; 
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 8px;

    @media (min-width: 992px) { grid-template-columns: repeat(2, 1fr); }
    
`;

const ContainerTitles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 38px;
    padding: 16px;
    justify-content: center;  
`

const ContainerImages = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
`

const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap:4px;
    cursor: pointer;

    & * { color: #4c4c4c; }

    &:hover * { color: black; }

`

const Title = styled.p`
    font-size:24px;
    font-weight: bold;

    @media (min-width: 992px) {  font-size:32px; }

`

const SubTitle = styled.p`
    font-size:18px;

    @media (min-width: 992px) {  font-size:28px; }
`

const Description = styled.p`
    font-size:24px;

    @media (min-width: 992px) {  font-size:32px; }
`

function InfoSectionComponent() {

    return (
        <InfoSection>
            <ContainerTitles>
                <ContainerTitle>
                    <Title>La fabricación del interior</Title>
                    <SubTitle>La elegancia de la tecnología</SubTitle>
                </ContainerTitle>
                <ContainerTitle>
                    <Title>Premios</Title>
                    <SubTitle>Mención en Honor a los premios algo</SubTitle>
                </ContainerTitle>
                <ContainerTitle>
                    <Title>Noticias</Title>
                    <SubTitle>Esta es una noticia</SubTitle>
                </ContainerTitle>
            </ContainerTitles>
            <ContainerImages>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Description>
            </ContainerImages>
            
        </InfoSection>
    )

}

export default InfoSectionComponent;