import styled   from "styled-components";
import '../App.css';

const Footer = styled.footer`
    grid-column: 1 / -1; 
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap:16px;
    border-top: 1px solid black;
    margin-top: 8px;
`;

function FooterComponent() {

    return (
        <Footer >
            <div className="iso-container">
                <p className="iso-text">Empresa certificada con 4 normas ISO</p>
                <p className="iso-text">ISO 9001, ISO 14001, ISO 45001, ISO 50001</p>
            </div>
            <ul className="social-container">
                <li className="social-element">Facebook</li>
                <li className="social-element">Twitter</li>
                <li className="social-element">Instagram</li>
                <li className="social-element">Vimeo</li>
                <li className="social-element">Pinterest</li>
            </ul>
            <p className="iso-text">info@gmail.com</p>
            <p className="iso-text">© Copyright 2023. Ramón Esteve Estudio.
                Todos los derechos reservados.
            </p>
            <p className="iso-text">
                Politica de privacidad. Politica Integrada Politica cookies
            </p>
        </Footer>
    )

}

export default FooterComponent;