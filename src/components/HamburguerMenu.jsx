import styled from "styled-components";

const HamburguerMenu = styled.header`
    display: flex;
    flex-direction: column;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
`;

const Bar = styled.div`
    height: 5px;
    background: black;
    border-radius: 5px;
    margin: 3px 0;
    transform-origin: left;
    transition: all 0.5s;    
`;

const TopBar = styled(Bar)`

    .hamburguerMenu:hover &{
        transform: rotate(45deg);
    }

`;

const MiddleBar = styled(Bar)`

    .hamburguerMenu:hover &{
        transform:translateX(1rem);
        opacity: 0;
    }

`;

const DownBar = styled(Bar)`

    .hamburguerMenu:hover &{
        transform: rotate(-45deg);
    }

`;

function HamburguerMenuComponent() {

    return (
        <HamburguerMenu className="hamburguerMenu">
            <TopBar/>
            <MiddleBar/>
            <DownBar/>
        </HamburguerMenu>
    )

}

export default HamburguerMenuComponent;