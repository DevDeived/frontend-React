import logo2 from "../../assets/logo2-.png";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <section id="footer">
        <div id="footerContent">
          <img src={logo2} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex aliquam
            nulla consequuntur distinctio quaerat ut tempora facere nemo
            deserunt ratione. Dignissimos aliquid corporis incidunt saepe.
          </p>
          <div id="content">
            <div>
              <a href=""><FaFacebook size={30} color="#1877F2" /></a>
            </div>
            <div>
              <a href=""><FaInstagram size={30} color="#E1306C" /></a>
            </div>
            <div>
              <a href=""><FaTwitter size={30} color="#1DA1F2" /></a>
            </div>
          </div>
        </div>
        <div id="footerInfor">
          <div>
            <h3>Informação</h3>
            <p>
              <a href="#">Sobre Drip Store</a>
            </p>
            <p>
              <a href="#">Segurança</a>
            </p>
            <p>
              <a href="#">Wishlist</a>
            </p>
            <p>
              <a href="#">Blog</a>
            </p>
            <p>
              <a href="#">Trabalhe conosco</a>
            </p>
            <p>
              <a href="#">Meus pedidos</a>
            </p>
          </div>
          <div>
            <h3>Categorias</h3>
            <p>
              <a href="#">Camisetas</a>
            </p>
            <p>
              <a href="#">Calças</a>
            </p>
            <p>
              <a href="#">Bonés</a>
            </p>
            <p>
              <a href="#">Headphones</a>
            </p>
            <p>
              <a href="#">Tênis</a>
            </p>
          </div>
          <div>
            <h3>Contato</h3>
            <span>
              Av.Santos Dumont, 1510 - 1 <br />
              andar - Aldeota, Fortaleza - <br />
              Ce, 60150-161
            </span>
            <span>(85) 3051-3411</span>
          </div>
        </div>
      </section>
      <section id="footerDigital">
        <footer>
          <p>© 2025 - Digital college</p>
        </footer>
      </section>
    </>
  );
}

export default Footer;
