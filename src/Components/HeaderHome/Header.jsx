import Logo from "../../assets/logo.png";
import {FaShoppingCart} from 'react-icons/fa';
import "./Header.css"

function Header() {
  return (
    <>
      <section id="HeaderHome">
        <div id="HomePage">
          <img src={Logo} alt="" />
          <input type="text" placeholder="Pesquisar produto..." />
          <a href="">Cadastre-se</a>
          <button>Entrar</button>
          <p><FaShoppingCart /></p>
        </div>

        <div id="headerNav">
          <ul id="headerlist">
            <a href="/"><li>Home</li></a>
            <a href="Produtos"><li>Produtos</li></a>
            <a href=""><li>Categoria</li></a>
            <a href=""><li>Meus Pedidos</li></a>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Header;
