import { useState, useEffect } from "react";
import styled from "styled-components";
import './App.css';
import heroVideo    from './assets/heroVideo.mp4';

import HeaderComponent         from "./components/Header";
import MainTitleCompontent     from "./components/MainTitle";
import VideoSectionComponent   from "./components/VideoSection";
import GallerySectionComponent from "./components/GallerySection";
import InfoSectionComponent    from "./components/InfoSection";
import FooterComponent         from "./components/Footer";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

function App() {

  const [scrollPos   , setScrollPos]    = useState(window.scrollY);
  const [videoOptions, setVideoOptions] = useState(["up", "down", "down"]);

  useEffect(() => {
      
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setScrollPos(currentScrollPos);
        
        const videos = videoOptions;

        if(currentScrollPos == 0){

          videos[0] = "up";
          videos[1] = "down";
          videos[2] = "down";

        } else if (currentScrollPos > 595 && currentScrollPos < 1300) {

          videos[1] = "up";
          videos[0] = "down";
          videos[2] = "down";

        } else if (currentScrollPos > 1299 && currentScrollPos < 1900) {

          videos[0] = "down";
          videos[1] = "down";
          videos[2] = "up";

        }
        
        setVideoOptions([...videos]);


      };

      window.addEventListener('scroll', handleScroll);

      return () => { window.removeEventListener('scroll', handleScroll); };

  }, [scrollPos]);


  return (
    <Wrapper>
      <HeaderComponent/>
      <VideoSectionComponent video={heroVideo} direction={videoOptions[0]}/>
      <VideoSectionComponent video={heroVideo} direction={videoOptions[1]}/>
      <VideoSectionComponent video={heroVideo} direction={videoOptions[2]}/>
      <InfoSectionComponent />
      <MainTitleCompontent/>
      <GallerySectionComponent />
      <FooterComponent />
    </Wrapper>
  )

}

export default App;

//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

