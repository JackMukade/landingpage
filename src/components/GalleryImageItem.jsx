import styled   from "styled-components";

const GalleryItem = styled.div`
    height: 80vh;
    position: relative;
    cursor: pointer;
    overflow: hidden; 

    &:hover .screen { opacity: 0.7 }

    &:hover .screen .titleContainer {
        transform: translateY(0);
    }

`;

const ImageItem = styled.img`
   height: 100%;
   width: 100%;
   position:absolute;
   z-index: 5;
`;

const BlackItem = styled.div`
   height: 100%;
   width: 100%;
   position:absolute;
   z-index: 10;
   opacity: 0;
   background-color:black;
   display: flex;
   flex-direction: column-reverse;
   transition: all 0.3s ease-out;
`;

const TitlesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 8px;
    transition: transform 1s ease-out;
    transform: translateY(100%);
`
const Title = styled.h2`
    font-size: 28px;
    color: white;
`;

const SubTitle = styled.h3`
    font-size: 21px;
    color:white;
`;

function GalleryImageItemComponent({ image }) {

    return (
        <GalleryItem >
            <ImageItem src={image}/>
            <BlackItem className="screen">
                <TitlesContainer className="titleContainer">
                    <Title>Casa mares</Title>
                    <SubTitle>un ejemplo pequeño</SubTitle>
                </TitlesContainer>
            </BlackItem>
        </GalleryItem>
    )

}

export default GalleryImageItemComponent;