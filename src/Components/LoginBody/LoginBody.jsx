import Redirections from "../../assets/redirections.png";
import Tenis1 from "../../assets/tenis1.png";
import Tenis2 from "../../assets/tenis2.png";
import Input from "../Input/Input";
import { useState } from "react";
import "./LoginBody.css";
function LoginBody() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();
      console.log(data);
      window.location.href = "/"
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section id="loginBody">
        <div id="loginForm">
          <div id="loginTitles">
            <h1>Acesse sua conta</h1>
            <p>
              Novo cliente ? Então registre-se <a href="">aqui</a>
            </p>
          </div>
          <div id="inputsLoginForm">
            <Input
              type="text"
              placeholder="Digite seu username ou email"
              label="Login *"
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Digite sua senha"
              label="Senha *"
              value = {senha}
              onChange ={(e)=> setSenha(e.target.value)}
            />

            <a href="">Esqueci minha senha</a>

            <button onClick={handleLogin}>Acessar conta</button>

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
  );
}

export default LoginBody;
