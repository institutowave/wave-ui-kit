import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
  FaLink,
  FaPhone,
} from 'react-icons/fa';

import { MdHome, MdMail } from 'react-icons/md';

import { Link } from 'components';

import { Container, Content } from './styles';

export default function Footer() {

  return (
    <Container>
      <Content>
        <ul className="footer-texts">
          <li>
            <h4>Lorem Ipsum</h4>

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </li>

          <li>
            <h4>Lorem Ipsum</h4>

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.</p>
          </li>

          <li>
            <h4>Lorem Ipsum</h4>

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
          </li>
        </ul>

        <div className="contact-wrapper">
          <Link to="/">
            <img
              src="/images/contrast-logo.png"
              alt="Instituto Wave"
            />
          </Link>

          <div className="contact">
            <h4>Contato</h4>

            <ul>
              <li><a href="tel:+5534998889060">+55 (34) 99888-9060 <FaPhone/></a></li>

              <li><a href="mailto:contato@institutowave.org">contato@institutowave.org <MdMail/></a></li>
            </ul>
          </div>

          <ul className="address">
            <li>Av. Paulo Roberto Cunha Santos, 505 <MdHome/></li>

            <li>Marta Helena - Uberlândia MG</li>

            <li>CEP: 38402-234</li>
          </ul>

          <div className="follow-that-wave">
            <h4>Siga essa onda</h4>

            <button>Associe-se</button>
          </div>
        </div>
      </Content>

      <nav>
        <ul>
          <li>
            <Link to="1">Políticas de privacidade</Link>
          </li>

          <li>
            <Link to="1">Termos de uso</Link>
          </li>

          <li>
            <Link to="1">Código de conduta</Link>
          </li>

          <li>
            <a
              href="https://ef49b24f-0d9e-42eb-b434-e4c150ce702c.filesusr.com/ugd/4ba8a7_32cf7c6af5cb42529097627fcfc5034a.pdf"
              target="_blank"
            >Estatuto</a>
          </li>

          <li>
            Nossas redes sociais

            <ol>
              <li>
                <a
                  href="1"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </li>

              <li>
                <a
                  href="1"
                  target="_blank"
                >
                  <FaTwitter />
                </a>
              </li>

              <li>
                <a
                  href="1"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li>
                <a
                  href="1"
                  target="_blank"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ol>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
