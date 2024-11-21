import "../styles/footer.css";

import Logo from "../assets/logo.jpg";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa"; // Importando os ícones


const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <img src={Logo} alt="Logo DonaFrost" width={180} height={80} />
                    <div className="footer-socials">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                    </div>

                </div>
                <div className="footer-column">
                    <h4>Empresa</h4>
                    <ul>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Faça parte do time</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Funcionalidades</h4>
                    <ul>
                        <li><a href="#">Marketing</a></li>
                        <li><a href="#">Análise de dados</a></li>
                        <li><a href="#">Boot discord</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Recursos</h4>
                    <ul>
                        <li><a href="#">iOS & Android</a></li>
                        <li><a href="#">Teste a Demo</a></li>
                        <li><a href="#">Clientes</a></li>
                        <li><a href="#">API</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                Feito com amor na aula de Programação Web 💙©2024 AktieTech - Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;
