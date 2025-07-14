import Redirections from "../../assets/redirections.png"
import Tenis1 from "../../assets/tenis1.png"
import Tenis2 from "../../assets/tenis2.png"
import Input from "../Input/Input"
import "./LoginBody.css"
function LoginBody() {

  return (
    <>
      <section id="loginBody">
        <div id="loginForm">
          <div id="loginTitles">
            <h1>Acesse sua conta</h1>
            <p>Novo cliente ? Então registre-se <a href="">aqui</a></p>
          </div>
          <div id="inputsLoginForm">
          <Input
            type="text"
            placeholder="Digite seu username ou email"
            label="Login *"  
            />
          <Input
            type="password"
            placeholder="Digite sua senha"
            label="Senha *"  
            />

            <a href="">Esqueci minha senha</a>

            <button>Acessar conta</button>

            <div id="formRedirection">
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
