import styled from "styled-components";

const MenuMainContainer = styled.nav`
    display: none;

    @media (min-width: 992px) { display: flex; }
`;

const ResponsiveMainMenu = styled.ul`
    display:flex;
    gap: 16px;
`;

const ItemMenu = styled.li`
    font-size: 18px;
    color: #b2b2b2;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;

    &:hover{ color: white; }
    
`;


function MenuMainContainerComponent() {

    return (

        <MenuMainContainer>
            <ResponsiveMainMenu>
                <ItemMenu>Estudio</ItemMenu>
                <ItemMenu>Arquitectura</ItemMenu>
                <ItemMenu>Diseño</ItemMenu>
                <ItemMenu>Branding</ItemMenu>
                <ItemMenu>La fabricación del interior</ItemMenu>
                <ItemMenu>Prensa</ItemMenu>
                <ItemMenu>Contacto</ItemMenu>
            </ResponsiveMainMenu>
        </MenuMainContainer>

    )

}

export default MenuMainContainerComponent;