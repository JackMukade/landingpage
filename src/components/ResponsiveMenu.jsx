import styled from "styled-components";

const ResponsiveMenuContainer = styled.nav`
    position: fixed;
    bottom: 0px;
    right: 0px;
    left: 0px;
    background-color: white;
    z-index: 200;
    height: calc(100vh - 46px);
    width: 100vw;
    padding: 28px;
    flex-direction: column;
    display: ${ props => props.display };

    @media (min-width: 992px) { display: none; }

`;

const ResponsiveMenu = styled.ul`
    display:flex;
    flex-direction: column;
    padding: 16px;
`;

const ItemMenu = styled.li`
    font-size: 20px;
    color: #464646;
    padding: 8px 0;
`;

const ItemSubMenu = styled(ItemMenu)`
    display: flex;
    justify-content: end;
`;

function ResponsiveMenuComponent({ show = false }) {

    const display = (show) ? 'flex' : 'none';

    return (
        <ResponsiveMenuContainer display={display}>

            <ResponsiveMenu>
                <ItemMenu >Estudio</ItemMenu>
                <ItemMenu >Arquitectura</ItemMenu>
                <ItemMenu >Diseño</ItemMenu>
                <ItemMenu >Branding</ItemMenu>
                <ItemMenu >La fabricación del interior</ItemMenu>
                <ItemMenu >Prensa</ItemMenu>
                <ItemMenu >Contacto</ItemMenu>
            </ResponsiveMenu>
            <ResponsiveMenu>
                <ItemSubMenu >Newsletter</ItemSubMenu>
                <ItemSubMenu >Facebook</ItemSubMenu>
                <ItemSubMenu >Twitter</ItemSubMenu>
                <ItemSubMenu >Instagram</ItemSubMenu>
                <ItemSubMenu >Vimeo</ItemSubMenu>
                <ItemSubMenu >Pinterest</ItemSubMenu>
            </ResponsiveMenu>

        </ResponsiveMenuContainer>

    )

}

export default ResponsiveMenuComponent;