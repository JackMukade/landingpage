import styled   from "styled-components";

import GalleryImageItemComponent  from "./GalleryImageItem";

import imageOne   from '../assets/image1.jpg';
import imageTwo   from '../assets/image2.jpg';
import imageThree from '../assets/image3.jpg';
import imageFour  from '../assets/image4.jpg';
import imageFive  from '../assets/image5.jpg';
import imageSix   from '../assets/image6.jpg';
import imageSeven from '../assets/image7.jpg';                    

const GallerySection = styled.section`
    grid-column: 1 / -1; 
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    
    @media (min-width: 992px) { grid-template-columns: repeat(2, 1fr); }
    

`;                    

function GallerySectionComponent() {

    return (
        <GallerySection>
            <GalleryImageItemComponent image={imageOne}/>
            <GalleryImageItemComponent image={imageTwo}/>
            <GalleryImageItemComponent image={imageThree}/>
            <GalleryImageItemComponent image={imageFour}/>
            <GalleryImageItemComponent image={imageFive}/>
            <GalleryImageItemComponent image={imageSix}/>
            <GalleryImageItemComponent image={imageSeven}/>
        </GallerySection>
    )

}

export default GallerySectionComponent;