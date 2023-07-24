import styled from "styled-components";

const Videosection = styled.section`
    background-color: blue;
    height: 100vh;
    grid-column: 1 / -1; 
    overflow: hidden;
    position: relative;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    scroll-margin-top: 18px;
`;

const VideoForSection = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const TitlesContainer = styled.div`
    position: absolute;
    bottom: 24px;
    left: 8px;
    background-color: black;
    opacity: 0.8;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap:12px;
    border-radius: 3px;
    transition: transform 0.3s ease-out;
    transform: translateY( ${ props => (props.direction == 'up') ? '0' : '200%' } );
`

const Title = styled.h2`
    font-size: 28px;
    color: white;
`;

const SubTitle = styled.h3`
    font-size: 21px;
    color:white;
`;

function VideoSectionComponent({video, direction}) {

    return (
        <Videosection>
            <VideoForSection autoPlay loop muted>
                <source src={video} type="video/mp4"/>
                Tu navegador no admite el elemento de video.
            </VideoForSection>
            <TitlesContainer direction={direction}>
                <Title>Un titulo del proyecto</Title>
                <SubTitle>Una descripción pequeña</SubTitle>
            </TitlesContainer>
        </Videosection>
    )

}

export default VideoSectionComponent;