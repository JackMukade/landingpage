import { useState, useEffect } from "react";
import styled                  from "styled-components";
import HamburguerMenu          from "./HamburguerMenu";
import ResponsiveMenu          from "./ResponsiveMenu";
import MenuMainContainerComponent       from "./MenuMainContainer";

const HeaderMenu = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    z-index: 200;
    display: flex;
    justify-content: space-between;
    height: 52px;
    padding:16px;
    transition: transform 0.3s ease-out;
    transform: translateY( ${ props => (props.direction == 'up') ? '0' : '-100%' } );
`;

const Logo = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color:white;
`;

const ContainerHamburguer = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;

    @media (min-width: 992px) { display: none; }

` 

function HeaderMenuComponent() {

    const [showResponsiveMenu, setShowResponsiveMenu]  = useState(false);
   
    const onClickResponsiveMenu = () => { setShowResponsiveMenu( !showResponsiveMenu ); }

    const [scrollDirection, setScrollDirection] = useState('up');
    const [prevScrollPos, setPrevScrollPos]     = useState(window.scrollY);
  
    useEffect(() => {
        
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
  
            if (prevScrollPos > currentScrollPos) {
                setScrollDirection('up');
            } else {
                setScrollDirection('down');
            }
  
            setPrevScrollPos(currentScrollPos);
        };
  
        window.addEventListener('scroll', handleScroll);
  
        return () => { window.removeEventListener('scroll', handleScroll); };

    }, [prevScrollPos]);

    return (
        <HeaderMenu direction={scrollDirection}>
            <Logo>REE</Logo>
            <ContainerHamburguer onClick={ () => { onClickResponsiveMenu() }}>
                <HamburguerMenu/>
            </ContainerHamburguer>
            <MenuMainContainerComponent/>
            <ResponsiveMenu show={showResponsiveMenu}/>
        </HeaderMenu>
    )

}

export default HeaderMenuComponent;