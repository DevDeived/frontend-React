import Redirections from "../../assets/redirections.png"
import Tenis1 from "../../assets/tenis1.png"
import Tenis2 from "../../assets/tenis2.png"
import "./LoginBody.css"
function LoginBody() {

  return (
    <>
      <section id="loginBody">
        <div id="loginForm">
          <div>
            <h1>Acesse sua conta</h1>
            <p>Novo cliente ? Então registre-se <a href="">aqui</a></p>
          </div>
          <div>
            <label htmlFor="">Login *</label>
            <input type="email" placeholder="Insira seu login ou email" />

            <label htmlFor="">Senha *</label>
            <input type="password" placeholder="Insira sua senha" />´

            <a href="">Esqueci minha senha</a>

            <button>Acessar conta</button>

            <div>
              <p>Ou faça login com</p>
              <img src={Redirections} alt="" />
            </div>
          </div>
        </div>
        <div id="loginBodyTenis">
            <img src={Tenis1} alt="" />
            <img src={Tenis2} alt="" />
        </div>
      </section>
    </>
  )
}

export default LoginBody
