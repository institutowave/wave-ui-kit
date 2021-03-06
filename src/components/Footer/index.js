import React from 'react'
import {
  // FaFacebookF,
  // FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaPhone,
} from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { Container, Content } from './styles'

export default function Footer({ onAssociateClick, hidenAssociateForm }) {
  return (
    <Container>
      <Content>
        <div className='contact-wrapper'>
          <a href='https://institutowave.org'>
            <img src='/images/contrast-logo.png' alt='Instituto Wave' />
          </a>

          <div className='contact'>
            <h4>Contato</h4>

            <ul>
              <li>
                <a href='tel:+5534998889060'>
                  +55 (34) 99888-9060 <FaPhone />
                </a>
              </li>

              <li>
                <a href='mailto:institutowave@gmail.com'>
                  institutowave@gmail.com <MdMail />
                </a>
              </li>
            </ul>
          </div>

          <ul className='address'>
            <li>Av. Paulo Roberto Cunha Santos, 505</li>

            <li>Marta Helena - Uberlândia MG</li>

            <li>CEP: 38402-234</li>
          </ul>

          {!hidenAssociateForm && (
            <div className='follow-that-wave'>
              <h4>Siga essa onda</h4>

              <button onClick={() => onAssociateClick()}>Associe-se</button>
            </div>
          )}
        </div>
      </Content>

      <nav>
        <ul>
          <li>
            <a
              href='https://wave-file-bucket.s3-sa-east-1.amazonaws.com/politica-privacidade.pdf'
              target='_blank'
              rel='noreferrer'
            >
              Políticas de privacidade
            </a>
          </li>

          <li>
            <a
              href='https://wave-file-bucket.s3-sa-east-1.amazonaws.com/codigo-conduta.pdf'
              target='_blank'
              rel='noreferrer'
            >
              Código de conduta
            </a>
          </li>

          <li>
            <a
              href='https://ef49b24f-0d9e-42eb-b434-e4c150ce702c.filesusr.com/ugd/4ba8a7_32cf7c6af5cb42529097627fcfc5034a.pdf'
              target='_blank'
              rel='noreferrer'
            >
              Estatuto
            </a>
          </li>

          <li>
            Nossas redes sociais
            <ol>
              {/* <li>
                <a href='' target='_blank' rel='noreferrer'>
                  <FaFacebookF />
                </a>
              </li> */}

              <li>
                <a
                  href='https://www.youtube.com/channel/UCIt4gUYXmFMsj6mGUJ1Bi2A'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaYoutube />
                </a>
              </li>

              <li>
                <a
                  href='https://www.instagram.com/institutowave/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaInstagram />
                </a>
              </li>

              {/* <li>
                <a href='' target='_blank'>
                  <FaWhatsapp />
                </a>
              </li> */}
            </ol>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
