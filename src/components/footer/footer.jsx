import React from "react";
import "./footer2.css"
import {
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  RedditShareButton,
} from "react-share";
import { SiGooglemaps } from "react-icons/si";

export default function Footer() {

  return (
    <>
      <footer className="footer">
        {/*<Link to="/">
          <h2>PensandoEmMim</h2>
        </Link>*/}
        <div className="footer-container">
          <div className="footer-section contato">
          <h4>Contato</h4>
          <p>Email: laudiersantanamei@gmail.com</p>
          <p>WhatsApp: (75) 998239680</p>
          </div>

          <div className="footer-section politicas">
          <h4>Políticas</h4>
          <a href="/politica">Política de Privacidade</a>
          <a href="/politicatrocadevolucao">Política de Devolução</a>
          </div>

          <div className="footer-section pagamento">
          <h4>Formas de Pagamento</h4>
          <img src="https://http2.mlstatic.com/D_NQ_NP_886378-MLB43190337161_082020-O.webp" alt="Mercado Pago" className="logo-pagamento"/>
          </div>

          <div className="footer-section seguranca">
          <h4>Segurança</h4>
          {/*<img src="https://img.icons8.com/color/48/000000/secured-letter--v1.png" alt="Site Seguro" className="icone-seguranca"/>*/}
          <div className="mg">
            <FacebookShareButton url="https://pensandoemmim.com/novidades">
              <FacebookIcon className="social" />
            </FacebookShareButton>
            <WhatsappShareButton url="https://pensandoemmim.com/novidades">
              <WhatsappIcon className="social" />
            </WhatsappShareButton>
            <TelegramShareButton url="https://pensandoemmim.com/novidades">
              <TelegramIcon className="social" />
            </TelegramShareButton>
            <RedditShareButton url="https://pensandoemmim.com/novidades">
              <RedditIcon className="social" />
            </RedditShareButton>
            <TumblrShareButton url="https://pensandoemmim.com/novidades">
              <TumblrIcon className="social" />
            </TumblrShareButton>
          </div>
          <br />
          <p>Site 100% Seguro</p>
          <p>CPF: 034.322.725-88</p>
          </div>
        </div>

        <div className="footer-bottom">
            <p>&copy; 2025 Sua Loja. Todos os direitos reservados.</p>
            <p>
              <SiGooglemaps style={{ marginRight: 5, marginTop: "-5px" }} />
              <b>Endereço: </b> Rua Marquez de Olinda | Bairoor Jardim Munhoz |
              Guarulhos | Sp
            </p>
        </div>
        </footer>
    </>
  );
}
