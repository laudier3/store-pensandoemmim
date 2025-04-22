import React from 'react'
import "./footer2.css"

/**
* @author
* @function Footer2
**/

export const Footer2 = () => {
  return(
    <div>
        <footer class="footer">
        <div class="footer-container">
            <div class="footer-section contato">
            <h4>Contato</h4>
            <p>Email: atendimento@sualoja.com</p>
            <p>WhatsApp: (11) 91234-5678</p>
            </div>

            <div class="footer-section politicas">
            <h4>Políticas</h4>
            <a href="/politica-de-privacidade.html">Política de Privacidade</a>
            <br/>
            <a href="/politica-de-devolucao.html">Política de Devolução</a>
            </div>

            <div class="footer-section pagamento">
            <h4>Formas de Pagamento</h4>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mercado_Pago_logo.svg/512px-Mercado_Pago_logo.svg.png" alt="Mercado Pago" class="logo-pagamento"/>
            </div>

            <div class="footer-section seguranca">
            <h4>Segurança</h4>
            <img src="https://img.icons8.com/color/48/000000/secured-letter--v1.png" alt="Site Seguro" class="icone-seguranca"/>
            <p>Site 100% Seguro</p>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Sua Loja. Todos os direitos reservados.</p>
        </div>
        </footer>

    </div>
   )
  }
