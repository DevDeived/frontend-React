import Redirections from "../../assets/redirections.png"
import Tenis1 from "../../assets/tenis1.png"
import Tenis2 from "../../assets/tenis2.png"
import "./CriacaoConta.css"
function CriacaoConta() {

  return (
    <>
      <section id="loginBody">
        <div id="loginForm">
          <div id="loginTitles">
            <h1>Crie sua conta</h1>
            <p>Já possui uma conta ?   Entre <a href="">aqui</a></p>
          </div>
          <div id="inputsLoginForm">
            <label htmlFor="">Email *</label>
            <input type="email" placeholder="Insira seu email" />

            
            <button>Criar conta</button>

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

export default CriacaoConta