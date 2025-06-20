import Logo2 from "../../assets/logo2.png";
import Rectangle from "../../assets/Rectangle.png";
import Facebook from "../../assets/facebook.svg"
import "./Footer.css";
function Footer() {
  return (
    <>
      <section id="footer">
        <div id="info">
          <div id="sobre">
            <img id="logo" src={Logo2} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore.
            </p>
            <div id="redes">
              <a href="https://facebook.com/"></a>
              <a href="https://intagram.com/"></a>
              <a href="https://x.com/"></a>
            </div>
          </div>
          <div id="links">
            <div>
              <p>Informação</p>
              <ul>
                <li>
                  <a href="">Sobre Drip Store</a>
                </li>
                <li>
                  <a href="">Segurança</a>
                </li>
                <li>
                  <a href="">Wishlist</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Trabalhe conosco</a>
                </li>
                <li>
                  <a href="">Meus Pedidos</a>
                </li>
              </ul>
            </div>
            <div>
              <p>Categorias</p>
              <ul>
                <li>
                  <a href="">Camisetas</a>
                </li>
                <li>
                  <a href="">Calças</a>
                </li>
                <li>
                  <a href="">Bonés</a>
                </li>
                <li>
                  <a href="">Headphones</a>
                </li>
                <li>
                  <a href="">Tênis</a>
                </li>
              </ul>
            </div>
          </div>
          <div id="contato">
            <p>Contato</p>
            <ul>
              <li>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</li>
              <li>(85) 3051-3411</li>
            </ul>
          </div>
        </div>

        <div>
          <div id="rights">
            <img src={Rectangle} alt="" />
            <p>@ 2022 Digital College</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
